import bannerImage from "../assets/images/banner-stack.png";

function Hero() {
  return (
    <section id="home" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="grid md:grid-cols-2 gap-10 items-center">

        {/* ---------- Left: text content ---------- */}
        <div>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-gray-900">
            Build Your Ideal <br />
            {/* Two-tone heading: plain text above, gradient text below */}
            <span className="brand-gradient-text">Development Stack</span>
          </h1>

          <p className="mt-5 text-gray-600 text-lg max-w-md">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#technologies"
              className="brand-gradient-bg text-white font-medium px-6 py-3 rounded-full hover:opacity-90 transition-opacity"
            >
              Explore Technologies
            </a>
            <a
              href="#about"
              className="border border-gray-300 text-gray-800 font-medium px-6 py-3 rounded-full hover:bg-gray-50 transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* ---------- Right: banner image ---------- */}
        <div className="flex justify-center md:justify-end">
          <img
            src={bannerImage}
            alt="Isometric illustration of a development tech stack"
            className="w-64 sm:w-80 md:w-96"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
