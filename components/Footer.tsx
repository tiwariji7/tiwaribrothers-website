import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Youtube, Instagram, ArrowUpRight } from 'lucide-react';

const Footer: React.FC = () => {

  const socialLinks = [
    { Icon: Facebook, url: "#" },
    { Icon: Twitter, url: "#" },
    { Icon: Youtube, url: "https://www.youtube.com/@Tiwaribrothers26" },
    { Icon: Instagram, url: "https://www.instagram.com/tiwaribrothersinfra/" }
  ];

  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

        {/* BRAND */}
        <div className="col-span-1 md:col-span-1">
          <Link to="/" className="flex flex-col mb-6">
            <span className="text-2xl font-bold tracking-tighter text-gradient leading-none">
              TIWARI
            </span>
            <span className="text-sm font-light tracking-[0.3em] text-blue-400">
              BROTHERS
            </span>
          </Link>

          <p className="text-slate-400 text-sm leading-relaxed mb-8">
            Building modern infrastructure with futuristic vision. A name synonymous with trust and excellence since inception.
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex space-x-4">
            {socialLinks.map(({ Icon, url }, i) => (
              <a
                key={i}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full glass flex items-center justify-center
                           hover:bg-blue-500/10 hover:text-blue-400 transition-all"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* EXPLORE */}
        <div>
          <h4 className="text-white font-semibold mb-6">Explore</h4>
          <ul className="space-y-4">
            {['Home', 'About Us', 'Services', 'Projects', 'Careers'].map((item) => (
              <li key={item}>
                <Link
                  to={`/${item.toLowerCase().replace(' ', '-')}`}
                  className="text-slate-400 text-sm hover:text-blue-400
                             transition-colors flex items-center group"
                >
                  <span>{item}</span>
                  <ArrowUpRight
                    size={12}
                    className="opacity-0 group-hover:opacity-100 ml-1 transition-all"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* SERVICES */}
        <div>
          <h4 className="text-white font-semibold mb-6">Services</h4>
          <ul className="space-y-4">
            {['Infrastructure', 'Aluminium Work', 'Glass Design', 'Fabrication', 'Interiors'].map((item) => (
              <li key={item}>
                <Link
                  to="/services"
                  className="text-slate-400 text-sm hover:text-blue-400 transition-colors"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* NEWSLETTER */}
        <div>
          <h4 className="text-white font-semibold mb-6">Newsletter</h4>
          <p className="text-slate-400 text-sm mb-6">
            Stay updated with our latest projects and insights.
          </p>
          <form className="flex flex-col space-y-3">
            <input
              type="email"
              placeholder="Your email address"
              className="bg-slate-900 border border-slate-800 rounded-lg
                         px-4 py-3 text-sm text-white
                         focus:outline-none focus:border-blue-500 transition-all"
            />
            <button
              className="accent-gradient py-3 rounded-lg text-white text-sm font-bold
                         hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div
        className="max-w-7xl mx-auto px-6 pt-10 border-t border-slate-900
                   flex flex-col md:flex-row items-center justify-between
                   text-slate-500 text-xs gap-4"
      >
        {/* LEFT */}
        <p>© 2026 Tiwari Brothers. All rights reserved.</p>

        {/* CENTER */}
        <p className="text-slate-400">
          Developed with <span className="text-red-500">❤️</span> by{" "}
          <span className="text-blue-400 font-medium">Shivam Tiwari</span>
        </p>

        {/* RIGHT */}
        <div className="flex space-x-6">
          <a href="#" className="hover:text-blue-400 transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-blue-400 transition-colors">
            Terms of Service
          </a>
          <a href="#" className="hover:text-blue-400 transition-colors">
            Cookies
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
