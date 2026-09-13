const linkGroups = [
  {
    title: "Product",
    links: [
      { name: "Home", href: "#home" },
      { name: "Technologies", href: "#technologies" },
      { name: "Projects", href: "#projects" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About", href: "#about" },
      { name: "Contact", href: "#contact" },
      { name: "Careers", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
    ],
  },
];

const socialLinks = [
  { name: "GitHub", href: "https://github.com" },
  { name: "Twitter", href: "https://twitter.com" },
  { name: "LinkedIn", href: "https://linkedin.com" },
];

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand block */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2">
              <span className="brand-gradient-bg w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                DS
              </span>
              <span className="font-bold text-lg text-gray-900">
                Dev <span className="brand-gradient-text">Stack</span>
              </span>
            </div>

            <p className="text-sm text-gray-500 mt-4 max-w-xs">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>

            <div className="flex gap-4 mt-5">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-gray-500 hover:text-gray-900"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>

          {/* Three link groups */}
          {linkGroups.map((group) => (
            <div key={group.title}>
              <h4 className="text-xs font-semibold text-gray-900 tracking-wide uppercase">
                {group.title}
              </h4>
              <ul className="mt-4 flex flex-col gap-3">
                {group.links.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-sm text-gray-500 hover:text-gray-900">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-200 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400">© {year} Dev Stack. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-gray-400 hover:text-gray-700">Privacy</a>
            <a href="#" className="text-sm text-gray-400 hover:text-gray-700">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
