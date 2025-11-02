import React from 'react';
import { User } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="mx-auto max-w-4xl px-6 py-16 md:py-24">
      <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-neutral-100 px-4 py-2 text-neutral-800">
        <User className="h-4 w-4" />
        <span className="text-xs tracking-wide">About</span>
      </div>
      <h2 className="text-2xl font-semibold md:text-3xl">Hi, I’m a wannabe filmmaker</h2>
      <p className="mt-4 text-neutral-600">
        I love learning by making. My current focus is on small, character-driven moments and
        the craft of editing—finding rhythm, shaping emotion, and letting images do the talking.
        I experiment with cameras, lenses, and color workflows, often shooting with friends on
        weekends and polishing cuts at night.
      </p>
      <p className="mt-4 text-neutral-600">
        Beyond film, I enjoy photography, sound design, and exploring new tools. I’m always
        open to collaborations and creative challenges.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        <div className="rounded-lg border border-neutral-200 bg-white p-4">
          <p className="text-xs text-neutral-500">Focus</p>
          <p className="mt-1 font-medium">Cinematography & Editing</p>
        </div>
        <div className="rounded-lg border border-neutral-200 bg-white p-4">
          <p className="text-xs text-neutral-500">Gear</p>
          <p className="mt-1 font-medium">Mirrorless + Vintage Glass</p>
        </div>
        <div className="rounded-lg border border-neutral-200 bg-white p-4">
          <p className="text-xs text-neutral-500">Style</p>
          <p className="mt-1 font-medium">Natural light, intimate frames</p>
        </div>
      </div>
    </section>
  );
};

export default About;
