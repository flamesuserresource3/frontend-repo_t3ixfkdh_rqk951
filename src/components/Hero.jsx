import React from 'react';
import Spline from '@splinetool/react-spline';
import { Film, ExternalLink } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-[80vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient for legibility, does not block interaction with scene */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />

      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto max-w-6xl px-6 text-white">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur">
            <Film className="h-4 w-4" />
            <span className="text-xs tracking-wide">Portfolio • Filmmaking & Visuals</span>
          </div>

          <h1 className="mt-6 text-4xl font-semibold leading-tight md:text-6xl">
            Stories in Motion
          </h1>
          <p className="mt-4 max-w-2xl text-sm text-white/80 md:text-base">
            I’m an aspiring filmmaker and hobbyist exploring cinematography, editing, and
            visual storytelling. Here you’ll find short pieces, experiments, and frames I love.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition hover:bg-white/90"
            >
              View Work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2.5 text-sm font-medium text-white ring-1 ring-white/20 transition hover:bg-white/20"
            >
              Let’s Collaborate
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
