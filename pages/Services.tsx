import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES, SERVICE_ICONS } from '../constants';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-bold text-white mb-8"
          >
            Our Expertise
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 max-w-2xl mx-auto text-lg md:text-xl"
          >
            End-to-end solutions for infrastructure, interiors, and precision structural engineering.
          </motion.p>
        </div>

        <div className="space-y-32">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              className={`flex flex-col lg:flex-row gap-16 items-center ${
                index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* LEFT CONTENT */}
              <div className="flex-1">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-4 rounded-xl glass bg-blue-500/10">
                    {SERVICE_ICONS[service.icon]}
                  </div>
                  <span className="text-slate-500 font-mono tracking-widest text-sm">
                    0{index + 1}
                  </span>
                </div>

                <h2 className="text-4xl font-bold text-white mb-6">
                  {service.title}
                </h2>

                <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                  {service.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                  {service.steps.map((step, i) => (
                    <div
                      key={i}
                      className="flex items-center space-x-3 text-slate-300"
                    >
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                        <Check size={14} />
                      </div>
                      <span className="text-sm font-medium">
                        {step}
                      </span>
                    </div>
                  ))}
                </div>

                <Link
                  to="/quote"
                  className="inline-flex items-center px-8 py-3.5 rounded-xl accent-gradient text-white font-bold hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all"
                >
                  Get a Specific Quote
                </Link>
              </div>

              {/* RIGHT IMAGE */}
              <div className="flex-1 w-full">
                <div className="relative group">
                  <div className="absolute inset-0 bg-blue-600/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="relative rounded-[2rem] overflow-hidden glass border border-white/10 aspect-video lg:aspect-square">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-105 hover:scale-100"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
