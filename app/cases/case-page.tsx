import type { PortfolioCase } from "./case-data";

export function CasePage({ project }: { project: PortfolioCase }) {
  return (
    <main className={`case-page case-${project.slug}`} id="top">
      <header className="case-header shell">
        <a className="brand" href="/" aria-label="Вернуться на главную">
          <span className="brand-mark">АБ</span>
          <span className="brand-name">Артём Бажутин</span>
        </a>
        <a className="case-back" href="/#work">
          ← Все проекты
        </a>
        <span className="case-count">{project.number} / 02</span>
      </header>

      <section className="case-hero shell" aria-labelledby="case-title">
        <p className="case-eyebrow">{project.eyebrow}</p>
        <h1 id="case-title">{project.client}</h1>
        <div className="case-hero-bottom">
          <h2>{project.title}</h2>
          <p>{project.summary}</p>
        </div>
      </section>

      <section className="case-showreel" aria-label={`Подборка работ ${project.client}`}>
        <div className="case-showreel-grid" aria-hidden="true" />
        <span className="showreel-kicker">Selected motion works</span>
        <div className="showreel-title" aria-hidden="true">
          <span>{project.client}</span>
          <span>PLAY</span>
          <span>REPEAT</span>
        </div>
        <div className="showreel-shape shape-one" aria-hidden="true" />
        <div className="showreel-shape shape-two" aria-hidden="true" />
        <a className="showreel-link" href="#videos">
          <span>Смотреть ролики</span>
          <strong>Play ↓</strong>
        </a>
      </section>

      <section className="case-videos" id="videos" aria-labelledby="videos-title">
        <div className="shell video-section-intro">
          <span className="section-number">Видео / Vimeo</span>
          <h2 id="videos-title">Работы в движении.</h2>
        </div>

        <div className="shell video-groups">
          {project.videoGroups.map((group) => {
            const headingId = `video-group-${project.slug}-${group.number}`;

            return (
              <section
                className="video-group"
                aria-labelledby={headingId}
                key={group.number}
              >
                <header className="video-group-heading">
                  <span>{group.number}</span>
                  <h3 id={headingId}>{group.title}</h3>
                  <p>{group.description}</p>
                </header>

                <div
                  className={`video-grid video-grid-${group.videos.length}${
                    group.layout ? ` video-grid-${group.layout}` : ""
                  }`}
                >
                  {group.videos.map((video) => (
                    <article
                      className={`video-card video-${video.ratio}`}
                      key={video.id}
                    >
                      <div className="video-player">
                        <iframe
                          src={`https://player.vimeo.com/video/${video.id}?badge=0&autoplay=1&loop=1&muted=1&autopause=0&playsinline=1&player_id=0&app_id=58479`}
                          title={`${video.title} — ${project.client}`}
                          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                          referrerPolicy="strict-origin-when-cross-origin"
                          allowFullScreen
                        />
                      </div>
                      <div className="video-caption">
                        <span>{video.title}</span>
                        <p>{video.caption}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </section>

      <section className="case-facts shell" aria-label="Информация о проекте">
        <div>
          <span>Период</span>
          <strong>{project.period}</strong>
        </div>
        <div>
          <span>Формат</span>
          <strong>{project.format}</strong>
        </div>
        <div>
          <span>Роль</span>
          <strong>Дизайн и производство</strong>
        </div>
      </section>

      <section className="case-story shell" aria-label="Задача и решение">
        <article>
          <span className="section-number">01 / Задача</span>
          <p>{project.challenge}</p>
        </article>
        <article>
          <span className="section-number">02 / Решение</span>
          <p>{project.solution}</p>
        </article>
      </section>

      <section className="case-deliverables" aria-labelledby="deliverables-title">
        <div className="shell case-section-heading">
          <span className="section-number">03 / Что сделано</span>
          <h2 id="deliverables-title">Система в деталях.</h2>
        </div>
        <div className="shell deliverable-list">
          {project.deliverables.map((item) => (
            <article key={item.number}>
              <span>{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="case-role shell" aria-labelledby="role-title">
        <span className="section-number">04 / Моя роль</span>
        <h2 id="role-title">От идеи до финального кадра.</h2>
        <ul>
          {project.role.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <a className="next-case" href={`/cases/${project.nextSlug}`}>
        <span>Следующий кейс</span>
        <strong>{project.nextClient}</strong>
        <i aria-hidden="true">↗</i>
      </a>

      <footer className="site-footer shell">
        <span>© 2026 Артём Бажутин</span>
        <a href="#top">Наверх ↑</a>
      </footer>
    </main>
  );
}
