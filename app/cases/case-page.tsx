import type { PortfolioCase } from "./case-data";
import { bindShortRussianWords } from "../typography";

export function CasePage({ project }: { project: PortfolioCase }) {
  return (
    <main className={`case-page case-${project.slug}`} id="top">
      <div className="case-cover">
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

        <section className="case-intro shell" aria-labelledby="case-title">
          <p className="case-eyebrow">
            {bindShortRussianWords(project.eyebrow)}
          </p>
          <div className="case-intro-copy">
            <h1 id="case-title" aria-label={project.title}>
              Работа
              <br />
              для&nbsp;{project.client}
            </h1>
            <p>{bindShortRussianWords(project.summary)}</p>
          </div>
        </section>
      </div>

      <section className="case-videos" id="videos">
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
                  <h3 id={headingId}>{bindShortRussianWords(group.title)}</h3>
                  <p>{bindShortRussianWords(group.description)}</p>
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
                        <p>{bindShortRussianWords(video.caption)}</p>
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
          <strong>{bindShortRussianWords(project.period)}</strong>
        </div>
        <div>
          <span>Формат</span>
          <strong>{bindShortRussianWords(project.format)}</strong>
        </div>
        <div>
          <span>Роль</span>
          <strong>Дизайн и производство</strong>
        </div>
      </section>

      <section className="case-story shell" aria-label="Задача и решение">
        <article>
          <span className="section-number">01 / Задача</span>
          <p>{bindShortRussianWords(project.challenge)}</p>
        </article>
        <article>
          <span className="section-number">02 / Решение</span>
          <p>{bindShortRussianWords(project.solution)}</p>
        </article>
      </section>

      <section className="case-deliverables" aria-labelledby="deliverables-title">
        <div className="shell case-section-heading">
          <span className="section-number">03 / Что сделано</span>
          <h2 id="deliverables-title" aria-label="Система в деталях">
            Система
            <br />
            <span>в&nbsp;деталях</span>
          </h2>
        </div>
        <div className="shell deliverable-list">
          {project.deliverables.map((item) => (
            <article key={item.number}>
              <span>{item.number}</span>
              <h3>{bindShortRussianWords(item.title)}</h3>
              <p>{bindShortRussianWords(item.text)}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="case-role shell" aria-labelledby="role-title">
        <span className="section-number">04 / Моя роль</span>
        <h2 id="role-title">
          От&nbsp;идеи
          <br />
          до&nbsp;финального
          <br />
          кадра
        </h2>
        <ul>
          {project.role.map((item) => (
            <li key={item}>{bindShortRussianWords(item)}</li>
          ))}
        </ul>
      </section>

      <a className="next-case" href={`/cases/${project.nextSlug}`}>
        <span>Следующий кейс</span>
        <strong>{project.nextClient}</strong>
      </a>

      <footer className="site-footer shell">
        <span>© 2026 Артём Бажутин</span>
        <a href="#top">Наверх ↑</a>
      </footer>
    </main>
  );
}
