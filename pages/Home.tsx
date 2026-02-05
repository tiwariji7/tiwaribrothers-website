
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Trophy, Users, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';
import TiltCard from '../components/TiltCard';
import { SERVICES, SERVICE_ICONS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Layer */}
        <div className="absolute inset-0 z-0">
          {/* Main Hero Building Image */}
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000" 
            alt="Modern Corporate Building" 
            className="w-full h-full object-cover opacity-40 scale-105"
          />
          {/* Gradients Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/80 to-slate-950" />
          
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px]"
          />
          
          {/* Subtle Grid Overlay */}
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="flex items-center justify-center space-x-2 mb-8">
              <div className="h-[1px] w-8 bg-blue-500/50" />
              <span className="text-blue-400 text-xs font-bold tracking-[0.4em] uppercase">
                Premier Infrastructure Group
              </span>
              <div className="h-[1px] w-8 bg-blue-500/50" />
            </div>
            
            <h1 className="text-5xl md:text-8xl font-bold mb-8 tracking-tighter text-gradient leading-[1.1]">
              Building Strong <br /> Foundations for Tomorrow
            </h1>
            
            <p className="max-w-2xl mx-auto text-slate-400 text-lg md:text-xl mb-12 font-light leading-relaxed">
              Tiwari Brothers delivers high-performance solutions in construction, glass works, and fabrication, transforming architectural visions into structural reality.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link to="/quote" className="w-full sm:w-auto px-10 py-4 rounded-full accent-gradient text-white font-bold text-lg hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] transition-all flex items-center justify-center space-x-2">
                <span>Get a Quote</span>
                <ArrowRight size={20} />
              </Link>
              <Link to="/services" className="w-full sm:w-auto px-10 py-4 rounded-full glass text-white font-bold text-lg hover:bg-white/10 transition-all border border-white/10">
                Explore Services
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }} 
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-slate-700 rounded-full flex justify-center p-1">
            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Services Preview Section */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gradient">Core Business Domains</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">Scalable solutions across multiple verticals, designed for long-term growth and reliability.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.slice(0, 3).map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <TiltCard className="glass h-full p-8 border border-white/5 group hover:border-blue-500/30 transition-all overflow-hidden">
                  <div className="relative z-10">
                    <div className="mb-6 p-4 w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center">
                      {SERVICE_ICONS[service.icon]}
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors">{service.title}</h3>
                    <p className="text-slate-400 mb-8 leading-relaxed">
                      {service.description}
                    </p>
                    <Link to="/services" className="flex items-center space-x-2 text-blue-400 font-semibold group/btn">
                      <span>Learn More</span>
                      <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-600/5 rounded-full blur-[40px]" />
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 accent-gradient opacity-10 blur-[100px]" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { icon: Trophy, label: 'Awards Won', value: '20+' },
            { icon: Briefcase, label: 'Projects Done', value: '1500+' },
            { icon: Users, label: 'Happy Clients', value: '1200+' },
            { icon: Building2Icon, label: 'Cities Present', value: '02' },
          ].map((stat, i) => (
            <div key={i} className="text-center group">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full glass mb-4 group-hover:scale-110 transition-transform">
                <stat.icon className="text-blue-400" size={24} />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-slate-400 text-sm uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.95 }}
            className="rounded-[3rem] p-12 md:p-20 relative overflow-hidden text-center glass border-blue-500/20"
          >
            <div className="absolute inset-0 bg-blue-600/5" />
            <h2 className="text-4xl md:text-6xl font-bold mb-8 relative z-10 text-white">Ready to start your next <br /> landmark project?</h2>
            <p className="text-slate-400 text-lg mb-12 relative z-10 max-w-2xl mx-auto">
              Whether it's a massive infrastructure build or a bespoke interior fit-out, Tiwari Brothers brings unmatched expertise and futuristic vision.
            </p>
            <Link to="/quote" className="relative z-10 inline-flex items-center space-x-3 px-10 py-5 rounded-full accent-gradient text-white font-bold text-xl hover:shadow-2xl transition-all">
              <span>Request a Custom Quote</span>
              <ArrowRight size={24} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

// Renamed to avoid conflicts
const Building2Icon = ({ className, size }: { className?: string, size?: number }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size || 24} 
    height={size || 24} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/>
    <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/>
    <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/>
    <path d="M10 6h4"/>
    <path d="M10 10h4"/>
    <path d="M10 14h4"/>
    <path d="M10 18h4"/>
  </svg>
);

export default Home;
