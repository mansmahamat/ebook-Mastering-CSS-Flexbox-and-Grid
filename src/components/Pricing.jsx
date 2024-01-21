/* eslint-disable react/no-unescaped-entities */
import { ButtonLink } from '@/components/Button'
import { Container } from '@/components/Container'
import { GridPattern } from '@/components/GridPattern'
import { SectionHeading } from '@/components/SectionHeading'

export function Pricing() {

  async function handleSubmitFrench() {
    const response = await fetch("/api/stripe-french", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
    })

    const session = await response.json()
    if (session) {
      window.location.href = session.url
    }

  }

  async function handleSubmitEnglish() {
    const response = await fetch("/api/stripe-english", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
    })

    const session = await response.json()
    if (session) {
      window.location.href = session.url
    }

  }



  return (
    <section
      id="pricing"
      aria-labelledby="pricing-title"
      className="scroll-mt-14 pt-16 pb-8 sm:scroll-mt-32 sm:pt-20 sm:pb-10 lg:pt-32 lg:pb-16"
    >
      <Container>
        {/* <SectionHeading number="4" id="pricing-title">
          Pricing
        </SectionHeading> */}
        <p className="mt-8 font-display text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
          PRE-ORDER TODAY
        </p>
        <p className="mt-4 max-w-xl text-lg tracking-tight text-slate-600">
          'Mastering CSS Flexbox and Grid' will be available in two different languages
          so you can pick the one that’s right for you.
        </p>
      </Container>
      <div className="mx-auto mt-16 max-w-5xl lg:px-6">
        <div className="grid   bg-slate-50 sm:px-6 sm:pb-16 md:grid-cols-2 md:rounded-6xl md:px-8 md:pt-16 lg:p-20">
          <div className="relative  mr-1 bg-black py-16 px-4 sm:rounded-5xl sm:py-12 sm:px-10 sm:shadow-lg lg:px-12">
            <div className="absolute inset-0 text-white/10 [mask-image:linear-gradient(white,transparent)]">
              <GridPattern x="50%" y="50%" />
            </div>
            <div className="relative flex flex-col">
              <h3 className="mt-7 text-lg font-semibold tracking-tight text-white">
                English version 🇬🇧
              </h3>

              <div className=' flex -order-1 items-center'>
                <p className="-order-1 flex font-display font-bold">
                  <span className="text-[1.75rem] leading-tight text-blue-200">
                    €
                  </span>
                  <span className="ml-1 mt-1 text-7xl tracking-tight text-white">
                    10
                  </span>
                </p>
                <p className="-order-1 flex font-display font-bold">

                  <span className="ml-4 mt-1 line-through text-5xl tracking-tight text-white">
                    20
                  </span>
                </p>
              </div>

              <div className="order-1 mt-8">
                <ul className="-my-2 divide-y divide-white/10 text-base tracking-tight text-white">
                  {[
                    '+ 150-page ebook',
                    'Demo links',
                    '+50 real examples',
                  ].map((feature) => (
                    <li key={feature} className="flex py-2">
                      <svg aria-hidden="true" className="h-8 w-8 fill-white">
                        <path d="M11.83 15.795a1 1 0 0 0-1.66 1.114l1.66-1.114Zm9.861-4.072a1 1 0 1 0-1.382-1.446l1.382 1.446ZM14.115 21l-.83.557a1 1 0 0 0 1.784-.258L14.115 21Zm.954.3c1.29-4.11 3.539-6.63 6.622-9.577l-1.382-1.446c-3.152 3.013-5.704 5.82-7.148 10.424l1.908.598Zm-4.9-4.391 3.115 4.648 1.661-1.114-3.114-4.648-1.662 1.114Z" />
                      </svg>
                      <span className="ml-4">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <button
                onClick={() => handleSubmitEnglish()}
                className="mt-8 bg-[#FF9102] inline-flex justify-center rounded-md py-1 px-4 text-base font-semibold tracking-tight shadow-sm focus:outline-none text-white hover:bg-orange-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 active:bg-orange-700 active:text-white/80 disabled:opacity-30 disabled:hover:bg-orange-600"
                aria-label="PRE-ORDER with the Icon Pro plan for $229"
              >
                PRE-ORDER
              </button>
            </div>
          </div>

          <div className="relative mt-2  bg-black py-16 px-4 sm:rounded-5xl sm:py-12 sm:px-10 sm:shadow-lg lg:px-12">
            <div className="absolute inset-0 text-white/10 [mask-image:linear-gradient(white,transparent)]">
              <GridPattern x="50%" y="50%" />
            </div>
            <div className="relative flex flex-col">
              <h3 className="mt-7 text-lg font-semibold tracking-tight text-white">
                Version française 🇫🇷
              </h3>

              <div className=' flex -order-1 items-center'>
                <p className="-order-1 flex font-display font-bold">
                  <span className="text-[1.75rem] leading-tight text-blue-200">
                    €
                  </span>
                  <span className="ml-1 mt-1 text-7xl tracking-tight text-white">
                    10
                  </span>
                </p>
                <p className="-order-1 flex font-display font-bold">

                  <span className="ml-4 mt-1 line-through text-5xl tracking-tight text-white">
                    20
                  </span>
                </p>
              </div>

              <div className="order-1 mt-8">
                <ul className="-my-2 divide-y divide-white/10 text-base tracking-tight text-white">
                  {[
                    '+ 150-page ebook',
                    'Demo links',
                    '+50 real examples',

                  ].map((feature) => (
                    <li key={feature} className="flex py-2">
                      <svg aria-hidden="true" className="h-8 w-8 fill-white">
                        <path d="M11.83 15.795a1 1 0 0 0-1.66 1.114l1.66-1.114Zm9.861-4.072a1 1 0 1 0-1.382-1.446l1.382 1.446ZM14.115 21l-.83.557a1 1 0 0 0 1.784-.258L14.115 21Zm.954.3c1.29-4.11 3.539-6.63 6.622-9.577l-1.382-1.446c-3.152 3.013-5.704 5.82-7.148 10.424l1.908.598Zm-4.9-4.391 3.115 4.648 1.661-1.114-3.114-4.648-1.662 1.114Z" />
                      </svg>
                      <span className="ml-4">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <button
                onClick={() => handleSubmitFrench()}
                className="mt-8 bg-[#FF9102] inline-flex justify-center rounded-md py-1 px-4 text-base font-semibold tracking-tight shadow-sm focus:outline-none text-white hover:bg-orange-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 active:bg-orange-700 active:text-white/80 disabled:opacity-30 disabled:hover:bg-orange-600"
                aria-label="PRE-ORDER with the Icon Pro plan for $229"
              >
                PRE-ORDER
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
