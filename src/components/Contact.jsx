function Contact() {
  return (
    <section id="contact" className="bg-white px-6 py-20">
      <div className="mx-auto max-w-7xl">

        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-blue-700">
            Contact Us
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
            We're Here to Help
          </h2>

          <p className="mt-4 leading-7 text-slate-600">
            Have a question about our classes, registration or learning
            approach? Reach out to us and we'll be happy to help.
          </p>
        </div>

        {/* Contact Information */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">

          <div className="rounded-2xl bg-slate-50 p-6 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-700">
              ☎
            </div>

            <h3 className="mt-4 font-bold text-slate-900">
              Phone
            </h3>

            <p className="mt-2 text-slate-600">
              +2347043858209

            </p>
          </div>

          <div className="rounded-2xl bg-slate-50 p-6 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-700">
              ✉
            </div>

            <h3 className="mt-4 font-bold text-slate-900">
              Email
            </h3>

            <p className="mt-2 text-slate-600">
             solaceacademy22@gmail.com 
            </p>
          </div>

          <div className="rounded-2xl bg-slate-50 p-6 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-700">
              💬
            </div>

            <h3 className="mt-4 font-bold text-slate-900">
              WhatsApp
            </h3>

            <p className="mt-2 text-slate-600">
              Chat with us
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;