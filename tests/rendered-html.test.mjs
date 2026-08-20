import assert from "node:assert/strict";
import test from "node:test";

async function render(path = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${path}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders Artem Bazhutin portfolio", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<html lang="ru">/i);
  assert.match(html, /<title>Артём Бажутин — графический и моушен-дизайнер<\/title>/i);
  assert.match(html, /Дизайн,/);
  assert.match(html, /который/);
  assert.match(html, /Reloc/);
  assert.match(html, /FunPay/);
  assert.match(html, /ALPHA HOOKAH/);
  assert.match(html, /fonts\.googleapis\.com\/css2/);
  assert.match(html, /Fira\+Sans\+Extra\+Condensed/);
  assert.match(html, /family=Roboto/);
  assert.doesNotMatch(html, /Fira\+Mono|Yanone\+Kaffeesatz/);
  assert.match(html, /property="og:image" content="http:\/\/localhost:3000\/og\.png"/i);
  assert.match(html, /name="twitter:image" content="http:\/\/localhost:3000\/og\.png"/i);
  assert.doesNotMatch(html, /codex-preview|SkeletonPreview|react-loading-skeleton/);
});

for (const project of [
  {
    path: "/cases/reloc",
    client: "Reloc",
    title: "Reloc — кейс Артёма Бажутина",
    description:
      "Reloc — кейс Артёма Бажутина: инструкционные видео, рекламные креативы, motion и 3D для Telegram-приложения.",
    groups: ["Инструкции", "Navigation", "3D-публикации"],
    videos: [
      "1219851137",
      "1219851124",
      "1219851056",
      "1219851092",
      "1219851060",
      "1219851107",
      "1219849796",
      "1219850163",
    ],
  },
  {
    path: "/cases/funpay",
    client: "FunPay",
    title: "FunPay — кейс Артёма Бажутина",
    description:
      "FunPay — кейс Артёма Бажутина: 3D-ролики, титры, заставки, перебивки и единая motion-система для YouTube.",
    groups: ["YouTube motion system"],
    videos: ["1219856666", "1219857205", "1219856664", "1219856665", "1219856667"],
  },
]) {
  test(`server-renders ${project.client} case with specific metadata`, async () => {
    const response = await render(project.path);
    assert.equal(response.status, 200);

    const html = await response.text();
    assert.match(html, new RegExp(`<title>${project.title}<\\/title>`, "i"));
    assert.match(html, new RegExp(`property="og:title" content="${project.title}"`, "i"));
    assert.match(html, new RegExp(`name="twitter:title" content="${project.title}"`, "i"));
    assert.match(html, new RegExp(project.description, "i"));
    for (const group of project.groups) {
      assert.match(html, new RegExp(group));
    }
    for (const videoId of project.videos) {
      assert.match(html, new RegExp(`player\\.vimeo\\.com/video/${videoId}`));
    }
    assert.equal((html.match(/<iframe\b/g) ?? []).length, project.videos.length);
    assert.match(html, /autoplay=1/);
    assert.match(html, /loop=1/);
    assert.match(html, /muted=1/);
    assert.match(html, new RegExp(`>${project.client}<`));
    assert.doesNotMatch(html, /og:image|twitter:image|\/og\.png/i);
  });
}
