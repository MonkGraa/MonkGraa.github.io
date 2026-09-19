import type { PortfolioCase } from "./case-data";
import { bindShortRussianWords } from "../typography";
import { VimeoPlayer } from "../motion-media";
import { CaseShell } from "./case-shell";

export function CasePage({
  project,
  locale = "ru",
}: {
  project: PortfolioCase;
  locale?: "ru" | "en";
}) {
  const en = locale === "en";
  const format = (text: string) => (en ? text : bindShortRussianWords(text));
  return (
    <CaseShell
      locale={locale}
      slug={project.slug}
      nextHref={`${en ? "/en" : ""}/cases/${project.slug === "funpay" ? "teremok" : "funpay"}/`}
      nextName={project.slug === "funpay" ? (en ? "Teremok" : "Теремок") : "FunPay"}
    >
      <section className="pf-case-intro pf-shell">
        <p className="pf-kicker">{project.eyebrow}</p>
        <h1>
          {project.client}
          <br />
          {project.slug === "reloc"
            ? en
              ? "Guides & 3D ads."
              : "Инструкции и 3D-реклама."
            : en
              ? "YouTube in motion."
              : "YouTube в движении."}
        </h1>
        <p className="pf-case-summary">{format(project.summary)}</p>
      </section>
      <section
        className="pf-shell video-groups"
        id="videos"
        aria-label={en ? "Selected videos" : "Подборка видео"}
      >
        {project.videoGroups.map((group) => (
          <section
            className="video-group"
            key={group.number}
            aria-labelledby={`group-${group.number}`}
          >
            <header className="video-group-heading">
              <span>{group.number}</span>
              <h2 id={`group-${group.number}`}>{format(group.title)}</h2>
              <p>{format(group.description)}</p>
            </header>
            <div
              className={`video-grid video-grid-${group.videos.length}${group.layout ? ` video-grid-${group.layout}` : ""}`}
            >
              {group.videos.map((video) => (
                <article
                  className={`video-card video-${video.ratio}`}
                  key={video.id}
                >
                  <div className="video-player">
                    {video.src ? (
                      <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        poster={video.poster}
                        aria-label={`${video.title} — ${project.client}`}
                      >
                        <source src={video.src} type="video/mp4" />
                      </video>
                    ) : (
                      <VimeoPlayer
                        id={video.id}
                        title={`${video.title} — ${project.client}`}
                        locale={locale}
                      />
                    )}
                  </div>
                  <div className="video-caption">
                    <span>{video.title}</span>
                    <p>{format(video.caption)}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}
      </section>
      <section className="pf-case-context pf-shell">
        <div>
          <h2>{en ? "My contribution" : "Моя роль"}</h2>
          <ul>
            {project.role.map((role) => (
              <li key={role}>{format(role)}</li>
            ))}
          </ul>
        </div>
        <div>
          <p className="pf-kicker">
            {en ? "Brief & approach" : "Задача и подход"}
          </p>
          <p>{format(project.challenge)}</p>
          <p>{format(project.solution)}</p>
        </div>
      </section>
      <section className="pf-case-context pf-shell">
        <h2>{en ? "What was delivered" : "Что сделано"}</h2>
        <div>
          {project.deliverables.map((item) => (
            <div key={item.number}>
              <h3>{item.title}</h3>
              <p>{format(item.text)}</p>
            </div>
          ))}
        </div>
      </section>
    </CaseShell>
  );
}
