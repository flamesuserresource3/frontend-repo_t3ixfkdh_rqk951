import React from 'react';
import { Mail, Film } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="mx-auto max-w-4xl px-6 py-16 md:py-24">
      <div className="rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm md:p-10">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white">
            <Film className="h-5 w-5" />
          </div>
          <div>
            <h3 className="text-lg font-semibold">Let’s make something</h3>
            <p className="text-sm text-neutral-600">
              Reach out for collaborations, camera tests, or just to say hi.
            </p>
          </div>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <a
            href="mailto:hello@example.com"
            className="inline-flex items-center justify-between rounded-xl border border-neutral-200 bg-neutral-50 px-5 py-4 transition hover:bg-neutral-100"
          >
            <div>
              <p className="text-sm text-neutral-500">Email</p>
              <p className="font-medium">hello@example.com</p>
            </div>
            <Mail className="h-5 w-5 text-neutral-700" />
          </a>

          <a
            href="#"
            className="inline-flex items-center justify-between rounded-xl border border-neutral-200 bg-neutral-50 px-5 py-4 transition hover:bg-neutral-100"
          >
            <div>
              <p className="text-sm text-neutral-500">Vimeo / YouTube</p>
              <p className="font-medium">Watch my reel</p>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-5 w-5 text-neutral-700"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>

      <p className="mt-6 text-center text-xs text-neutral-500">
        © {new Date().getFullYear()} Wannabe Filmmaker. All rights reserved.
      </p>
    </section>
  );
};

export default Contact;
