import React from 'react';
import { Play, ExternalLink } from 'lucide-react';

const sampleProjects = [
  {
    title: 'City Lights – Micro Short',
    thumb:
      'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1600&auto=format&fit=crop',
    description:
      'A late-night walk exploring neon reflections and isolation in the city.',
    role: 'Director • Editor • Color',
    link: '#',
  },
  {
    title: 'Home Video Study',
    thumb:
      'https://images.unsplash.com/photo-1517816743773-6e0fd518b4a6?q=80&w=1600&auto=format&fit=crop',
    description:
      'Handheld textures and intimate framing inspired by 90s camcorders.',
    role: 'DP • Grade',
    link: '#',
  },
  {
    title: 'Weekend Frames',
    thumb:
      'https://images.unsplash.com/photo-1520697222868-83eeed9dc7f1?q=80&w=1600&auto=format&fit=crop',
    description:
      'A sequence of small moments stitched into a visual diary.',
    role: 'Director • Editor',
    link: '#',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative mx-auto max-w-6xl px-6 py-16 md:py-24">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <h2 className="text-2xl font-semibold md:text-3xl">Selected Work</h2>
          <p className="mt-2 text-sm text-neutral-500">
            Short films, camera tests, and visual experiments.
          </p>
        </div>
        <a
          href="#"
          className="hidden rounded-full bg-black px-4 py-2 text-sm font-medium text-white transition hover:bg-black/90 md:inline"
        >
          Full Archive
        </a>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {sampleProjects.map((p) => (
          <article
            key={p.title}
            className="group overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm transition hover:shadow-md"
          >
            <div className="relative aspect-video overflow-hidden">
              <img
                src={p.thumb}
                alt={p.title}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 via-black/0 to-transparent p-3">
                <button
                  className="inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 text-xs font-medium text-black backdrop-blur transition hover:bg-white"
                  aria-label={`Play ${p.title}`}
                >
                  <Play className="h-4 w-4" />
                  Watch
                </button>
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-base font-semibold">{p.title}</h3>
              <p className="mt-1 line-clamp-2 text-sm text-neutral-600">{p.description}</p>
              <div className="mt-3 flex items-center justify-between text-xs text-neutral-500">
                <span>{p.role}</span>
                <a
                  href={p.link}
                  className="inline-flex items-center gap-1 text-neutral-800 hover:underline"
                >
                  View <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-8 md:hidden">
        <a
          href="#"
          className="block w-full rounded-full bg-black px-4 py-2 text-center text-sm font-medium text-white transition hover:bg-black/90"
        >
          Full Archive
        </a>
      </div>
    </section>
  );
};

export default Projects;
