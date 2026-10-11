function Subjects() {
  const subjects = [
    {
      name: "Mathematics",
      icon: "01",
      description:
        "Building strong numerical, logical and problem-solving skills through clear and structured lessons.",
      topics: [
        "Numbers & Operations",
        "Problem Solving",
        "Measurement",
        "Geometry",
      ],
    },
    {
      name: "English",
      icon: "02",
      description:
        "Developing reading, writing, grammar, vocabulary and communication skills.",
      topics: [
        "Reading & Comprehension",
        "Grammar",
        "Vocabulary",
        "Writing",
      ],
    },
  ];

  return (
    <section id="subjects" className="bg-slate-50 px-6 py-20">
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-blue-700">
            Our Subjects
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
            Strong Foundations in Core Subjects
          </h2>

          <p className="mt-4 leading-7 text-slate-600">
            We focus on the essential subjects children need to develop strong
            academic foundations and confidence in their learning.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">

          {subjects.map((subject) => (
            <div
              key={subject.name}
              className="rounded-2xl bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >

             
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100 font-bold text-blue-700">
                {subject.icon}
              </div>

              <h3 className="mt-6 text-2xl font-bold text-slate-900">
                {subject.name}
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                {subject.description}
              </p>

             
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {subject.topics.map((topic) => (
                  <div
                    key={topic}
                    className="flex items-center gap-2 text-sm text-slate-600"
                  >
                    <span className="text-blue-700">✓</span>
                    {topic}
                  </div>
                ))}
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Subjects;