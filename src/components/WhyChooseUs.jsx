function WhyChooseUs() {
  const reasons = [
    {
      title: "Engaging & Structured Lessons",
      description:
        "Lessons are organised to make concepts easier to understand while keeping children actively involved.",
    },
    {
      title: "Child-Focused Teaching",
      description:
        "We consider the learning level and needs of each child when delivering our lessons.",
    },
    {
      title: "Regular Quizzes & Assessments",
      description:
        "Short learning activities and assessments help reinforce concepts and identify areas that need attention.",
    },
    {
      title: "Monthly Progress Feedback",
      description:
        "Parents receive regular feedback to understand how their child is progressing.",
    },
    {
      title: "Convenient Online Learning",
      description:
        "Children can learn from home without the need for daily physical travel to a learning centre.",
    },
    {
      title: "Understanding Over Memorisation",
      description:
        "We focus on helping children understand concepts rather than simply memorising answers.",
    },
  ];

  return (
    <section className="bg-slate-900 px-6 py-20 text-white">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-yellow-400">
            Why Choose Us
          </p>

          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Learning Designed Around Your Child
          </h2>

          <p className="mt-4 leading-7 text-slate-300">
            At Solace Academy, we aim to create a supportive learning
            environment where children can understand concepts, participate
            actively and build confidence.
          </p>
        </div>

        {/* Reasons */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className="rounded-2xl border border-slate-700 bg-slate-800 p-6"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-yellow-400 font-bold text-slate-900">
                {index + 1}
              </div>

              <h3 className="mt-5 text-xl font-bold">
                {reason.title}
              </h3>

              <p className="mt-3 leading-6 text-slate-300">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;