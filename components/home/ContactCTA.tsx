"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import resumeData from "@/data/resume.json";
import homeData from "@/data/home.json";

const ContactCTA = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { email, phone, location } = resumeData.personalInfo;
  const { contactCTA } = homeData;

  return (
    <section className="py-24 bg-white dark:bg-black overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-full -z-10">
         <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px]" />
         <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-5xl mx-auto px-6">
        <div className="bg-primary rounded-[3rem] p-8 md:p-16 relative overflow-hidden text-primary-foreground">
          {/* Decorative shapes */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full translate-x-1/2 -translate-y-1/2 blur-2xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full -translate-x-1/2 translate-y-1/2 blur-2xl" />

          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight"
                dangerouslySetInnerHTML={{ __html: contactCTA.title }}
              />

              <div className="space-y-6">
                <a href={`mailto:${email}`} className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm opacity-70">Mail Me</p>
                    <p className="text-lg font-bold">{email}</p>
                  </div>
                </a>
                <a href={`tel:${phone.replace(/\s/g, '')}`} className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm opacity-70">Call Me</p>
                    <p className="text-lg font-bold">{phone}</p>
                  </div>
                </a>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm opacity-70">Based In</p>
                    <p className="text-lg font-bold">{location}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-2xl min-h-[400px] flex flex-col justify-center">
              {!isSubmitted ? (
                <form
                  className="space-y-4"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setIsSubmitting(true);
                    setTimeout(() => {
                      setIsSubmitting(false);
                      setIsSubmitted(true);
                    }, 1500);
                  }}
                >
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-zinc-900">Name</label>
                      <input required type="text" className="w-full px-4 py-3 rounded-xl bg-zinc-100 border-transparent focus:bg-white focus:border-primary focus:ring-0 transition-all text-zinc-900" placeholder="Your Name" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-zinc-900">Email</label>
                      <input required type="email" className="w-full px-4 py-3 rounded-xl bg-zinc-100 border-transparent focus:bg-white focus:border-primary focus:ring-0 transition-all text-zinc-900" placeholder="Your Email" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-zinc-900">Message</label>
                    <textarea required rows={4} className="w-full px-4 py-3 rounded-xl bg-zinc-100 border-transparent focus:bg-white focus:border-primary focus:ring-0 transition-all text-zinc-900 resize-none" placeholder="How can I help you?" />
                  </div>
                  <button
                    disabled={isSubmitting}
                    type="submit"
                    className="w-full py-4 rounded-xl bg-primary text-white font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-50"
                  >
                    {isSubmitting ? "Sending..." : contactCTA.cta} <Send className="w-5 h-5" />
                  </button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center space-y-4"
                >
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-zinc-900">Message Sent!</h3>
                  <p className="text-zinc-600">Thank you for reaching out. I&apos;ll get back to you as soon as possible.</p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-primary font-medium hover:underline pt-4"
                  >
                    Send another message
                  </button>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
