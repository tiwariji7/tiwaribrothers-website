
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Rocket, Heart, Zap, Target } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    { title: 'Excellence', icon: Target, desc: 'We never settle for anything less than perfection in every structural detail.' },
    { title: 'Innovation', icon: Zap, desc: 'Pioneering new materials and methodologies for sustainable growth.' },
    { title: 'Trust', icon: Shield, desc: 'Building relationships that last as long as our infrastructures.' },
    { title: 'Vision', icon: Rocket, desc: 'Looking ahead to future industries and technological integration.' }
  ];

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-blue-400 font-bold uppercase tracking-[0.3em] text-sm mb-4 block">Our Story</span>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">A Legacy of <span className="text-blue-500">Trust</span> and Architectural <span className="text-slate-400">Power.</span></h2>
            <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
              <p>
                Founded on the principles of integrity and engineering prowess, Tiwari Brothers has evolved from a local construction firm into a multi-domain enterprise. 
              </p>
              <p>
                Our journey has been defined by a relentless pursuit of quality. From monumental infrastructure projects to intricate interior detailing, we have consistently pushed the boundaries of what is possible in the built environment.
              </p>
              <p>
                Today, we stand as a beacon of reliability for clients who demand the very best in aluminium work, fabrication, and large-scale urban development.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden">
              <img 
                src="https://i.pinimg.com/736x/95/ad/f3/95adf3f009ad55a564dc3990b2ad70bd.jpg" 
                alt="Corporate building" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            {/* Glass Badge */}
            <div className="absolute -bottom-10 -left-10 p-8 glass rounded-2xl max-w-[280px] hidden md:block">
              <div className="text-4xl font-bold text-slate-900 mb-2">15+</div>
              <div className="text-slate-700 text-sm leading-relaxed font-medium">Years of pioneering excellence in the multi-domain business sector.</div>
            </div>
          </motion.div>
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
          <motion.div 
            whileHover={{ y: -10 }}
            className="p-12 rounded-[2rem] glass bg-blue-600/5 border-blue-500/10"
          >
            <h3 className="text-3xl font-bold text-white mb-6">Our Vision</h3>
            <p className="text-slate-400 text-lg leading-relaxed">
              To be the global benchmark for futuristic infrastructure and architectural innovation, creating spaces that inspire humanity and respect our planet.
            </p>
          </motion.div>
          <motion.div 
            whileHover={{ y: -10 }}
            className="p-12 rounded-[2rem] glass bg-indigo-600/5 border-indigo-500/10"
          >
            <h3 className="text-3xl font-bold text-white mb-6">Our Mission</h3>
            <p className="text-slate-400 text-lg leading-relaxed">
              To deliver superior structural and aesthetic solutions through advanced technology, ethical practices, and a culture of continuous improvement.
            </p>
          </motion.div>
        </div>

        {/* Values */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Values that Drive Us</h2>
          <p className="text-slate-400">The foundation of every project we undertake.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((val, idx) => (
            <motion.div
              key={val.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl glass hover:border-blue-500/30 transition-all group text-center"
            >
              <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                <val.icon size={28} />
              </div>
              <h4 className="text-xl font-bold text-white mb-4">{val.title}</h4>
              <p className="text-slate-400 text-sm">{val.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
