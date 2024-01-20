import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Pattern } from '@/components/Pattern'
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export function FreeChapters() {

  const [title, setTitle] = useState("");
  const notify = () => toast.success("Added on the waiting list!");
  const notifyError = () => toast.error("Retry");


  function handleSubmit(e) {
    e.preventDefault();
    const postData = async () => {
      const data = {
        title: title,
      };

      const response = await fetch("/api/mailchimp", {
        method: "POST",
        body: JSON.stringify(data),
      });
      return response.json();
    };
    postData().then((data) => {
      notify();
    }).catch((error) => {
      notifyError();
    });
  }



  return (
    <>
      <ToastContainer />

      <section
        id="free-chapters"
        aria-labelledby="free-chapters-title"
        className="scroll-mt-14 text-black bg-[#FF9102] sm:scroll-mt-32"
      >
        <h2 id="free-chapters-title" className="sr-only">
          Free preview
        </h2>
        <div className="overflow-hidden lg:relative">
          <Container
            size="md"
            className="relative grid grid-cols-1 items-end gap-y-12 py-20 lg:static lg:grid-cols-2 lg:py-28 xl:py-32"
          >
            <Pattern className="absolute -top-32 left-0 w-full sm:left-3/4 sm:-top-5 sm:ml-8 sm:w-auto md:left-2/3 lg:left-auto lg:right-2 lg:ml-0 xl:right-auto xl:left-2/3" />
            <div>
              <h2 className="font-display text-5xl font-extrabold tracking-tight  sm:w-3/4 sm:text-6xl md:w-2/3 lg:w-auto">
                Stay informed when it will be ready!
              </h2>
              <p className="mt-4 text-lg tracking-tight ">
                Stay in the loop: Enter your email below to be the first to know when new content is ready!
              </p>
            </div>
            <form onSubmit={handleSubmit} className="lg:pl-16">
              {/* <h3 className="text-base font-medium tracking-tight text-white">
              Get two free chapters straight to your inbox &rarr;
            </h3> */}
              <div className="mt-4 sm:relative sm:flex sm:items-center sm:py-0.5 sm:pr-2.5">
                <div className="relative sm:static sm:flex-auto">
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email-address"
                    onChange={(e) => setTitle(e.target.value)}
                    required
                    placeholder="Email address"
                    className="peer relative z-10 w-full appearance-none bg-transparent px-4 py-2 text-base text-black placeholder:text-black/70 focus:outline-none sm:py-3"
                  />
                  <div className="absolute inset-0 rounded-md border border-black/20 peer-focus:border-orange-300 peer-focus:bg-orange-500 peer-focus:ring-1 peer-focus:ring-orange-300 sm:rounded-xl" />
                </div>
                <Button
                  type="submit"
                  color="white"
                  className="mt-4 w-full sm:relative sm:z-10 sm:mt-0 sm:w-auto sm:flex-none"
                >
                  Enter
                </Button>
              </div>
            </form>
          </Container>
        </div>
      </section>
    </>
  )
}
