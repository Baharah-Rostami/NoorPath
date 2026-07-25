export default function ContactPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-linear-to-b from-white via-emerald-50/40 to-white dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950">

      {/* HERO */}

      <section className="relative px-6 py-28">

        {/* Background Effects */}

        <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-emerald-400/20 blur-3xl" />
        <div className="absolute right-0 top-40 h-72 w-72 rounded-full bg-teal-400/20 blur-3xl" />


        <div className="relative mx-auto max-w-5xl text-center">


          <span className="rounded-full bg-emerald-100 px-5 py-2 text-sm font-semibold text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">
            Contact NoorPath
          </span>


          <h1 className="mt-8 text-5xl font-extrabold leading-tight dark:text-white md:text-6xl">

            Let's Build Your Future
            <span className="block bg-linear-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
              Together
            </span>

          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600 dark:text-gray-400">

            Have questions about opportunities, careers, or the NoorPath
            platform? Our team is always ready to help you.

          </p>

        </div>
      </section>


      {/* CONTACT SECTION */}

      <section className="mx-auto max-w-7xl px-6 pb-28">

        <div className="grid gap-10 lg:grid-cols-2">


          {/* INFO CARDS */}

          <div className="space-y-6">


            {[
              {
                icon: "📧",
                title: "Email Us",
                text: "support@noorpath.com",
              },

              {
                icon: "📍",
                title: "Location",
                text: "Afghanistan",
              },

              {
                icon: "💬",
                title: "Support",
                text: "Available for students and professionals",
              },

            ].map((item)=>(
              
              <div
                key={item.title}
                className=" group rounded-4xl border border-white/30 bg-white/70 p-8 shadow-xl backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 dark:border-zinc-800 dark:bg-zinc-900/70
                ">

                <div className="flex items-center gap-6">

                  <div className=" flex h-16 w-16 items-center justify-center rounded-3xl bg-linear-to-br from-emerald-500 to-teal-500 text-3xl shadow-lg transition group-hover:scale-110
                  ">
                    {item.icon}
                  </div>

                  <div>

                    <h3 className="text-xl font-bold dark:text-white">
                      {item.title}
                    </h3>


                    <p className="mt-2 text-gray-600 dark:text-gray-400">
                      {item.text}
                    </p>

                  </div>

                </div>

              </div>

            ))}

          </div>

          {/* FORM */}

          <div
            className="rounded-[40px] border border-white/30bg-white/70 p-8 shadow-2xl backdrop-blur-xl dark:border-zinc-800 dark:bg-zinc-900/70
            ">

            <h2 className="text-3xl font-bold dark:text-white">
              Send A Message
            </h2>

            <p className="mt-3 text-gray-600 dark:text-gray-400">
              We will get back to you as soon as possible.
            </p>



            <form className="mt-8 space-y-5">


              <input
                type="text"
                placeholder="Your Name"
                className=" w-full rounded-2xl border border-gray-200 bg-white/80 px-5 py-4 outline-none transition focus:border-emerald-500 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white
                "/>

              <input
                type="email"
                placeholder="Your Email"
                className=" w-full rounded-2xl border border-gray-200  bg-white/80 px-5 py-4 outline-none transition
                focus:border-emerald-500 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white
                " />

              <textarea
                rows={5}
                placeholder="Your Message"
                className=" w-full rounded-2xl border border-gray-200 bg-white/80 px-5 py-4 outline-none
                transition focus:border-emerald-500 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white
                "
              />

              <button
                className=" w-full rounded-2xl bg-linear-to-r from-emerald-500  to-teal-500 py-4
                text-lg font-bold text-white shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-emerald-400/40
                ">
                Send Message
              </button>
            </form>
          </div>

        </div>
      </section>
    </main>
  );
}