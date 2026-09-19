import { CaseShell } from "./case-shell";

export function NewCasePage({
  kind,
  locale = "ru",
}: {
  kind: "alanbase" | "saas";
  locale?: "ru" | "en";
}) {
  const en = locale === "en";
  const t = (ru: string, english: string) => (en ? english : ru);
  const alanbase = kind === "alanbase";
  const root = en ? "/en" : "";
  const captions = [
    t("Креатив о возможностях платформы", "Platform capabilities creative"),
    t("Креатив о партнёрской программе", "Affiliate program creative"),
    t("Креатив о запуске программы", "Program launch creative"),
    t("Промобаннер", "Promotional banner"),
    t("Передовые стратегии медиабаинга", "Advanced media buying strategies"),
    t("Эволюция медиабаинга", "The evolution of media buying"),
    t("Проблемы медиабаинга", "Media buying challenges"),
    t("AI в медиабаинге", "AI in media buying"),
    t("Каналы и инструменты", "Channels and tools"),
  ];
  return (
    <CaseShell
      locale={locale}
      slug={kind}
      nextHref={`${root}/cases/${alanbase ? "saas" : "reloc"}/`}
      nextName={alanbase ? "OMIndex" : "Reloc"}
    >
      <section className="pf-case-intro pf-shell">
        <p className="pf-kicker">
          {alanbase
            ? t(
                "Alanbase / Графический и моушен-дизайн",
                "Alanbase / Graphic & motion design",
              )
            : "OMIndex / SaaS / Motion design"}
        </p>
        <h1>
          {alanbase
            ? t("Графика\nдля Alanbase.", "Graphics\nfor Alanbase.")
            : t("OMIndex\nв движении.", "OMIndex\nin motion.")}
        </h1>
        <p className="pf-case-summary">
          {alanbase
            ? t(
                "Рекламные креативы, контент и презентации для платформы партнёрского маркетинга Alanbase.",
                "Advertising creative, content and presentations for Alanbase, an affiliate marketing platform.",
              )
            : t(
                "Минутный ролик для OMIndex (Outset Media Index), платформы аналитики и сравнения медиа. Показываю продукт с помощью анимации интерфейса, данных и типографики.",
                "A one-minute film for OMIndex (Outset Media Index), a media intelligence and benchmarking platform. It introduces the product through animated interface screens, data and typography.",
              )}
        </p>
        {!alanbase && (
          <a
            className="pf-client-website"
            href="https://omindex.io/"
            target="_blank"
            rel="noreferrer"
          >
            omindex.io ↗
          </a>
        )}
      </section>
      {alanbase ? (
        <>
          <div className="pf-shell pf-alanbase-lead">
            <img
              src="/work/alanbase/01.webp"
              width="1200"
              height="1200"
              alt={captions[0]}
            />
            <img
              src="/work/alanbase/02.webp"
              width="1200"
              height="1200"
              alt={captions[1]}
            />
            <img
              src="/work/alanbase/03.webp"
              width="1200"
              height="1200"
              alt={captions[2]}
            />
          </div>
          <section className="pf-case-context pf-shell">
            <h2>{t("Что я делал", "My contribution")}</h2>
            <div>
              <p>
                {t(
                  "Создавал рекламные креативы и посты для соцсетей, анимации, графику для статей, печатные материалы, обложки YouTube и презентации.",
                  "I created advertising assets and social posts, animations, article graphics, print materials, YouTube covers and presentations.",
                )}
              </p>
              <p>
                {t(
                  "В этой подборке рекламной и информационной графики я использовал тёмный фон, фиолетовые акценты и крупную типографику. Сложные темы объяснял с помощью схем.",
                  "For this selection of advertising and information graphics, I used dark backgrounds, violet accents, bold typography and diagrams to keep the different formats consistent.",
                )}
              </p>
            </div>
          </section>
          <section className="pf-case-gallery pf-shell">
            <div className="pf-section-title">
              <h2>{t("Реклама и контент", "Advertising & content")}</h2>
              <p>
                {t(
                  "От короткого сообщения до подробного объяснения.",
                  "From a quick message to a detailed explanation.",
                )}
              </p>
            </div>
            <figure className="pf-wide-art">
              <img
                src="/work/alanbase/04.webp"
                width="1200"
                height="628"
                alt={captions[3]}
                loading="lazy"
              />
              <figcaption>{captions[3]}</figcaption>
            </figure>
            <div className="pf-gallery-grid">
              {[5, 6, 7, 8, 9].map((i) => (
                <figure key={i}>
                  <img
                    src={`/work/alanbase/0${i}.webp`}
                    width="1280"
                    height="689"
                    alt={captions[i - 1]}
                    loading="lazy"
                  />
                  <figcaption>{captions[i - 1]}</figcaption>
                </figure>
              ))}
            </div>
          </section>
          <section className="pf-case-context pf-shell">
            <h2>
              {t("Задачи внутри бренда", "Working within the brand")}
            </h2>
            <p>
              {t(
                "В рекламе я выделял предложение, а в информационных материалах собирал данные в понятные схемы. Во всей серии сохранял узнаваемый стиль бренда.",
                "In the ads, I made the offer easy to spot. In the informational pieces, I organized the content into diagrams. Both use the same recognizable brand style.",
              )}
            </p>
          </section>
        </>
      ) : (
        <>
          <div className="pf-shell pf-full-film">
            <video
              controls
              muted
              playsInline
              preload="none"
              poster="/work/saas/omindex-cover.jpg"
              aria-label={t(
                "Продуктовый SaaS-ролик: полная версия",
                "SaaS product film: full version",
              )}
            >
              <source src="/work/saas/film.mp4" type="video/mp4" />
              <a href="/work/saas/film.mp4">
                {t("Открыть ролик", "Open film")}
              </a>
            </video>
          </div>
          <div className="pf-film-facts pf-shell">
            <div>
              <span>{t("Формат", "Format")}</span>
              <strong>{t("Продуктовый ролик", "Product film")}</strong>
            </div>
            <div>
              <span>{t("Длительность", "Duration")}</span>
              <strong>01:00</strong>
            </div>
            <div>
              <span>{t("В кадре", "On screen")}</span>
              <strong>
                {t(
                  "Интерфейс · Типографика · Данные",
                  "Interface · Typography · Data",
                )}
              </strong>
            </div>
          </div>
          <section className="pf-case-context pf-shell">
            <h2>
              {t("Показать продукт в действии", "Show the product in action")}
            </h2>
            <div>
              <p>
                {t(
                  "Ролик начинается с вопроса о продукте, затем показывает его интерфейс: данные, фильтры и ключевые показатели. В конце зрителю предлагают узнать больше.",
                  "The film opens with a question about the product, then shows its data, filters and key metrics in the interface. It ends with an invitation to learn more.",
                )}
              </p>
              <p>
                {t(
                  "Крупные планы помогают выделить детали, а смена типографики и экранов задаёт ритм истории.",
                  "Close-ups bring details into focus, while alternating typography and interface shots set the pace of the story.",
                )}
              </p>
            </div>
          </section>
        </>
      )}
    </CaseShell>
  );
}
