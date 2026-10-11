import her from "../assets/learning.jpg"

function About() {
  return (
    <section id="about" className="bg-slate-50 px-6 py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">

    
        <div className="flex justify-center">
          <div className="flex h-[400px] w-full max-w-md items-center justify-center rounded-3xl bg-blue-100">
            <div className="text-center">
                <div className="flex justify-center">
                          <div className="relative w-full max-w-[520px] overflow-hidden rounded-3xl bg-blue-50">
                              <img
                              src={her}
                              alt="Child learning online from home with a laptop"
                              className="h-[320px] w-full object-cover brightness-90 sm:h-[400px]"
                              />
              
        
                          </div>
                          </div>
            </div>
          </div>
        </div>

    
        <div>
          <p className="text-sm font-bold uppercase tracking-widest text-blue-700">
            About Solace Academy
          </p>

          <h2 className="mt-3 text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
            Helping Children Learn, Understand and Grow
          </h2>

          <p className="mt-6 leading-7 text-slate-600">
            Solace Academy is an online learning academy focused on helping
            children in Basic 1–5 develop strong foundations in Mathematics
            and English.
          </p>

          <p className="mt-4 leading-7 text-slate-600">
            Our lessons are designed to make learning clear, engaging and
            supportive. We focus on helping children understand concepts,
            participate actively and gradually build confidence in their
            academic abilities.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">

            <div className="rounded-xl bg-white p-5 shadow-sm">
              <h3 className="font-bold text-slate-900">
                Child-Focused
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Lessons are designed around the learning needs and level of
                each child.
              </p>
            </div>

            <div className="rounded-xl bg-white p-5 shadow-sm">
              <h3 className="font-bold text-slate-900">
                Confidence Building
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                We encourage children to understand, participate and ask
                questions.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default About;