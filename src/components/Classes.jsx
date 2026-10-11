function Classes() {
  const classes = [
    {
      level: "Basic 1",
      description: "Building strong foundations in Mathematics and English.",
    },
    {
      level: "Basic 2",
      description: "Developing understanding, confidence and essential skills.",
    },
    {
      level: "Basic 3",
      description: "Strengthening core concepts through structured learning.",
    },
    {
      level: "Basic 4",
      description: "Building stronger problem-solving and communication skills.",
    },
    {
      level: "Basic 5",
      description: "Preparing learners with confidence for the next academic stage.",
    },
  ];

  return (
    <section id="classes" className="bg-white px-6 py-20">
      <div className="mx-auto max-w-7xl">

       
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-blue-700">
            Our Classes
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
            Learning Designed for Every Stage
          </h2>

          <p className="mt-4 leading-7 text-slate-600">
            Our classes are designed to support children at different stages
            of their primary education, helping them build strong academic
            foundations.
          </p>
        </div>

        
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {classes.map((item) => (
            <div
              key={item.level}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 font-bold text-blue-700">
                {item.level.replace("Basic ", "")}
              </div>

              <h3 className="mt-5 text-xl font-bold text-slate-900">
                {item.level}
              </h3>

              <p className="mt-3 leading-6 text-slate-600">
                {item.description}
              </p>

              <button className="mt-6 font-semibold text-blue-700 hover:text-blue-800">
                Learn More →
              </button>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Classes;