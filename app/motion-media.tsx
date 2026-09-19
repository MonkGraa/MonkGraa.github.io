"use client";

import { useEffect, useRef, useState } from "react";

const heroClips = [
  {
    name: "OMIndex",
    src: "/work/saas/preview.mp4",
    poster: "/work/saas/omindex-cover.jpg",
    slug: "saas",
    startAt: 0,
    label: { ru: "SaaS-ролик", en: "SaaS product film" },
  },
  {
    name: "Reloc",
    src: "/work/reel/reloc.mp4",
    poster: "/work/vimeo/1219851137.jpg",
    slug: "reloc",
    startAt: 4,
    label: { ru: "Продуктовая инструкция", en: "Product walkthrough" },
  },
  {
    name: "FunPay",
    src: "/work/reel/funpay.mp4",
    poster: "/work/vimeo/1219856666.jpg",
    slug: "funpay",
    startAt: 0,
    label: { ru: "YouTube-графика", en: "YouTube motion" },
  },
];

export function MotionPreview({ locale }: { locale: "ru" | "en" }) {
  const [active, setActive] = useState(0);
  const clip = heroClips[active];
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
          onLoadedMetadata={(event) => {
            if (clip.startAt > 0 && event.currentTarget.duration > clip.startAt)
              event.currentTarget.currentTime = clip.startAt;
          }}
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          onEnded={() => {
            if (!manuallyPaused.current)
              setActive((index) => (index + 1) % heroClips.length);
          }}
          aria-label={`${clip.name} — ${clip.label[locale]}`}
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
          {clip.name} / {clip.label[locale]}
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
            <span>{item.name}</span>
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
