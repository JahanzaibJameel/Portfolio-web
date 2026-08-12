'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="glass border border-white/10 rounded-2xl p-8 lg:p-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Get In Touch</h2>
            <p className="text-gray-400 mb-8 max-w-2xl">
              I&apos;m always interested in new opportunities and collaborations. Let&apos;s chat about how I can help bring your ideas to life.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-gray-400" />
                <span>m.jahanzaibjameel@gmail.com</span>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-gray-400" />
                <span>Available for remote work</span>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="w-5 h-5 text-gray-400" />
                <span>Remote</span>
              </div>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5 }}
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <p className="text-green-400 font-medium">Thank you! Your message has been sent.</p>
                </motion.div>
              ) : (
                <>
                  <input
                    type="text"
                    placeholder="Your Name"
                    required
                    className="w-full rounded-full bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    required
                    className="w-full rounded-full bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                  />
                  <textarea
                    placeholder="Your Message"
                    rows={4}
                    required
                    className="w-full rounded-2xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 resize-none"
                  />
                  <button
                    type="submit"
                    className="w-full rounded-full bg-gradient-to-r from-blue-500 to-purple-600 py-3 font-medium text-white hover:scale-105 transition-transform"
                  >
                    Send Message
                  </button>
                </>
              )}
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
}