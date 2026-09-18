type LanguageSwitcherProps = {
  locale: "ru" | "en";
  russianHref: string;
  englishHref: string;
};

export function LanguageSwitcher({ locale, russianHref, englishHref }: LanguageSwitcherProps) {
  return (
    <nav className="language-switcher" aria-label={locale === "ru" ? "Выбор языка" : "Choose language"}>
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c2.6 2.5 4 5.5 4 9s-1.4 6.5-4 9c-2.6-2.5-4-5.5-4-9s1.4-6.5 4-9Z" />
      </svg>
      <a href={russianHref} hrefLang="ru" lang="ru" aria-current={locale === "ru" ? "page" : undefined} aria-label="Русский">RU</a>
      <span aria-hidden="true">/</span>
      <a href={englishHref} hrefLang="en" lang="en" aria-current={locale === "en" ? "page" : undefined} aria-label="English">EN</a>
    </nav>
  );
}
