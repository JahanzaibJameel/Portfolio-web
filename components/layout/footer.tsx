'use client';

import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-12 px-4 max-w-7xl mx-auto">
      <div className="glass border border-white/10 rounded-2xl p-8 lg:p-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-4">Muhammad Jahanzaib</h3>
            <p className="text-gray-400 mb-4">
            Frontend Engineer building fast, scalable, and maintainable interfaces.
          </p>
            <div className="flex space-x-4">
              <a href="mailto:[NEED USER INPUT]" className="text-gray-400 hover:text-white transition-colors">
                <Mail size={20} />
              </a>
              <a href="tel:[NEED USER INPUT]" className="text-gray-400 hover:text-white transition-colors">
                <Phone size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#hero" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
              <li><a href="#skills" className="text-gray-400 hover:text-white transition-colors">Skills</a></li>
              <li><a href="#experience" className="text-gray-400 hover:text-white transition-colors">Experience</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-white transition-colors">Projects</a></li>
              <li><a href="#education" className="text-gray-400 hover:text-white transition-colors">Education</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="space-y-2 text-gray-400">
              <p className="flex items-center gap-2">
                <MapPin size={16} />
                Hyderabad, Sindh, Pakistan
              </p>
              <p><a href="mailto:m.jahanzaibjameel@gmail.com" className="hover:text-white transition-colors">
                m.jahanzaibjameel@gmail.com
              </a></p>
            </div>
          </div>
        </div>

        <motion.div
          className="mt-8 pt-8 border-t border-white/10 text-center text-gray-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p>&copy; {new Date().getFullYear()} Muhammad Jahanzaib. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}