/* eslint-disable react/no-unescaped-entities */
import { Container } from '@/components/Container'

export function Introduction() {
  return (
    <section
      id="introduction"
      aria-labelledby="introduction-title"
      className="pt-20 pb-16 sm:pb-20 md:pt-36 lg:py-32"
    >
      <h2 id="introduction-title" className="sr-only">
        Introduction
      </h2>
      <Container>
        <p className="font-display text-4xl font-bold tracking-tight text-slate-900">

          Discover cool tricks for making websites look awesome with 'Mastering CSS Flexbox and Grid.' This guide has lots of examples to help you become a pro at creating cool web designs easily
        </p>
        <p className="mt-4 text-lg tracking-tight text-slate-700">
          Before getting into the details of CSS Flexbox and Grid, you might think it involves complicated coding and lots of manual work.
        </p>
        <p className="mt-4 text-lg tracking-tight text-slate-700">
          But in 'Mastering CSS Flexbox and Grid,' you'll discover a simpler way. Learn the easy techniques experts use, so you can effortlessly master these powerful tools and create smooth layouts without needing complex manual adjustments.
        </p>

        <ul className="mt-8 space-y-3 text-lg tracking-tight text-slate-700">
          {
            [
              "Learn by doing: Get better at CSS Flexbox and Grid by trying out real stuff like making cool website parts.",
              "Solve problems: Figure out real problems and fix them using CSS in your projects.",
              "Understand more: Go beyond regular lessons and really get why and how Flexbox and Grid work in different situations."
            ].map((feature) => (
              <li key={feature} className="flex">
                <svg
                  aria-hidden="true"
                  className="h-8 w-8 flex-none fill-blue-500"
                >
                  <path d="M11.83 15.795a1 1 0 0 0-1.66 1.114l1.66-1.114Zm9.861-4.072a1 1 0 1 0-1.382-1.446l1.382 1.446ZM14.115 21l-.83.557a1 1 0 0 0 1.784-.258L14.115 21Zm.954.3c1.29-4.11 3.539-6.63 6.622-9.577l-1.382-1.446c-3.152 3.013-5.704 5.82-7.148 10.424l1.908.598Zm-4.9-4.391 3.115 4.648 1.661-1.114-3.114-4.648-1.662 1.114Z" />
                </svg>
                <span className="ml-4">{feature}</span>
              </li>
            ))}
        </ul>
        <p className="mt-4 text-lg tracking-tight text-slate-700">
          <strong>PRE-ODER</strong> your copy today and improve your journey in web development with actionable insights and immersive examples!
        </p>
        {/* <p className="mt-10">
          <a
            href="#free-chapters"
            className="text-base font-medium tracking-tight text-blue-600 hover:text-blue-800"
          >
            Get two free chapters straight to your inbox &rarr;
          </a>
        </p> */}
      </Container>
    </section>
  )
}
