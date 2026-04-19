'use client';

import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { useInViewAnimation } from '@/hooks/useInViewAnimation';

export default function ContactSection() {
  const { ref, isInView } = useInViewAnimation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // EmailJS configuration - you'll need to replace these with your actual values
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'your_service_id';
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'your_template_id';
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'your_public_key';

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'zakobu4k@gmail.com', // Your email address
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Email send error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="px-6 py-20 sm:px-10 lg:px-20" ref={ref}>
      <div className="mx-auto max-w-6xl rounded-[2rem] border border-slate-700/60 bg-slate-900/80 p-10 shadow-soft sm:p-12">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div className={isInView ? 'animate-fade-in-left stagger-1' : 'opacity-0'}>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">Contact</p>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Ready to build scalable software solutions?</h2>
            <p className="mt-6 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
              Ready to discuss your software development and cloud infrastructure needs? I deliver comprehensive solutions from responsive frontends to scalable backends and automated deployment pipelines.
            </p>

              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Email</p>
                <p className="mt-1 text-sm text-slate-300">marvinamofa@hotmail.com</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Phone</p>
                <p className="mt-1 text-sm text-slate-300">+44 7466 983561</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Location</p>
                <p className="mt-1 text-sm text-slate-300">Manchester, UK</p>
              </div>
          </div>

          {/* Contact Form */}
          <div className={`rounded-[1.75rem] border border-slate-700/70 bg-slate-950/90 p-8 shadow-soft ${isInView ? 'animate-fade-in-right stagger-2' : 'opacity-0'}`}>
            <h3 className="text-lg font-semibold text-white mb-6">Send me a message</h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full rounded-lg border border-slate-700/60 bg-slate-800/50 px-3 py-2 text-sm text-slate-100 placeholder-slate-500 outline-none transition-all duration-300 focus:border-accent/70 focus:ring-2 focus:ring-accent/30 focus:bg-slate-800/70"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full rounded-lg border border-slate-700/60 bg-slate-800/50 px-3 py-2 text-sm text-slate-100 placeholder-slate-500 outline-none transition-all duration-300 focus:border-accent/70 focus:ring-2 focus:ring-accent/30 focus:bg-slate-800/70"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full rounded-lg border border-slate-700/60 bg-slate-800/50 px-3 py-2 text-sm text-slate-100 placeholder-slate-500 outline-none transition-all duration-300 focus:border-accent/70 focus:ring-2 focus:ring-accent/30 focus:bg-slate-800/70"
                  placeholder="Project inquiry, consultation, etc."
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full rounded-lg border border-slate-700/60 bg-slate-800/50 px-3 py-2 text-sm text-slate-100 placeholder-slate-500 outline-none transition-all duration-300 focus:border-accent/70 focus:ring-2 focus:ring-accent/30 focus:bg-slate-800/70 resize-none"
                  placeholder="Tell me about your project or requirements..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="group relative w-full overflow-hidden rounded-lg bg-gradient-to-r from-accent to-sky-400 px-6 py-3 text-sm font-semibold text-slate-950 transition-all duration-300 hover:from-sky-400 hover:to-cyan-400 hover:shadow-lg hover:shadow-accent/40 disabled:opacity-50 disabled:cursor-not-allowed active:scale-95"
              >
                <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative">
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </span>
              </button>

              {submitStatus === 'success' && (
                <div className="rounded-lg bg-green-500/10 border border-green-500/20 p-3">
                  <p className="text-sm text-green-400">Message sent successfully! I'll get back to you soon.</p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="rounded-lg bg-red-500/10 border border-red-500/20 p-3">
                  <p className="text-sm text-red-400">Failed to send message. Please try again or contact me directly.</p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
