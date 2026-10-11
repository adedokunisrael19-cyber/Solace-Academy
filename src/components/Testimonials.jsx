function Testimonials() {
  const testimonials = [
    {
      quote:
        "Placeholder for a real parent testimonial about their child's learning experience at Solace Academy.",
      name: "Parent Name",
      role: "Parent of Basic 2 learner",
    },
    {
      quote:
        "Placeholder for a real parent testimonial about the child's confidence, understanding or progress.",
      name: "Parent Name",
      role: "Parent of Basic 4 learner",
    },
    {
      quote:
        "Placeholder for a real parent testimonial about the quality and convenience of the online lessons.",
      name: "Parent Name",
      role: "Parent of Basic 5 learner",
    },
  ];

  return (
    <section className="bg-slate-50 px-6 py-20">
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-blue-700">
            Parent Feedback
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
            What Parents Say
          </h2>

          <p className="mt-4 leading-7 text-slate-600">
            We value the experiences and feedback of parents as we support
            children throughout their learning journey.
          </p>
        </div>

        {/* Testimonials */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">

          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name + testimonial.role}
              className="rounded-2xl bg-white p-6 shadow-sm"
            >
              {/* Quote */}
              <div className="text-3xl font-bold text-blue-700">
                “
              </div>

              <p className="mt-3 leading-7 text-slate-600">
                {testimonial.quote}
              </p>

              {/* Parent */}
              <div className="mt-6 border-t border-slate-100 pt-5">
                <h3 className="font-bold text-slate-900">
                  {testimonial.name}
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Testimonials;