import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, Upload, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Quote: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Infrastructure & Construction',
    budget: '₹50k - ₹5L',
    description: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const message = `
📩 *New Custom Quote Request*

👤 Name: ${formData.name}
📞 Mobile: ${formData.phone}
📧 Email: ${formData.email}

🛠 Service: ${formData.service}
💰 Budget: ${formData.budget}

📝 Project Details:
${formData.description}
    `;

    const whatsappURL = `https://wa.me/919889240590?text=${encodeURIComponent(
      message
    )}`;

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      window.open(whatsappURL, '_blank');
    }, 800);
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-24 pb-12 px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-xl w-full text-center glass p-16 rounded-[3rem] border-blue-500/30"
        >
          <div className="w-24 h-24 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle size={48} />
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">Request Sent</h2>
          <p className="text-slate-400 text-lg mb-10">
            Your project details have been shared with our team. We’ll connect with you shortly.
          </p>
          <Link
            to="/"
            className="inline-flex items-center space-x-2 text-blue-400 font-bold hover:underline"
          >
            <ArrowLeft size={18} />
            <span>Return to Homepage</span>
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Get a Custom Quote
          </h1>
          <p className="text-slate-400 text-lg">
            Tell us about your project vision, and let's build something exceptional together.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass p-8 md:p-12 rounded-[2.5rem] border-white/5"
        >
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">

            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-300 ml-1">Full Name</label>
              <input
                required
                type="text"
                placeholder="John Doe"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-slate-900/50 border border-slate-800 rounded-xl px-5 py-4 text-white"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-300 ml-1">Mobile Number</label>
              <input
                required
                type="tel"
                placeholder="+91 00000 00000"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full bg-slate-900/50 border border-slate-800 rounded-xl px-5 py-4 text-white"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-300 ml-1">Email Address</label>
              <input
                required
                type="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-slate-900/50 border border-slate-800 rounded-xl px-5 py-4 text-white"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-300 ml-1">Service Type</label>
              <select
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full bg-slate-900/50 border border-slate-800 rounded-xl px-5 py-4 text-white"
              >
                <option>Infrastructure & Construction</option>
                <option>Aluminium & Glass Works</option>
                <option>Fabrication Works</option>
                <option>Interior & Exterior</option>
                <option>Others</option>
              </select>
            </div>

            <div className="md:col-span-2 space-y-2">
              <label className="text-sm font-semibold text-slate-300 ml-1">Project Description</label>
              <textarea
                required
                rows={4}
                placeholder="Briefly describe your requirements..."
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full bg-slate-900/50 border border-slate-800 rounded-xl px-5 py-4 text-white resize-none"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-300 ml-1">Budget Range</label>
              <select
                value={formData.budget}
                onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                className="w-full bg-slate-900/50 border border-slate-800 rounded-xl px-5 py-4 text-white"
              >
                <option>₹50k - ₹5L</option>
                <option>₹5L - ₹20L</option>
                <option>₹20L - ₹50L</option>
                <option>₹50L - ₹1Cr</option>
                <option>Above ₹1Cr</option>
              </select>
            </div>

            <div className="md:col-span-2 pt-6">
              <button
                disabled={loading}
                className="w-full accent-gradient py-5 rounded-2xl text-white font-bold text-lg flex items-center justify-center space-x-3"
              >
                {loading ? (
                  <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    <span>Request a Custom Quote</span>
                    <Send size={20} />
                  </>
                )}
              </button>
            </div>

          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Quote;
