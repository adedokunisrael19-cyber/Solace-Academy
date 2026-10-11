function LearningApproach() {
  return (
    <section className="bg-white px-6 py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">

        {/* Visual */}
        <div className="order-2 md:order-1">
          <div className="rounded-3xl bg-blue-50 p-8">

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold text-blue-700">
                OUR APPROACH
              </p>

              <div className="mt-6 space-y-5">

                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100 font-bold text-blue-700">
                    1
                  </div>

                  <div>
                    <h3 className="font-bold text-slate-900">
                      Understand
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      We explain concepts clearly so children understand why
                      something works.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100 font-bold text-blue-700">
                    2
                  </div>

                  <div>
                    <h3 className="font-bold text-slate-900">
                      Participate
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      Children are encouraged to ask questions, practise and
                      actively participate in lessons.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100 font-bold text-blue-700">
                    3
                  </div>

                  <div>
                    <h3 className="font-bold text-slate-900">
                      Grow
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      Through practice and feedback, children gradually build
                      confidence in their abilities.
                    </p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

        {/* Content */}
        <div className="order-1 md:order-2">

          <p className="text-sm font-bold uppercase tracking-widest text-blue-700">
            Learning Approach
          </p>

          <h2 className="mt-3 text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
            We Focus on Understanding, Not Just Memorising
          </h2>

          <p className="mt-6 leading-7 text-slate-600">
            Every child learns differently. Our approach is designed to make
            lessons clear, engaging and supportive while helping children
            develop confidence in their academic abilities.
          </p>

          <p className="mt-4 leading-7 text-slate-600">
            We encourage learners to ask questions, practise what they learn
            and receive feedback that helps them identify areas for improvement.
          </p>

          <a href="#registration" className="mt-8 rounded-lg bg-blue-700 px-6 py-3 font-semibold text-white hover:bg-blue-800">
            Register Your Child
          </a>

        </div>

      </div>
    </section>
  );
}

export default LearningApproach;