import React from 'react';
import { Phone, Mail, MapPin, MessageSquare } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

          {/* LEFT CONTENT */}
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">
              Let's Talk <br /> <span className="text-blue-500">Business.</span>
            </h1>

            <p className="text-slate-400 text-lg mb-12 max-w-lg leading-relaxed">
              Have questions or looking for a long-term partnership? Reach out to our team of experts today.
            </p>

            <div className="space-y-8">

              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 rounded-xl glass bg-blue-500/10 flex items-center justify-center flex-shrink-0 text-blue-400">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Call Us</h4>
                  <p className="text-slate-400">+91 8726124342</p>
                  <p className="text-slate-400">+91 9889240590</p>
                  <p className="text-slate-500 text-sm">Mon–Sat, 9am–7pm</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 rounded-xl glass bg-blue-500/10 flex items-center justify-center flex-shrink-0 text-blue-400">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Email Us</h4>
                  <p className="text-slate-400">info@tiwaribrothers.com</p>
                  <p className="text-slate-400">projects@tiwaribrothers.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 rounded-xl glass bg-blue-500/10 flex items-center justify-center flex-shrink-0 text-blue-400">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Office</h4>
                  <p className="text-slate-400">62, Sai Nagar, Kondwa</p>
                  <p className="text-slate-400">Pune, Maharastra, 411048</p>
                </div>
              </div>

            </div>

            <div className="mt-12 pt-12 border-t border-slate-900 flex space-x-6">
              <a
                href="https://wa.me/919889240590?text=Hello%20Tiwari%20Brothers,%20I%20am%20interested%20in%20your%20services.%20Please%20contact%20me."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-blue-400 font-bold glass px-6 py-3 rounded-full hover:bg-blue-500 hover:text-white transition-all"
              >
              <MessageSquare size={18} />
              <span>Chat on WhatsApp</span>
              </a>

            </div>
          </div>

          {/* RIGHT MAP */}
          <div className="relative">
            <div className="h-full min-h-[500px] w-full rounded-[3rem] glass border border-white/10 overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-700">

              {/* MAP BACKGROUND – FIXED */}
              <div
                className="absolute inset-0 bg-cover bg-center opacity-40"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1000')",
                }}
              />

              <div className="absolute inset-0 bg-blue-900/20" />

              {/* MAP PIN – UP INDIA */}
              <div className="absolute top-[55%] left-[85%] -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  <div className="w-16 h-16 bg-blue-500 rounded-full animate-ping opacity-25 absolute -inset-0" />
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white relative shadow-2xl">
                    <MapPin size={24} />
                  </div>
                </div>
              </div>

              {/* OFFICE LABEL */}
              <div className="absolute bottom-10 left-10 glass p-6 rounded-2xl border border-white/20">
                <div className="text-white font-bold mb-1">Head Office</div>
                <div className="text-slate-400 text-xs">
                  Prayagraj, Uttar Pradesh
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
