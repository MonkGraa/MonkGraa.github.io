const services = ["айдентика", "motion", "3D", "соцсети"];

const projects = [
  {
    number: "01",
    href: "/cases/reloc",
    client: "Reloc",
    title: "Покупка игр — без лишних вопросов.",
    description:
      "Инструкционные и рекламные ролики для Telegram-приложения: от понятных сценариев до динамичных 3D-креативов для размещения в каналах.",
    tags: ["Motion", "3D", "Instructional video", "Telegram ads"],
    className: "project-reloc",
    visual: (
      <>
        <div className="reloc-orbit reloc-orbit-a" />
        <div className="reloc-orbit reloc-orbit-b" />
        <span className="reloc-currency reloc-currency-a">₽</span>
        <span className="reloc-currency reloc-currency-b">PS</span>
        <div className="reloc-phone">
          <span>RELOC</span>
          <strong>PLAY<br />WITHOUT<br />BORDERS</strong>
          <i>01 / 03</i>
        </div>
      </>
    ),
  },
  {
    number: "02",
    href: "/cases/funpay",
    client: "FunPay",
    title: "Один канал. Узнаваемая система движения.",
    description:
      "3D-ролики и оформление YouTube-контента: титры, заставки, финалы видео и перебивки, объединяющие разные рубрики в цельный визуальный язык.",
    tags: ["YouTube", "3D", "Titles", "Motion system"],
    className: "project-funpay",
    visual: (
      <>
        <div className="funpay-stage">
          <span className="funpay-label">NEW EPISODE</span>
          <div className="funpay-cube cube-back">FP</div>
          <div className="funpay-cube cube-front">PLAY</div>
          <p>INTRO / OUTRO / RUBRICS</p>
        </div>
      </>
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
    text: "Креативы, баннеры и контент-системы, которые выдерживают темп регулярных коммуникаций.",
  },
  {
    number: "04",
    title: "Видео",
    text: "Монтаж, UGC, оформление YouTube-каналов и понятные продуктовые инструкции.",
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
          <a href="#services">Услуги</a>
          <a href="#contact">Контакты</a>
        </nav>

        <span className="availability">Открыт к проектам</span>
      </header>

      <section className="hero shell" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">Екатеринбург → работа по всему миру</p>
          <h1 id="hero-title">
            Дизайн,
            <br />
            который <em>движется.</em>
          </h1>
          <p className="hero-intro">
            Я Артём — графический и моушен-дизайнер. Создаю айдентику,
            рекламу, 3D и видео, которые помогают брендам говорить яснее.
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
            <strong>5+</strong>
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
          <span className="section-number">01 / Обо мне</span>
          <h2 id="about-title">
            От агентства —<br />
            <em>к самостоятельной практике.</em>
          </h2>
        </div>

        <div className="shell about-grid">
          <div className="about-lead">
            <p>
              Я начал заниматься дизайном в Екатеринбурге, а затем пять лет
              работал в петербургском креативном агентстве. Там научился видеть
              не отдельный макет, а всю коммуникацию бренда — от ежедневного
              контента до айдентики.
            </p>
          </div>

          <div className="career-list">
            <article>
              <span>2019—2024</span>
              <h3>V-agency / Санкт-Петербург</h3>
              <p>
                Соцсети, реклама, UGC-контент, монтаж, баннеры, анимация и
                айдентика. Проекты для Alpha Hookah, MISHA, KORESS и «Теремка»;
                точная работа по брендбукам компаний.
              </p>
            </article>
            <article>
              <span>2024—сейчас</span>
              <h3>Фриланс</h3>
              <p>
                Motion и 3D для Reloc и FunPay: рекламные и инструкционные
                видео, YouTube-графика, титры, заставки и рубрикаторы.
              </p>
            </article>
          </div>
        </div>

      </section>

      <section className="work-section shell" id="work" aria-labelledby="work-title">
        <div className="section-heading work-heading">
          <span className="section-number">02 / Избранное</span>
          <h2 id="work-title">Два проекта. Два кейса.</h2>
          <p>
            Reloc и FunPay теперь открываются как отдельные истории: с задачей,
            решением, моей ролью и подборкой роликов на Vimeo.
          </p>
        </div>

        <div className="project-list">
          {projects.map((project) => (
            <article className="project-card" key={project.client}>
              <a
                className={`project-visual ${project.className}`}
                href={project.href}
                aria-label={`Открыть кейс ${project.client}`}
              >
                <span className="project-number">{project.number}</span>
                {project.visual}
              </a>
              <div className="project-info">
                <div>
                  <span className="project-client">{project.client}</span>
                  <h3>{project.title}</h3>
                </div>
                <p>{project.description}</p>
                <div className="project-info-bottom">
                  <ul aria-label="Направления проекта">
                    {project.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                  <a className="project-link" href={project.href}>
                    Открыть кейс ↗
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="services-section" id="services" aria-labelledby="services-title">
        <div className="shell section-heading services-heading">
          <span className="section-number">03 / Что я делаю</span>
          <h2 id="services-title">
            От первого кадра<br />
            <em>до системы.</em>
          </h2>
        </div>

        <div className="shell capability-list">
          {capabilities.map((item) => (
            <article key={item.number}>
              <span>{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <i aria-hidden="true">↗</i>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact" aria-labelledby="contact-title">
        <div className="shell">
          <span className="section-number">04 / Контакты</span>
          <h2 id="contact-title">
            Давайте сделаем<br />
            <em>что-то заметное.</em>
          </h2>
          <div className="contact-bottom">
            <p>
              Сейчас открыт к фриланс-проектам и долгосрочному сотрудничеству.
              Работаю удалённо из Екатеринбурга.
            </p>
            <span className="contact-placeholder">
              Telegram и email добавим на следующем этапе
            </span>
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
