import { LanguageSwitcher } from "./language-switcher";
import { bindShortRussianWords } from "./typography";

type Locale = "ru" | "en";

const format = (text: string, locale: Locale) =>
  locale === "ru" ? bindShortRussianWords(text) : text;

const russianServices = [
  "айдентика",
  "motion",
  "3D",
  "соцсети",
  "реклама",
  "видео",
  "печатная продукция",
];

const russianProjects = [
  {
    number: "01",
    href: "/cases/reloc",
    client: "Reloc",
    title: "Работа для Reloc",
    description:
      "Для Reloc я делал инструкционные и рекламные ролики для Telegram-приложения, включая сценарии, анимацию и 3D-графику.",
    tags: ["Motion", "3D", "Instructional video", "Telegram ads"],
    className: "project-reloc",
    visual: (
      <img
        className="project-cover-image"
        src="/cases/reloc-cover.png"
        alt="Обложка кейса Reloc"
        width="1900"
        height="1100"
      />
    ),
  },
  {
    number: "02",
    href: "/cases/funpay",
    client: "FunPay",
    title: "Работа для FunPay",
    description:
      "Для FunPay я делал оформление YouTube-контента: титры, заставки, финалы видео и перебивки для рубрик.",
    tags: ["YouTube", "Titles", "Motion system"],
    className: "project-funpay",
    visual: (
      <img
        className="project-cover-image"
        src="/cases/funpay-cover.png"
        alt="Обложка кейса FunPay"
        width="1900"
        height="1100"
      />
    ),
  },
];

const russianCapabilities = [
  {
    number: "01",
    title: "Айдентика",
    text: "Визуальные системы, key visual, носители и аккуратная работа по существующим брендбукам.",
  },
  {
    number: "02",
    title: "Motion & 3D",
    text: "Рекламные ролики, объясняющая анимация, титры, заставки и трёхмерные сцены.",
  },
  {
    number: "03",
    title: "Соцсети и реклама",
    text: "Креативы, баннеры и оформление контента для социальных сетей и рекламных кампаний.",
  },
  {
    number: "04",
    title: "Видео",
    text: "Монтаж, UGC, оформление YouTube-каналов и понятные продуктовые инструкции.",
  },
  {
    number: "05",
    title: "Печатная продукция",
    text: "Макеты для печати, упаковка, полиграфия и другие рекламные материалы.",
  },
];

const englishServices = [
  "visual identity",
  "motion",
  "3D",
  "social media",
  "advertising",
  "video",
  "print design",
];

const englishProjects = [
  {
    ...russianProjects[0],
    href: "/en/cases/reloc",
    title: "Work for Reloc",
    description:
      "For Reloc, I made instructional and advertising videos for a Telegram app, including animation and 3D graphics.",
    visual: (
      <img
        className="project-cover-image"
        src="/cases/reloc-cover.png"
        alt="Reloc case study cover"
        width="1900"
        height="1100"
      />
    ),
  },
  {
    ...russianProjects[1],
    href: "/en/cases/funpay",
    title: "Work for FunPay",
    description:
      "For FunPay, I created YouTube graphics: titles, intros, outros and transitions for different series.",
    visual: (
      <img
        className="project-cover-image"
        src="/cases/funpay-cover.png"
        alt="FunPay case study cover"
        width="1900"
        height="1100"
      />
    ),
  },
];

const englishCapabilities = [
  {
    number: "01",
    title: "Visual identity",
    text: "Visual systems, key visuals, applications and work within existing brand guidelines.",
  },
  {
    number: "02",
    title: "Motion & 3D",
    text: "Advertising videos, explainer animation, titles, intros and 3D scenes.",
  },
  {
    number: "03",
    title: "Social media & ads",
    text: "Creative assets, banners and content design for social media and advertising campaigns.",
  },
  {
    number: "04",
    title: "Video",
    text: "Editing, UGC, YouTube channel graphics and clear product instructions.",
  },
  {
    number: "05",
    title: "Print design",
    text: "Print-ready layouts, packaging, printed materials and other advertising assets.",
  },
];

export function HomePage({ locale }: { locale: Locale }) {
  const english = locale === "en";
  const services = english ? englishServices : russianServices;
  const projects = english ? englishProjects : russianProjects;
  const capabilities = english ? englishCapabilities : russianCapabilities;

  return (
    <main id="top" lang={locale}>
      {english && (
        <script dangerouslySetInnerHTML={{ __html: 'document.documentElement.lang="en"' }} />
      )}
      <header className="site-header shell">
        <a
          className="brand"
          href="#top"
          aria-label={english ? "Artem Bazhutin — back to top" : "Артём Бажутин — на главную"}
        >
          <span className="brand-mark">{english ? "AB" : "АБ"}</span>
          <span className="brand-name">{english ? "Artem Bazhutin" : "Артём Бажутин"}</span>
        </a>

        <nav className="site-nav" aria-label={english ? "Main navigation" : "Основная навигация"}>
          <a href="#about">{english ? "About" : "Обо мне"}</a>
          <a href="#work">{english ? "Projects" : "Проекты"}</a>
          <a href="#services">{english ? "Services" : "Направления"}</a>
          <a href="#contact">{english ? "Contact" : "Контакты"}</a>
        </nav>

        <LanguageSwitcher locale={locale} russianHref="/" englishHref="/en/" />
      </header>

      <section className="hero shell" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">{english ? "Portfolio / 2026" : "Портфолио / 2026"}</p>
          <h1 id="hero-title">
            {english ? (
              <>Graphic &amp;<br />motion <em>designer</em></>
            ) : (
              <>Графический<br />и моушен-<em>дизайнер</em></>
            )}
          </h1>
          <p className="hero-intro">
            {format(
              english
                ? "I work with visual identity, graphics, motion, 3D and video. I help organise visual materials into clear, consistent systems."
                : "Занимаюсь айдентикой, графикой, motion, 3D и видео. Помогаю структурировать визуальные материалы и собирать их в понятную систему.",
              locale,
            )}
          </p>
        </div>

        <div className="hero-poster hero-portrait">
          <img
            className="hero-portrait-image"
            src="/artem-bazhutin-portrait-ava2.jpg"
            alt={english ? "Portrait of Artem Bazhutin" : "Портрет Артёма Бажутина"}
            width="1484"
            height="2270"
          />
        </div>

        <div className="hero-meta">
          <div>
            <strong>8+</strong>
            <span>{english ? "years in design" : "лет в дизайне"}</span>
          </div>
          <div>
            <strong>2D / 3D</strong>
            <span>{english ? "graphics and animation" : "графика и анимация"}</span>
          </div>
          <div className="service-list" aria-label={english ? "Specialties" : "Специализация"}>
            {services.map((service) => (
              <span key={service}>{service}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="about-section" id="about" aria-labelledby="about-title">
        <div className="shell section-heading">
          <h2 id="about-title">
            {english ? <>Work<br /><em>experience</em></> : <>Опыт<br /><em>работы</em></>}
          </h2>
        </div>

        <div className="shell about-grid">
          <div className="about-lead">
            <p>
              {format(
                english
                  ? "I spent five years at a creative agency, working on a wide range of projects."
                  : "Пять лет работал в креативном агентстве и участвовал в большом количестве проектов.",
                locale,
              )}
              <br />
              {format(english ? "I now work independently." : "Сейчас работаю как фрилансер.", locale)}
            </p>
          </div>

          <div className="career-list">
            <article>
              <span>2019—2024</span>
              <h3>V-agency</h3>
              <p>
                {format(
                  english
                    ? "I worked on projects for Alpha Hookah, MISHA, KORESS and Teremok: social media, advertising, UGC content, editing, banners, animation and visual identity."
                    : "Работал над проектами Alpha Hookah, MISHA, KORESS и «Теремок»: соцсети, реклама, UGC-контент, монтаж, баннеры, анимация и айдентика.",
                  locale,
                )}
              </p>
            </article>
            <article>
              <span>{english ? "2024—present" : "2024—сейчас"}</span>
              <h3>{english ? "Freelance" : "Фриланс"}</h3>
              <p>
                {format(
                  english
                    ? "I work on projects for Reloc and FunPay: advertising and instructional videos, YouTube graphics, titles, intros and animation."
                    : "Работаю над проектами Reloc и FunPay: рекламные и инструкционные видео, YouTube-графика, титры, заставки и анимация.",
                  locale,
                )}
              </p>
            </article>
          </div>
        </div>

      </section>

      <section className="work-section shell" id="work" aria-labelledby="work-title">
        <div className="section-heading work-heading">
          <h2 id="work-title">{english ? "Projects" : "Проекты"}</h2>
        </div>

        <div className="project-list">
          {projects.map((project) => (
            <article className="project-card" key={project.client}>
              <a
                className={`project-visual project-cover-visual ${project.className}`}
                href={project.href}
                aria-label={`${english ? "Open case study" : "Открыть кейс"} ${project.client}`}
              >
                {project.visual}
              </a>
              <div className="project-info">
                <div>
                  <h3 aria-label={project.title}>
                    {english ? "Work" : "Работа"}
                    <br />
                    {english ? "for" : "для"}&nbsp;{project.client}
                  </h3>
                </div>
                <p>{format(project.description, locale)}</p>
                <div className="project-info-bottom">
                  <ul aria-label={english ? "Project disciplines" : "Направления проекта"}>
                    {project.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                  <a className="project-link" href={project.href}>
                    {english ? "View project" : "Открыть кейс"}
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="services-section" id="services" aria-labelledby="services-title">
        <div className="shell section-heading services-heading">
          <h2 id="services-title">
            {english ? <>What<br /><em>I do</em></> : <>Направления<br /><em>работы</em></>}
          </h2>
        </div>

        <div className="shell capability-list">
          {capabilities.map((item) => (
            <article key={item.number}>
              <span>{item.number}</span>
              <h3>{item.title}</h3>
              <p>{format(item.text, locale)}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact" aria-labelledby="contact-title">
        <div className="shell">
          <h2 id="contact-title">{english ? "Contact" : "Контакты"}</h2>
          <div className="contact-bottom">
            <p>{format(english ? "Write to me if you'd like to discuss a project." : "Напишите мне, если хотите обсудить проект.", locale)}</p>
            <div className="contact-links" aria-label={english ? "Contact Artem Bazhutin" : "Контакты Артёма Бажутина"}>
              <a
                className="contact-link contact-link-telegram"
                href="https://t.me/artsup"
                target="_blank"
                rel="noreferrer"
                aria-label={english ? "Message Artem on Telegram" : "Написать Артёму в Telegram"}
              >
                <img
                  src="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/icons/telegram.svg"
                  alt=""
                  width="24"
                  height="24"
                  aria-hidden="true"
                />
              </a>
              <a
                className="contact-link contact-link-gmail"
                href="mailto:Artyom.bajutin@gmail.com"
                aria-label={english ? "Email Artem" : "Написать Артёму на Gmail"}
                title="Artyom.bajutin@gmail.com"
              >
                <img
                  src="https://cdn.simpleicons.org/gmail/FFFFFF"
                  alt=""
                  width="24"
                  height="24"
                  aria-hidden="true"
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="site-footer shell">
        <span>© 2026 {english ? "Artem Bazhutin" : "Артём Бажутин"}</span>
        <a href="#top">{english ? "Back to top ↑" : "Наверх ↑"}</a>
      </footer>
    </main>
  );
}
