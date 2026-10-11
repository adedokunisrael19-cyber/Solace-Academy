import heroImage from "../assets/Hero-Learning.jpg"
import hero from "../assets/learn.jpg"


function Hero() {
  return (
    <section id="hero" className="bg-white">
      <div className="mx-auto grid min-h-[600px] max-w-7xl items-center gap-12 px-6 py-16 md:grid-cols-2 lg:px-8">

        <div>
          <p className="mb-4 text-sm font-bold uppercase tracking-widest text-blue-700">
            SOLACE ACADEMY
          </p>

          <h1 className="max-w-xl text-4xl font-bold leading-tight text-slate-900 md:text-5xl lg:text-6xl">
            Building Confident Learners,
            <span className="text-blue-700"> One Lesson at a Time.</span>
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-8 text-slate-600">
            Quality online Mathematics and English lessons designed to help
            children learn, understand and grow with confidence.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a href = "#registration" className="rounded-lg bg-blue-700 px-6 py-3 font-semibold text-white transition hover:bg-blue-800">
              Register Your Child
            </a>

            <a href="#about" className="rounded-lg border border-slate-300 px-6 py-3 font-semibold text-slate-700 transition hover:border-blue-700 hover:text-blue-700">
              Learn More
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-6 text-sm text-slate-600">
            <div>
              <span className="font-bold text-slate-900">Basic 1–5</span>
              <p>Classes</p>
            </div>

            <div>
              <span className="font-bold text-slate-900">2 Core</span>
              <p>Subjects</p>
            </div>

            <div>
              <span className="font-bold text-slate-900">Online</span>
              <p>Learning</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
            <div className="relative w-full max-w-[520px] overflow-hidden rounded-3xl bg-blue-50">
                <img
                src={hero}
                alt="Child learning online from home with a laptop"
                className="h-[320px] w-full object-cover brightness-90 sm:h-[400px]"
                />

                <div className="absolute bottom-4 left-4 rounded-xl bg-white/95 px-5 py-4 shadow-lg sm:bottom-6 sm:left-6">
                <p className="font-bold text-slate-900">
                    Learn With Confidence
                </p>
                <p className="mt-1 text-sm text-slate-600">
                    Mathematics & English
                </p>
                </div>
            </div>
            </div>

      </div>
    </section>
  );
}

export default Hero;