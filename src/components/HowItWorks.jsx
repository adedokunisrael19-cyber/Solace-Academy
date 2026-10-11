function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Register Your Child",
      description:
        "Provide your child's details and select the appropriate class.",
    },
    {
      number: "02",
      title: "Receive the Class Schedule",
      description:
        "We'll provide the lesson schedule and the information you need to get started.",
    },
    {
      number: "03",
      title: "Attend Live Lessons",
      description:
        "Your child joins structured online Mathematics and English lessons.",
    },
    {
      number: "04",
      title: "Complete Learning Activities",
      description:
        "Children participate in short quizzes and activities to reinforce what they learn.",
    },
    {
      number: "05",
      title: "Monthly Assessment",
      description:
        "Regular assessments help us understand how well each learner is progressing.",
    },
    {
      number: "06",
      title: "Receive Progress Feedback",
      description:
        "Parents receive feedback about their child's learning and progress.",
    },
  ];

  return (
    <section id="how-it-works" className="bg-white px-6 py-20">
      <div className="mx-auto max-w-7xl">

        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-blue-700">
            How It Works
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
            A Simple Learning Journey
          </h2>

          <p className="mt-4 leading-7 text-slate-600">
            From registration to regular progress feedback, we keep the
            learning journey simple and clear for both parents and children.
          </p>
        </div>

    
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-2xl border border-slate-200 bg-white p-6"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-700 font-bold text-white">
                {step.number}
              </div>

              <h3 className="mt-5 text-xl font-bold text-slate-900">
                {step.title}
              </h3>

              <p className="mt-3 leading-6 text-slate-600">
                {step.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default HowItWorks;