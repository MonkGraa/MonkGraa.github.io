import assert from "node:assert/strict";
import test from "node:test";
import { readFile, access } from "node:fs/promises";

const root = new URL("../dist/client/", import.meta.url);
const read = (route) =>
  readFile(new URL(route ? `${route}/index.html` : "index.html", root), "utf8");

for (const locale of ["ru", "en"]) {
  const prefix = locale === "en" ? "en/" : "";
  test(`${locale}: work-first homepage exposes cases, services and contact`, async () => {
    const html = await read(prefix ? "en" : "");
    assert.match(html, new RegExp(`<html lang="${locale}">`));
    assert.match(html, /work\/saas\/preview\.mp4/);
    assert.ok(
      html.indexOf('class="motion-preview"') < html.indexOf('id="work"'),
    );
    assert.ok(html.indexOf('id="work"') < html.indexOf('id="services"'));
    assert.ok(html.indexOf('id="services"') < html.indexOf('class="pf-about'));
    for (const slug of ["alanbase", "saas", "reloc", "funpay", "teremok", "blackbox", "mekong"]) {
      assert.ok(html.includes(`href="/${prefix}cases/${slug}/"`));
    }
    assert.match(html, /NDA/);
    assert.match(html, /https:\/\/t.me\/artsup/);
    assert.match(html, /mailto:Artyom.bajutin@gmail.com/);
    assert.match(html, /Manrope/);
    assert.match(html, /Onest/);
    assert.match(html, /logos\/v-agency\.svg/);
    assert.doesNotMatch(html, /<h[23][^>]*>(?:Фриланс|Freelance|V-agency)<\/h/);
    assert.doesNotMatch(html, /<iframe\b/);
  });

  for (const slug of ["alanbase", "saas", "reloc", "funpay", "teremok", "blackbox", "mekong"]) {
    test(`${locale}: ${slug} exports with local navigation and contact`, async () => {
      const html = await read(`${prefix}cases/${slug}`);
      assert.match(html, new RegExp(`<html lang="${locale}">`));
      assert.ok(html.includes(`href="/${prefix}#work"`));
      assert.ok(html.includes(`href="/cases/${slug}/"`));
      assert.ok(html.includes(`href="/en/cases/${slug}/"`));
      assert.match(html, /id="case-contact"/);
      assert.match(html, /<title>[^<]+<\/title>/);
      assert.match(html, /rel="canonical"/);
      if (slug === "saas") {
        assert.match(html, /<video[^>]*controls/);
        assert.match(html, /work\/saas\/film.mp4/);
        assert.match(html, /autoPlay=""/);
        assert.match(html, /loop=""/);
        assert.match(html, /preload="metadata"/);
      } else if (["teremok", "blackbox", "mekong"].includes(slug)) {
        assert.match(html, /<video[^>]*controls/);
        assert.ok(html.includes(`/work/${slug}/film.mp4`));
        assert.ok(html.includes(`/work/${slug}/cover.jpg`));
        assert.match(html, /autoPlay=""/);
        assert.match(html, /muted=""/);
        assert.match(html, /loop=""/);
        assert.match(html, /V Agency/);
      } else if (slug === "alanbase") {
        for (let i = 1; i <= 9; i++)
          assert.ok(html.includes(`/work/alanbase/0${i}.webp`));
      } else if (slug === "reloc") {
        assert.doesNotMatch(html, /<iframe\b|class="vimeo-launch"/);
        for (const name of [
          "instructions",
          "reloc-bot",
          "telegram-bot",
          "safari",
          "chrome",
          "yandex",
          "reloc-3d",
          "notification",
        ])
          assert.ok(html.includes(`/work/reloc/${name}.mp4`));
        assert.equal((html.match(/<video\b/g) ?? []).length, 8);
        assert.equal((html.match(/autoplay=""/gi) ?? []).length, 8);
        assert.equal((html.match(/muted=""/gi) ?? []).length, 8);
        assert.equal((html.match(/loop=""/gi) ?? []).length, 8);
        assert.equal((html.match(/playsinline=""/gi) ?? []).length, 8);
      } else if (slug === "funpay") {
        assert.doesNotMatch(html, /<iframe\b|class="vimeo-launch"/);
        for (const name of ["opener", "outro", "avatar", "ad-01", "ad-02"])
          assert.ok(html.includes(`/work/funpay/${name}.mp4`));
        assert.equal((html.match(/<video\b/g) ?? []).length, 5);
        assert.equal((html.match(/autoplay=""/gi) ?? []).length, 5);
        assert.equal((html.match(/muted=""/gi) ?? []).length, 5);
        assert.equal((html.match(/loop=""/gi) ?? []).length, 5);
        assert.equal((html.match(/playsinline=""/gi) ?? []).length, 5);
      }

      if (["reloc", "funpay"].includes(slug)) {
        assert.doesNotMatch(html, /pf-existing-cover/);
        assert.ok(
          html.indexOf('class="video-groups') <
            html.indexOf('class="pf-case-context'),
        );
      }

      const firstWork =
        slug === "alanbase"
          ? html.indexOf("/work/alanbase/01.webp")
          : html.indexOf("<video");
      assert.ok(firstWork !== -1);
      assert.ok(firstWork < html.indexOf('class="pf-case-context'));
    });
  }
}

test("exported local links and media resolve to files", async () => {
  for (const route of [
    "",
    "en",
    ...["alanbase", "saas", "reloc", "funpay", "teremok", "blackbox", "mekong"].flatMap((slug) => [
      `cases/${slug}`,
      `en/cases/${slug}`,
    ]),
  ]) {
    const html = await read(route);
    const refs = [...html.matchAll(/(?:href|src|poster)="(\/[^"?#]*)/g)].map(
      (match) => match[1],
    );
    for (const ref of new Set(refs)) {
      const path = ref.endsWith("/") ? `${ref}index.html` : ref;
      await assert.doesNotReject(
        access(new URL(path.slice(1), root)),
        `${route}: missing ${ref}`,
      );
    }
  }
});
