import { bindShortRussianWords } from "./typography";

const services = [
  "айдентика",
  "motion",
  "3D",
  "соцсети",
  "реклама",
  "видео",
  "печатная продукция",
];

const projects = [
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

const capabilities = [
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

export default function Home() {
  return (
    <main id="top">
      <header className="site-header shell">
        <a className="brand" href="#top" aria-label="Артём Бажутин — на главную">
          <span className="brand-mark">АБ</span>
          <span className="brand-name">Артём Бажутин</span>
        </a>

        <nav className="site-nav" aria-label="Основная навигация">
          <a href="#about">Обо мне</a>
          <a href="#work">Проекты</a>
          <a href="#services">Направления</a>
          <a href="#contact">Контакты</a>
        </nav>

        <span className="availability">Фриланс</span>
      </header>

      <section className="hero shell" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">Портфолио / 2026</p>
          <h1 id="hero-title">
            Графический
            <br />
            и моушен-<em>дизайнер</em>
          </h1>
          <p className="hero-intro">
            {bindShortRussianWords(
              "Занимаюсь айдентикой, графикой, motion, 3D и видео. Помогаю структурировать визуальные материалы и собирать их в понятную систему.",
            )}
          </p>
        </div>

        <div className="hero-poster hero-portrait">
          <img
            className="hero-portrait-image"
            src="/artem-bazhutin-portrait-ava2.jpg"
            alt="Портрет Артёма Бажутина"
            width="1484"
            height="2270"
          />
        </div>

        <div className="hero-meta">
          <div>
            <strong>8+</strong>
            <span>лет в дизайне</span>
          </div>
          <div>
            <strong>2D / 3D</strong>
            <span>графика и анимация</span>
          </div>
          <div className="service-list" aria-label="Специализация">
            {services.map((service) => (
              <span key={service}>{service}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="about-section" id="about" aria-labelledby="about-title">
        <div className="shell section-heading">
          <h2 id="about-title">
            Опыт<br />
            <em>работы</em>
          </h2>
        </div>

        <div className="shell about-grid">
          <div className="about-lead">
            <p>
              {bindShortRussianWords(
                "Пять лет работал в креативном агентстве и участвовал в большом количестве проектов.",
              )}
              <br />
              {bindShortRussianWords("Сейчас работаю как фрилансер.")}
            </p>
          </div>

          <div className="career-list">
            <article>
              <span>2019—2024</span>
              <h3>V-agency</h3>
              <p>
                {bindShortRussianWords(
                  "Работал над проектами для Alpha Hookah, MISHA, KORESS и «Теремка»: соцсети, реклама, UGC-контент, монтаж, баннеры, анимация и айдентика.",
                )}
              </p>
            </article>
            <article>
              <span>2024—сейчас</span>
              <h3>Фриланс</h3>
              <p>
                {bindShortRussianWords(
                  "Работаю над проектами Reloc и FunPay: рекламные и инструкционные видео, YouTube-графика, титры, заставки и анимация.",
                )}
              </p>
            </article>
          </div>
        </div>

      </section>

      <section className="work-section shell" id="work" aria-labelledby="work-title">
        <div className="section-heading work-heading">
          <h2 id="work-title">Проекты</h2>
        </div>

        <div className="project-list">
          {projects.map((project) => (
            <article className="project-card" key={project.client}>
              <a
                className={`project-visual project-cover-visual ${project.className}`}
                href={project.href}
                aria-label={`Открыть кейс ${project.client}`}
              >
                {project.visual}
              </a>
              <div className="project-info">
                <div>
                  <h3 aria-label={project.title}>
                    Работа
                    <br />
                    для&nbsp;{project.client}
                  </h3>
                </div>
                <p>{bindShortRussianWords(project.description)}</p>
                <div className="project-info-bottom">
                  <ul aria-label="Направления проекта">
                    {project.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                  <a className="project-link" href={project.href}>
                    Открыть кейс
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
            Направления<br />
            <em>работы</em>
          </h2>
        </div>

        <div className="shell capability-list">
          {capabilities.map((item) => (
            <article key={item.number}>
              <span>{item.number}</span>
              <h3>{item.title}</h3>
              <p>{bindShortRussianWords(item.text)}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact" aria-labelledby="contact-title">
        <div className="shell">
          <h2 id="contact-title">Контакты</h2>
          <div className="contact-bottom">
            <p>{bindShortRussianWords("Напишите мне, если хотите обсудить проект.")}</p>
            <div className="contact-links" aria-label="Контакты Артёма Бажутина">
              <a
                className="contact-link contact-link-telegram"
                href="https://t.me/artsup"
                target="_blank"
                rel="noreferrer"
                aria-label="Написать Артёму в Telegram"
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
                aria-label="Написать Артёму на Gmail"
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
        <span>© 2026 Артём Бажутин</span>
        <a href="#top">Наверх ↑</a>
      </footer>
    </main>
  );
}
