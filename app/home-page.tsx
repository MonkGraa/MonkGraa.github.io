import { LanguageSwitcher } from "./language-switcher";
import { MotionPreview } from "./motion-media";
import { foodCases, type FoodCaseSlug } from "./cases/food-cases";
import { ClientReel } from "./client-reel";

type Locale = "ru" | "en";

export function HomePage({ locale }: { locale: Locale }) {
  const en = locale === "en";
  const root = en ? "/en" : "";
  const t = (ru: string, english: string) => (en ? english : ru);
  const projects = [
    {
      slug: "alanbase",
      name: "Alanbase",
      title: t(
        "Графика для рекламы и контента",
        "Graphics for ads and content",
      ),
      text: t(
        "Рекламные креативы, контент и презентации.",
        "Advertising creative, content and presentations.",
      ),
      tags: t(
        "Реклама · Соцсети · Презентации",
        "Advertising · Social · Presentations",
      ),
      image: "/work/alanbase/01.webp",
    },
    {
      slug: "saas",
      name: "OMIndex",
      title: t(
        "О продукте за одну минуту",
        "A one-minute product film",
      ),
      text: t(
        "Анимация интерфейса и типографика в SaaS-ролике.",
        "Interface animation and typography in a SaaS film.",
      ),
      tags: "Motion · SaaS · Video",
      image: "/work/saas/omindex-cover.jpg",
    },
    {
      slug: "reloc",
      name: "Reloc",
      title: t(
        "От инструкции до 3D-рекламы",
        "From step-by-step guides to 3D ads",
      ),
      text: t(
        "Объясняющие и рекламные видео для Telegram-приложения.",
        "Instructional and advertising videos for a Telegram app.",
      ),
      tags: "Motion · 3D · Telegram",
      image: "/cases/reloc-cover.png",
    },
    {
      slug: "funpay",
      name: "FunPay",
      title: t("Узнаваемый YouTube-контент", "A recognizable look for YouTube"),
      text: t(
        "Титры, заставки и перебивки для видео и рубрик.",
        "Titles, intros and transitions for videos and series.",
      ),
      tags: "YouTube · Motion · Video",
      image: "/cases/funpay-cover.png",
    },
    ...Object.entries(foodCases).map(([slug, data]) => ({
      slug: slug as FoodCaseSlug,
      name: data.name[en ? 1 : 0],
      title: data.title[en ? 1 : 0],
      text: data.summary[en ? 1 : 0],
      tags: data.tags,
      image: `/work/${slug}/cover.jpg`,
    })),
  ];
  const services = [
    {
      title: t("Айдентика", "Visual identity"),
      text: t(
        "Разрабатываю визуальный стиль и ключевые образы, адаптирую их под разные носители. Работаю и по готовым брендбукам.",
        "I design visual identities and key visuals, then adapt them for different uses. I also work with existing brand guidelines.",
      ),
      link: "#contact",
      proof: t("Обсудить задачу", "Discuss a project"),
    },
    {
      title: "Motion & 3D",
      text: t(
        "Рекламные ролики, объясняющая анимация, титры, заставки и трёхмерные сцены.",
        "Advertising films, explainer animation, titles, intros and 3D scenes.",
      ),
      link: `${root}/cases/reloc/`,
      proof: "Reloc ↗",
    },
    {
      title: t("Соцсети и реклама", "Social media & advertising"),
      text: t(
        "Креативы, баннеры и оформление контента для социальных сетей и рекламных кампаний.",
        "Creative assets, banners and content design for social media and advertising campaigns.",
      ),
      link: `${root}/cases/alanbase/`,
      proof: "Alanbase ↗",
    },
    {
      title: t("Видео", "Video"),
      text: t(
        "Монтаж, UGC, оформление YouTube-каналов и понятные продуктовые инструкции.",
        "Editing, UGC, YouTube channel graphics and clear product walkthroughs.",
      ),
      link: `${root}/cases/funpay/`,
      proof: "FunPay ↗",
    },
    {
      title: t("Печатная продукция", "Print design"),
      text: t(
        "Макеты для печати, упаковка, полиграфия и другие рекламные материалы.",
        "Print-ready layouts, packaging, printed collateral and other advertising materials.",
      ),
      link: "#contact",
      proof: t("Обсудить задачу", "Discuss a project"),
    },
    {
      title: t(
        "Презентации и графика для статей",
        "Presentations & editorial graphics",
      ),
      text: t(
        "Оформляю презентации и статьи, собираю сложную информацию в понятную инфографику. Сохраняю стиль бренда.",
        "I design presentations, article graphics and infographics that explain complex information and fit the brand's style.",
      ),
      link: `${root}/cases/alanbase/`,
      proof: "Alanbase ↗",
    },
  ];
  return (
    <main className="portfolio" id="top" lang={locale}>
      {en && (
        <script
          dangerouslySetInnerHTML={{
            __html: 'document.documentElement.lang="en"',
          }}
        />
      )}
      <header className="pf-header">
        <a className="pf-brand" href="#top">
          {t("Артём Бажутин", "Artem Bazhutin")}
          <span>
            {t("Графический / моушен-дизайнер", "Graphic / motion designer")}
          </span>
        </a>
        <nav className="pf-main-nav" aria-label={t("Основная навигация", "Main navigation")}>
          <a href="#work">{t("Работы", "Work")}</a>
          <a href="#services">{t("Услуги", "Services")}</a>
          <a className="pf-nav-contact" href="#contact">{t("Контакты", "Contact")}</a>
        </nav>
        <LanguageSwitcher locale={locale} russianHref="/" englishHref="/en/" />
      </header>
      <section className="pf-hero pf-shell" aria-labelledby="hero-title">
        <div className="pf-hero-heading">
          <div className="pf-personal-intro">
            <img
              src="/artem-bazhutin-portrait-ava2.jpg"
              width="72"
              height="88"
              alt={t("Артём Бажутин", "Artem Bazhutin")}
            />
            <div>
              <p>{t("Привет, я Артём Бажутин.", "Hi, I'm Artem Bazhutin.")}</p>
              <span>
                {t(
                  "Графический и моушен-дизайнер · с 2017 года",
                  "Graphic & motion designer · since 2017",
                )}
              </span>
            </div>
          </div>
          <h1 id="hero-title">
            {t("Графика и анимация", "Graphics & motion")}
            <br />
            <span>
              {t("для заметного контента.", "for content that stands out.")}
            </span>
          </h1>
          <div className="pf-hero-bottom">
            <p>
              {t(
                "Делаю графику для соцсетей, рекламы, видео и презентаций. Берусь за отдельные креативы и серии материалов для бренда.",
                "I design graphics for social media, advertising, video and presentations. I work on individual assets and full series of branded materials.",
              )}
            </p>
            <div className="pf-hero-actions">
              <a className="pf-button" href="#contact">
                {t("Связаться", "Get in touch")}{" "}
                <span aria-hidden="true">↗</span>
              </a>
              <a className="pf-scroll-cue" href="#work">
                <span className="pf-scroll-label">{t("Смотреть работы", "View selected work")}</span>
                <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>
        </div>
        <div className="pf-feature">
          <MotionPreview locale={locale} />
        </div>
      </section>
      <ClientReel locale={locale} placement="hero" />
      <section
        className="pf-work pf-shell"
        id="work"
        aria-labelledby="work-title"
      >
        <div className="pf-section-title">
          <h2 id="work-title">{t("Работы", "Selected work")}</h2>
          <p>
            {t(
              "Рекламная графика, продуктовые ролики и оформление YouTube.",
              "Advertising graphics, product films and YouTube graphics.",
            )}
          </p>
        </div>
        <div className="pf-project-grid">
          {projects.map((p, i) => (
            <a
              className={`pf-project pf-project-${p.slug}`}
              href={`${root}/cases/${p.slug}/`}
              key={p.slug}
            >
              <div className="pf-project-media">
                {p.slug === "alanbase" ? (
                  <div className="pf-alanbase-collage">
                    <img
                      src="/work/alanbase/01.webp"
                      width="1200"
                      height="1200"
                      alt={t(
                        "Alanbase: рекламный креатив",
                        "Alanbase advertising creative",
                      )}
                      loading="lazy"
                    />
                    <img
                      src="/work/alanbase/03.webp"
                      width="1200"
                      height="1200"
                      alt={t(
                        "Alanbase: креатив для партнёрской программы",
                        "Alanbase affiliate program creative",
                      )}
                      loading="lazy"
                    />
                  </div>
                ) : (
                  <img
                    src={p.image}
                    width="1900"
                    height="1100"
                    alt={p.title}
                    loading="lazy"
                  />
                )}
                <span className="pf-project-open" aria-hidden="true">
                  ↗
                </span>
              </div>
              <div className="pf-project-label">
                <span>{p.name}</span>
                <span className="pf-project-index">0{i + 1}</span>
              </div>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
              <span className="pf-tags">{p.tags}</span>
            </a>
          ))}
        </div>
        <aside className="pf-nda">
          <div>
            <span className="pf-kicker">
              {t("За пределами портфолио", "Beyond the portfolio")}
            </span>
            <h3>
              {t(
                "Не все работы можно показать публично.",
                "Some projects are confidential.",
              )}
            </h3>
            <p>
              {t(
                "Другие проекты под NDA. Напишите мне, и я расскажу, какие примеры могу показать лично по условиям соглашений.",
                "Other projects are under NDA. Get in touch, and I'll explain which examples I can share privately under those agreements.",
              )}
            </p>
          </div>
          <a
            className="pf-text-link"
            href="https://t.me/artsup"
            target="_blank"
            rel="noreferrer"
          >
            {t("Запросить примеры", "Ask for examples")} ↗
          </a>
        </aside>
      </section>
      <section
        className="pf-services"
        id="services"
        aria-labelledby="services-title"
      >
        <div className="pf-shell">
          <div className="pf-section-title">
            <h2 id="services-title">
              {t("Чем могу помочь", "What I can help with")}
            </h2>
            <p>
              {t(
                "Для вашей команды или отдельного проекта.",
                "For your team or your next project.",
              )}
            </p>
          </div>
          <div className="pf-service-list">
            {services.map((s, i) => (
              <article key={s.title}>
                <span className="pf-service-number">0{i + 1}</span>
                <h3>{s.title}</h3>
                <div>
                  <p>{s.text}</p>
                  <a href={s.link}>{s.proof}</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="pf-toolkit pf-shell" aria-labelledby="toolkit-title">
        <h2 id="toolkit-title">{t("Рабочие инструменты", "My toolkit")}</h2>
        <ul className="pf-toolkit-list">
          {[
            { name: "Photoshop", logo: "photoshop" },
            { name: "Illustrator", logo: "illustrator" },
            { name: "After Effects", logo: "after-effects" },
            { name: "Premiere Pro", logo: "premiere-pro" },
            { name: "Blender", logo: "blender" },
            { name: "ComfyUI", logo: "comfy" },
            { name: "Claude", logo: "claude" },
            { name: "Codex", logo: "openai" },
            { name: "GPT Image", logo: "openai" },
          ].map((tool) => (
            <li key={tool.name}>
              <img src={`/logos/${tool.logo}.svg`} alt="" width="28" height="28" loading="lazy" />
              <span>{tool.name}</span>
            </li>
          ))}
        </ul>
      </section>
      <section className="pf-ai pf-shell" aria-labelledby="ai-title">
        <div className="pf-section-title">
          <div>
            <p className="pf-kicker">{t("Инструменты", "Tools")}</p>
            <h2 id="ai-title">
              {t("Как я использую AI", "How I use AI")}
            </h2>
          </div>
          <p>
            {t(
              "Автоматизирую рутину и управляю результатом генерации.",
              "I automate repetitive tasks and control the generated output.",
            )}
          </p>
        </div>
        <p className="pf-ai-intro">
          {t(
            "Подбираю и связываю AI-инструменты для генерации изображений, видео и 3D, а также для автоматизации работы. Сам задаю визуальное направление, выбираю подходящие варианты и дорабатываю материалы.",
            "I choose and connect AI tools to generate images, video and 3D, and to automate parts of my work. I set the visual direction, choose the strongest options and finish the assets myself.",
          )}
        </p>
        <div className="pf-ai-grid">
          <article>
            <div className="pf-tool-identity">
              <img src="/logos/comfy.svg" alt="" width="36" height="36" />
              <h3>ComfyUI</h3>
            </div>
            <p>
              {t(
                "Собираю нодовые схемы для генерации изображений, видео и 3D. Использую референсы, меняю параметры и повторяю генерацию, пока результат не подойдёт под нужный стиль и задачу.",
                "I build node-based workflows for generating images, video and 3D. I use references, adjust settings and repeat generation until the output fits the style and brief.",
              )}
            </p>
            <span>Image / Video / 3D</span>
          </article>
          <article>
            <div className="pf-tool-identity">
              <img src="/logos/claude.svg" alt="" width="36" height="36" />
              <img
                src="/logos/openai.svg"
                alt="OpenAI"
                width="36"
                height="36"
              />
              <h3>Claude / Codex</h3>
            </div>
            <p>
              {t(
                "Пишу скрипты и небольшие инструменты, которые ускоряют подготовку материалов, пакетную обработку и другие повторяющиеся задачи. Качество результата проверяю сам.",
                "I write scripts and small tools to speed up asset preparation, batch processing and other repetitive tasks. I check the quality of the results myself.",
              )}
            </p>
            <span>
              {t("Автоматизация / Инструменты", "Automation / Custom tools")}
            </span>
          </article>
          <article>
            <div className="pf-tool-identity">
              <img src="/logos/mcp.svg" alt="" width="36" height="36" />
              <h3>MCP</h3>
            </div>
            <p>
              {t(
                "Подключаю AI-ассистентов к рабочим инструментам и материалам проекта. Так меньше времени уходит на ручной перенос данных между ними и больше остаётся на дизайн.",
                "I connect AI assistants to my tools and project materials. This reduces manual transfers between tools and gives me more time for design.",
              )}
            </p>
            <span>
              {t("Интеграции / Рабочие процессы", "Integrations / Workflows")}
            </span>
          </article>
        </div>
      </section>
      <section className="pf-about pf-shell" aria-labelledby="about-title">
        <img
          src="/artem-bazhutin-portrait-ava2.jpg"
          width="1484"
          height="2270"
          alt={t("Артём Бажутин", "Artem Bazhutin")}
          loading="lazy"
        />
        <div>
          <p className="pf-kicker">
            {t("Дизайн с 2017 года", "Designing since 2017")}
          </p>
          <h2 id="about-title">{t("Артём Бажутин", "Artem Bazhutin")}</h2>
          <p>
            {t(
              "Я графический и моушен-дизайнер. Делаю контент, рекламу и другие визуальные материалы для брендов. Вместе с командой обсуждаю идеи и предлагаю, как их оформить с учётом задачи и аудитории.",
              "I'm a graphic and motion designer. I create content, advertising and other visual materials for brands. I discuss ideas with the team and suggest ways to develop them for the brief and audience.",
            )}
          </p>
        </div>
      </section>
      <ClientReel locale={locale} />
      <section className="pf-contact" id="contact">
        <div className="pf-shell">
          <p className="pf-kicker">
            {t(
              "Проектная работа и предложения в команду",
              "Project inquiries & team opportunities",
            )}
          </p>
          <h2>{t("Обсудим вашу задачу?", "What are you working on?")}</h2>
          <div className="pf-contact-bottom">
            <p>
              {t(
                "Расскажите о проекте или роли, нужных форматах и сроках.",
                "Tell me about the project or role, the formats you need and your timeline.",
              )}
            </p>
            <div>
              <a
                className="pf-button"
                href="https://t.me/artsup"
                target="_blank"
                rel="noreferrer"
              >
                Telegram ↗
              </a>
              <a className="pf-email" href="mailto:Artyom.bajutin@gmail.com">
                Artyom.bajutin@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>
      <footer className="pf-footer pf-shell">
        <span>© 2026 {t("Артём Бажутин", "Artem Bazhutin")}</span>
        <a href="#top">{t("Наверх", "Back to top")} ↑</a>
      </footer>
    </main>
  );
}
