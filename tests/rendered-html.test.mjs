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
  assert.match(html, /Графический/);
  assert.match(html, /моушен-/);
  assert.match(html, /Печатная продукция/);
  assert.match(html, />8\+<\/strong>/);
  assert.doesNotMatch(html, />5\+<\/strong>/);
  assert.match(html, /в\u00a0креативном агентстве/);
  assert.match(html, /количестве проектов\.<br\/>Сейчас/);
  assert.match(html, /Работа для Reloc/);
  assert.match(html, /Работа для FunPay/);
  assert.doesNotMatch(
    html,
    /Екатеринбург|Избранное|что-то заметное|01 \/ Обо мне|02 \/ Проекты|03 \/ Направления|04 \/ Контакты/,
  );
  assert.doesNotMatch(html, /дизайнер\.|Опыт работы\.|Проекты\.|Направления работы\.|Контакты\./);
  assert.doesNotMatch(html, /<i aria-hidden="true">↗<\/i>/);
  assert.match(html, /src="\/artem-bazhutin-portrait-ava2\.jpg"/);
  assert.match(html, /alt="Портрет Артёма Бажутина"/);
  assert.doesNotMatch(html, />ART<|>MOTION<|>IDENTITY</);
  assert.match(html, /Reloc/);
  assert.match(html, /FunPay/);
  assert.match(html, /Alpha Hookah/);
  assert.doesNotMatch(html, /client-marquee/);
  assert.match(html, /fonts\.googleapis\.com\/css2/);
  assert.match(html, /family=Roboto/);
  assert.doesNotMatch(html, /Fira|Yanone\+Kaffeesatz/);
  assert.match(html, /src="\/cases\/reloc-cover\.png"/);
  assert.match(html, /src="\/cases\/funpay-cover\.png"/);
  assert.match(html, /bootstrap-icons@1\.13\.1\/icons\/telegram\.svg/);
  assert.match(html, /cdn\.simpleicons\.org\/gmail\/FFFFFF/);
  assert.match(html, /aria-label="Написать Артёму в Telegram"/);
  assert.match(html, /aria-label="Написать Артёму на Gmail"/);
  assert.doesNotMatch(html, /<span>Telegram<\/span>/);
  assert.doesNotMatch(html, />Artyom\.bajutin@gmail\.com<\/a>/);
  assert.doesNotMatch(html, /class="project-number"/);
  assert.match(html, /property="og:image" content="https:\/\/monkgraa\.github\.io\/og\.png"/i);
  assert.match(html, /name="twitter:image" content="https:\/\/monkgraa\.github\.io\/og\.png"/i);
  assert.doesNotMatch(html, /codex-preview|SkeletonPreview|react-loading-skeleton/);
});

for (const project of [
  {
    path: "/cases/reloc",
    client: "Reloc",
    title: "Reloc — кейс Артёма Бажутина",
    description:
      "Reloc — кейс Артёма Бажутина: инструкционные видео, рекламные креативы, motion и 3D для Telegram-приложения.",
    forbidden: ["Концепция и сценарная структура"],
    coverImage: "/cases/reloc-cover.png",
    groups: ["Инструкции", "Навигация", "3D-публикации"],
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
      "FunPay — кейс Артёма Бажутина: титры, заставки, перебивки и motion-графика для YouTube.",
    forbidden: ["3D-ролики"],
    coverImage: "/cases/funpay-cover.png",
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
    for (const forbidden of project.forbidden) {
      assert.doesNotMatch(html, new RegExp(forbidden, "i"));
    }
    assert.equal((html.match(/<iframe\b/g) ?? []).length, project.videos.length);
    assert.match(html, /autoplay=1/);
    assert.match(html, /loop=1/);
    assert.match(html, /muted=1/);
    assert.match(html, /class="case-intro shell"/);
    assert.doesNotMatch(html, /<span class="section-number">Видео<\/span>/);
    assert.doesNotMatch(html, /Видео проекта/);
    assert.doesNotMatch(html, /Видео \/ Vimeo/);
    assert.match(html, new RegExp(`aria-label="Работа для ${project.client}"`));
    assert.doesNotMatch(html, /class="case-cover-media"/);
    assert.match(
      html,
      new RegExp(
        `property="og:image" content="https:\\/\\/monkgraa\\.github\\.io${project.coverImage}"`,
        "i",
      ),
    );
    assert.match(
      html,
      new RegExp(
        `name="twitter:image" content="https:\\/\\/monkgraa\\.github\\.io${project.coverImage}"`,
        "i",
      ),
    );
    assert.doesNotMatch(
      html,
      new RegExp(`<p class="case-eyebrow">${project.client}(?:<!-- -->)? /`),
    );
    assert.doesNotMatch(html, /Selected motion works|>PLAY<|>REPEAT</i);
    assert.doesNotMatch(html, /\/og\.png/i);
  });
}
