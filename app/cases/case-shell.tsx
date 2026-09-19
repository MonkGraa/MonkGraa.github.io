import type { ReactNode } from "react";
import { LanguageSwitcher } from "../language-switcher";

export function CaseShell({
  locale,
  slug,
  children,
  nextHref,
  nextName,
}: {
  locale: "ru" | "en";
  slug: string;
  children: ReactNode;
  nextHref: string;
  nextName: string;
}) {
  const en = locale === "en";
  const home = en ? "/en/" : "/";
  return (
    <main className="portfolio pf-case" lang={locale} id="top">
      {en && (
        <script
          dangerouslySetInnerHTML={{
            __html: 'document.documentElement.lang="en"',
          }}
        />
      )}
      <header className="pf-header">
        <a className="pf-brand" href={home}>
          {en ? "Artem Bazhutin" : "Артём Бажутин"}
          <span>
            {en ? "Graphic / motion designer" : "Графический / моушен-дизайнер"}
          </span>
        </a>
        <nav className="pf-main-nav" aria-label={en ? "Case navigation" : "Навигация по кейсу"}>
          <a href={`${home}#work`}>{en ? "← All work" : "← Все работы"}</a>
          <a className="pf-nav-contact" href="#case-contact">{en ? "Contact" : "Контакты"}</a>
        </nav>
        <LanguageSwitcher
          locale={locale}
          russianHref={`/cases/${slug}/`}
          englishHref={`/en/cases/${slug}/`}
        />
      </header>
      {children}
      <section className="pf-case-contact pf-shell" id="case-contact">
        <div>
          <p className="pf-kicker">
            {en
              ? "Projects & team opportunities"
              : "Проекты и предложения в команду"}
          </p>
          <h2>{en ? "Have a similar brief?" : "Есть похожая задача?"}</h2>
        </div>
        <div>
          <a
            className="pf-button"
            href="https://t.me/artsup"
            target="_blank"
            rel="noreferrer"
          >
            {en ? "Let's talk" : "Обсудить задачу"} ↗
          </a>
          <a className="pf-email" href="mailto:Artyom.bajutin@gmail.com">
            Artyom.bajutin@gmail.com
          </a>
        </div>
      </section>
      <a className="pf-next pf-shell" href={nextHref}>
        <span>{en ? "Next project" : "Следующая работа"}</span>
        <strong>{nextName} ↗</strong>
      </a>
      <footer className="pf-footer pf-shell">
        <span>© 2026 {en ? "Artem Bazhutin" : "Артём Бажутин"}</span>
        <a href={`${home}#work`}>{en ? "All work" : "Все работы"}</a>
      </footer>
    </main>
  );
}
