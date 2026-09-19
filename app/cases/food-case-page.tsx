import type { Metadata } from "next";
import { CaseShell } from "./case-shell";
import { foodCases, type FoodCaseSlug } from "./food-cases";

export function foodCaseMetadata(slug: FoodCaseSlug, locale: "ru" | "en"): Metadata {
  const i = locale === "en" ? 1 : 0;
  const data = foodCases[slug];
  const title = `${data.name[i]} — ${i ? "Artem Bazhutin" : "Артём Бажутин"}`;
  const description = data.summary[i];
  const image = { url: `/work/${slug}/cover.jpg`, width: 720, height: slug === "mekong" ? 900 : 1280, alt: data.title[i] };
  return {
    title, description,
    alternates: { canonical: `${i ? "/en" : ""}/cases/${slug}/`, languages: { "ru-RU": `/cases/${slug}/`, "en-US": `/en/cases/${slug}/` } },
    openGraph: { title, description, type: "website", locale: i ? "en_US" : "ru_RU", images: [image] },
    twitter: { card: "summary_large_image", title, description, images: [image.url] },
  };
}

export function FoodCasePage({ slug, locale }: { slug: FoodCaseSlug; locale: "ru" | "en" }) {
  const i = locale === "en" ? 1 : 0;
  const data = foodCases[slug];
  const nextName = data.next === "alanbase" ? "Alanbase" : foodCases[data.next].name[i];
  return (
    <CaseShell locale={locale} slug={slug} nextHref={`${i ? "/en" : ""}/cases/${data.next}/`} nextName={nextName}>
      <section className="pf-case-intro pf-shell">
        <p className="pf-kicker">{data.name[i]} / {data.tags}</p>
        <h1>{data.title[i]}</h1>
        <p className="pf-case-summary">{data.summary[i]}</p>
        <p className="pf-agency-credit">
          {i
            ? "Created at V Agency, a marketing agency."
            : "Проект выполнен в маркетинговом агентстве V Agency."}
        </p>
      </section>
      <div className="pf-shell pf-food-film">
        <video autoPlay controls muted loop playsInline preload="metadata" poster={`/work/${slug}/cover.jpg`} width={data.width} height={data.height} aria-label={data.title[i]}>
          <source src={`/work/${slug}/film.mp4`} type="video/mp4" />
          <a href={`/work/${slug}/film.mp4`}>{i ? "Download video" : "Скачать видео"}</a>
        </video>
      </div>
      <section className="pf-case-context pf-shell">
        <h2>{i ? "About the film" : "О ролике"}</h2>
        <p>{data.detail[i]}</p>
      </section>
    </CaseShell>
  );
}
