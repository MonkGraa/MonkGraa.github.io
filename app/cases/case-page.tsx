import type { PortfolioCase } from "./case-data";
import { bindShortRussianWords } from "../typography";
import { LanguageSwitcher } from "../language-switcher";

export function CasePage({ project, locale = "ru" }: { project: PortfolioCase; locale?: "ru" | "en" }) {
  const english = locale === "en";
  const homeHref = english ? "/en/" : "/";
  const casePath = `/cases/${project.slug}`;
  const format = (text: string) => english ? text : bindShortRussianWords(text);

  return (
    <main className={`case-page case-${project.slug}`} id="top" lang={locale}>
      {english && (
        <script dangerouslySetInnerHTML={{ __html: 'document.documentElement.lang="en"' }} />
      )}
      <div className="case-cover">
        <header className="case-header shell">
          <a className="brand" href={homeHref} aria-label={english ? "Back to home" : "Вернуться на главную"}>
            <span className="brand-mark">{english ? "AB" : "АБ"}</span>
            <span className="brand-name">{english ? "Artem Bazhutin" : "Артём Бажутин"}</span>
          </a>
          <a className="case-back" href={`${homeHref}#work`}>
            {english ? "← All projects" : "← Все проекты"}
          </a>
          <div className="case-header-end">
            <span className="case-count">{project.number} / 02</span>
            <LanguageSwitcher locale={locale} russianHref={casePath} englishHref={`/en${casePath}`} />
          </div>
        </header>

        <section className="case-intro shell" aria-labelledby="case-title">
          <p className="case-eyebrow">
            {format(project.eyebrow)}
          </p>
          <div className="case-intro-copy">
            <h1 id="case-title" aria-label={project.title}>
              {english ? "Work" : "Работа"}
              <br />
              {english ? "for" : "для"}&nbsp;{project.client}
            </h1>
            <p>{format(project.summary)}</p>
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
                  <h3 id={headingId}>{format(group.title)}</h3>
                  <p>{format(group.description)}</p>
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
                        <p>{format(video.caption)}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </section>

      <section className="case-facts shell" aria-label={english ? "Project information" : "Информация о проекте"}>
        <div>
          <span>{english ? "Period" : "Период"}</span>
          <strong>{format(project.period)}</strong>
        </div>
        <div>
          <span>{english ? "Format" : "Формат"}</span>
          <strong>{format(project.format)}</strong>
        </div>
        <div>
          <span>{english ? "Role" : "Роль"}</span>
          <strong>{english ? "Design and production" : "Дизайн и производство"}</strong>
        </div>
      </section>

      <section className="case-story shell" aria-label={english ? "Brief and approach" : "Задача и решение"}>
        <article>
          <span className="section-number">01 / {english ? "Brief" : "Задача"}</span>
          <p>{format(project.challenge)}</p>
        </article>
        <article>
          <span className="section-number">02 / {english ? "Approach" : "Решение"}</span>
          <p>{format(project.solution)}</p>
        </article>
      </section>

      <section className="case-deliverables" aria-labelledby="deliverables-title">
        <div className="shell case-section-heading">
          <span className="section-number">03 / {english ? "Deliverables" : "Что сделано"}</span>
          <h2 id="deliverables-title" aria-label={english ? "Work in detail" : "Система в деталях"}>
            {english ? "Work" : "Система"}
            <br />
            <span>{english ? "in detail" : "в деталях"}</span>
          </h2>
        </div>
        <div className="shell deliverable-list">
          {project.deliverables.map((item) => (
            <article key={item.number}>
              <span>{item.number}</span>
              <h3>{format(item.title)}</h3>
              <p>{format(item.text)}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="case-role shell" aria-labelledby="role-title">
        <span className="section-number">04 / {english ? "My role" : "Моя роль"}</span>
        <h2 id="role-title">
          {english ? <>From idea<br />to final<br />frame</> : <>От&nbsp;идеи<br />до&nbsp;финального<br />кадра</>}
        </h2>
        <ul>
          {project.role.map((item) => (
            <li key={item}>{format(item)}</li>
          ))}
        </ul>
      </section>

      <a className="next-case" href={`${english ? "/en" : ""}/cases/${project.nextSlug}`}>
        <span>{english ? "Next project" : "Следующий кейс"}</span>
        <strong>{project.nextClient}</strong>
      </a>

      <footer className="site-footer shell">
        <span>© 2026 {english ? "Artem Bazhutin" : "Артём Бажутин"}</span>
        <a href="#top">{english ? "Back to top ↑" : "Наверх ↑"}</a>
      </footer>
    </main>
  );
}
