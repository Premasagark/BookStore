import React from 'react'

const GenreSection = () => {
  return (
    <section className="relative w-full h-[40vh] bg-white overflow-hidden">
      <a
        href="#"
        className="bg-neutral-primary-soft block max-w-sm p-6 border border-default rounded-base shadow-xs hover:bg-neutral-secondary-medium"
      >
        <h5 className="mb-3 text-2xl font-semibold tracking-tight text-heading leading-8">
          Noteworthy technology acquisitions 2021
        </h5>
        <p className="text-body">
          Here are the biggest technology acquisitions of 2025 so far, in
          reverse chronological order.
        </p>
      </a>
    </section>
  );
}

export default GenreSection