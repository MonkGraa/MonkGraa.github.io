"use client";

import { useEffect, useRef, useState } from "react";

const heroClips = [
  {
    name: "OMIndex",
    src: "/work/saas/preview.mp4",
    poster: "/work/saas/omindex-cover.jpg",
    slug: "saas",
    label: { ru: "SaaS-ролик", en: "SaaS product film" },
  },
  {
    name: "Reloc",
    src: "/work/reel/reloc.mp4",
    poster: "/work/vimeo/1219851137.jpg",
    slug: "reloc",
    label: { ru: "Продуктовая инструкция", en: "Product walkthrough" },
  },
  {
    name: "FunPay",
    src: "/work/reel/funpay.mp4",
    poster: "/work/vimeo/1219856666.jpg",
    slug: "funpay",
    label: { ru: "YouTube-графика", en: "YouTube motion" },
  },
  {
    name: "Теремок",
    src: "/work/teremok/preview.mp4",
    poster: "/work/teremok/cover.jpg",
    slug: "teremok",
    label: { ru: "Анимация для соцсетей", en: "Social media animation" },
  },
  {
    name: "Blackbox",
    src: "/work/blackbox/preview.mp4",
    poster: "/work/blackbox/cover.jpg",
    slug: "blackbox",
    label: { ru: "Ролик об эдамаме", en: "Edamame film" },
  },
  {
    name: "Mekong",
    src: "/work/mekong/preview.mp4",
    poster: "/work/mekong/cover.jpg",
    slug: "mekong",
    label: { ru: "Проморолик ресторана", en: "Restaurant promo" },
  },
];

export function MotionPreview({ locale }: { locale: "ru" | "en" }) {
  const [active, setActive] = useState(0);
  const clip = heroClips[active];
  const clientName = (name: string) => locale === "en" && name === "Теремок" ? "Teremok" : name;
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const manuallyPaused = useRef(false);
  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => {
      if (preference.matches || document.hidden || manuallyPaused.current)
        video.pause();
      else if (
        video.getBoundingClientRect().bottom > 0 &&
        video.getBoundingClientRect().top < window.innerHeight
      )
        void video.play().catch(() => {});
    };
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) update();
        else video.pause();
      },
      { threshold: 0.15 },
    );
    observer.observe(video);
    preference.addEventListener("change", update);
    document.addEventListener("visibilitychange", update);
    return () => {
      observer.disconnect();
      preference.removeEventListener("change", update);
      document.removeEventListener("visibilitychange", update);
      video.pause();
    };
  }, [active]);
  return (
    <div
      className="hero-reel"
      role="region"
      aria-roledescription={
        locale === "ru" ? "Видеокарусель" : "Video carousel"
      }
      aria-label={locale === "ru" ? "Избранные видео" : "Selected videos"}
    >
      <div className="motion-preview">
        <video
          key={clip.src}
          ref={ref}
          muted
          playsInline
          preload="none"
          poster={clip.poster}
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          onEnded={() => {
            if (!manuallyPaused.current)
              setActive((index) => (index + 1) % heroClips.length);
          }}
          aria-label={`${clientName(clip.name)} — ${clip.label[locale]}`}
        >
          <source src={clip.src} type="video/mp4" />
        </video>
        <button
          className="playback-toggle"
          type="button"
          onClick={() => {
            const video = ref.current;
            if (!video) return;
            manuallyPaused.current = playing;
            if (playing) video.pause();
            else void video.play().catch(() => {});
          }}
        >
          {playing
            ? locale === "ru"
              ? "Ⅱ Пауза"
              : "Ⅱ Pause"
            : locale === "ru"
              ? "▶ Превью"
              : "▶ Preview"}
        </button>
      </div>
      <div className="pf-feature-caption">
        <span>
          {clientName(clip.name)} / {clip.label[locale]}
        </span>
        <a href={`${locale === "en" ? "/en" : ""}/cases/${clip.slug}/`}>
          {locale === "ru" ? "Смотреть кейс" : "View project"} ↗
        </a>
      </div>
      <div
        className="hero-reel-selector"
        aria-label={locale === "ru" ? "Выбрать видео" : "Choose video"}
      >
        {heroClips.map((item, index) => (
          <button
            key={item.name}
            type="button"
            aria-pressed={active === index}
            onClick={() => setActive(index)}
          >
            <span className="hero-reel-marker" aria-hidden="true" />
            <span>{clientName(item.name)}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export function VimeoPlayer({
  id,
  title,
  locale,
}: {
  id: string;
  title: string;
  locale: "ru" | "en";
}) {
  const [active, setActive] = useState(false);
  return active ? (
    <iframe
      src={`https://player.vimeo.com/video/${id}?autoplay=1&playsinline=1`}
      title={title}
      allow="autoplay; fullscreen; picture-in-picture"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    />
  ) : (
    <button
      type="button"
      className="vimeo-launch"
      onClick={() => setActive(true)}
      aria-label={`${locale === "ru" ? "Смотреть" : "Play"} ${title}`}
    >
      <img src={`/work/vimeo/${id}.jpg`} alt="" loading="lazy" />
      <span aria-hidden="true">▶</span>
      <strong>{title}</strong>
      <small>{locale === "ru" ? "Смотреть видео" : "Play video"}</small>
    </button>
  );
}
