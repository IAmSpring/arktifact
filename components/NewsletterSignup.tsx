'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '../utils/animations';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });

      if (!response.ok) throw new Error('Signup failed');
      
      setStatus('success');
      setEmail('');
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section className="py-24 bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <motion.h2 
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-cinzel font-bold mb-8"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Join the Journey
            </span>
          </motion.h2>
          
          <motion.p 
            variants={fadeInUp}
            className="text-lg text-gray-300 mb-12"
          >
            Subscribe to receive exclusive updates, early access to NFT drops, and special content from Arktifact Chronicles.
          </motion.p>
          
          <motion.form 
            variants={fadeInUp}
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-full bg-gray-700 border border-gray-600 focus:border-purple-500 focus:outline-none text-white"
              required
            />
            <button 
              type="submit"
              disabled={status === 'loading'}
              className="btn-primary whitespace-nowrap"
            >
              {status === 'loading' ? 'Signing up...' : 'Sign Up'}
            </button>
          </motion.form>
          
          {status === 'success' && (
            <motion.p 
              variants={fadeInUp}
              className="mt-4 text-green-400"
            >
              Thank you for subscribing!
            </motion.p>
          )}
          
          {status === 'error' && (
            <motion.p 
              variants={fadeInUp}
              className="mt-4 text-red-400"
            >
              Something went wrong. Please try again.
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default NewsletterSignup; 