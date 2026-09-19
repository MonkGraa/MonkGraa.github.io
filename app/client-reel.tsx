/* eslint-disable jsx-a11y/no-noninteractive-tabindex -- The reduced-motion reel is a horizontally scrollable region and must support keyboard scrolling. */

const clients = [
  { name: "OMIndex", image: "omindex.svg" },
  { name: "Alanbase", image: "alanbase.svg" },
  { name: "Reloc", image: "reloc.svg" },
  { name: "FunPay", image: "funpay.svg" },
  { name: "Alpha Hookah", image: "alpha.png" },
  { name: "MISHA", image: "misha.png" },
  { name: "KORESS", image: "koress.png" },
  { name: "Теремок", image: "teremok.svg" },
  { name: "V Agency", image: "v-agency.svg" },
];

export function ClientReel({
  locale,
  placement = "about",
}: {
  locale: "ru" | "en";
  placement?: "hero" | "about";
}) {
  const en = locale === "en";
  return (
    <section
      className={`pf-clients pf-shell pf-clients-${placement}`}
      aria-labelledby={`clients-title-${placement}`}
    >
      <div className="pf-reel-heading">
        <h2 id={`clients-title-${placement}`}>
          {en ? "I’ve worked on projects for" : "Работал над проектами"}
        </h2>
      </div>
      <div
        className="pf-reel"
        tabIndex={0}
        role="region"
        aria-label={en ? "Client logos" : "Логотипы клиентов"}
      >
        <div className="pf-reel-track">
          {[0, 1].map((copy) => (
            <div
              className="pf-reel-group"
              key={copy}
              aria-hidden={copy === 1 ? true : undefined}
            >
              {clients.map((client) => (
                <div className="pf-reel-logo" key={client.name}>
                  {client.image ? (
                    <img
                      src={`/logos/${client.image}`}
                      alt={client.name}
                      width="160"
                      height="56"
                      loading="lazy"
                    />
                  ) : (
                    <span className="pf-misha-wordmark">{client.name}</span>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
