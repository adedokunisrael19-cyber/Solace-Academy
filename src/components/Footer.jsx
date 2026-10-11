function Footer() {
  return (
    <footer className="bg-slate-900 px-6 py-12 text-white">
      <div className="mx-auto max-w-7xl">

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold">
              SOLACE
            </h2>

            <p className="mt-1 text-sm tracking-widest text-slate-400">
              ACADEMY
            </p>

            <p className="mt-5 max-w-xs leading-6 text-slate-400">
              Building Confident Learners, One Lesson at a Time.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-bold">
              Navigation
            </h3>

            <div className="mt-4 space-y-3 text-sm text-slate-400">
              <a href="#" className="block hover:text-white">
                Home
              </a>

              <a href="#" className="block hover:text-white">
                About
              </a>

              <a href="#" className="block hover:text-white">
                Classes
              </a>

              <a href="#" className="block hover:text-white">
                Subjects
              </a>
            </div>
          </div>

          {/* More */}
          <div>
            <h3 className="font-bold">
              Learn More
            </h3>

            <div className="mt-4 space-y-3 text-sm text-slate-400">
              <a href="#" className="block hover:text-white">
                How It Works
              </a>

              <a href="#" className="block hover:text-white">
                Why Choose Us
              </a>

              <a href="#" className="block hover:text-white">
                Contact
              </a>

              <a href="#" className="block hover:text-white">
                Register
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold">
              Contact
            </h3>

            <div className="mt-4 space-y-3 text-sm text-slate-400">
              <p>+2347043858209</p>
              <p>solaceacademy22@gmail.com </p>
              <p>WhatsApp available</p>
            </div>
          </div>

        </div>

        <div className="mt-10 border-t border-slate-800 pt-6 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Solace Academy. All rights reserved.
        </div>

      </div>
    </footer>
  );
}

export default Footer;