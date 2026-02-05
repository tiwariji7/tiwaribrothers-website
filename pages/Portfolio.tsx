
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '../constants';
import { ProjectCategory } from '../types';
import { Maximize2, ExternalLink } from 'lucide-react';

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState<ProjectCategory>('All');
  const categories: ProjectCategory[] = ['All', 'Infrastructure', 'Aluminium', 'Fabrication', 'Interiors'];

  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Our Portfolio</h1>
            <p className="text-slate-400 max-w-lg">A showcase of landmark projects across diverse industries.</p>
          </div>
          
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${filter === cat ? 'accent-gradient text-white shadow-lg' : 'glass text-slate-400 hover:text-white'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="group relative h-[400px] rounded-[2rem] overflow-hidden"
              >
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />
                
                <div className="absolute inset-0 flex flex-col justify-end p-10 translate-y-4 group-hover:translate-y-0 transition-transform">
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="px-3 py-1 rounded-full glass text-[10px] font-bold uppercase tracking-widest text-blue-400 border-blue-500/20">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity mb-6">
                    {project.description}
                  </p>
                  <div className="flex space-x-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="w-12 h-12 rounded-full glass flex items-center justify-center text-white hover:bg-blue-500 hover:border-transparent transition-all">
                      <Maximize2 size={20} />
                    </button>
                    <button className="w-12 h-12 rounded-full glass flex items-center justify-center text-white hover:bg-blue-500 hover:border-transparent transition-all">
                      <ExternalLink size={20} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default Portfolio;
