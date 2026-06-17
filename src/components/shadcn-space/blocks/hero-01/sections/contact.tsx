"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";


const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: (i: number = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
    }),
};

const contactOptions = [
    {
        icon: (
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
        ),
        title: "Email support",
        description: "Get a response within 24 hours.",
        action: "support@notion.so",
    },
    {
        icon: (
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z" />
            </svg>
        ),
        title: "Live chat",
        description: "Available Monday–Friday, 9am–6pm PT.",
        action: "Start a chat →",
    },
    {
        icon: (
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0118 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>
        ),
        title: "Help center",
        description: "Browse guides, tutorials, and FAQs.",
        action: "Visit help center →",
    },
];

export default function ContactSection() {
    const [submitted, setSubmitted] = useState(false);
    const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setSubmitted(true);
    }

    return (
        <section className="min-h-screen bg-white py-24 scroll-mt-20">
            <div className="px-6 text-center max-w-3xl mx-auto mb-16">
                <motion.p variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={0}
                    className="text-sm font-medium tracking-widest text-gray-400 uppercase mb-6">
                    Get in touch
                </motion.p>
                <motion.h2 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={1}
                    className="text-5xl md:text-6xl font-serif font-normal leading-tight text-gray-950 mb-6">
                    We&apos;d love to{" "}
                    <span className="italic">hear from you</span>
                </motion.h2>
                <motion.p variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={2}
                    className="text-lg text-gray-500 leading-relaxed">
                    Questions, feedback, or just want to say hello — reach out and we&apos;ll get back to you as soon as we can.
                </motion.p>
            </div>

            <div className="px-6 pb-16 max-w-5xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {contactOptions.map((opt, i) => (
                        <motion.div key={opt.title}
                            variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={i}
                            className="border border-gray-100 rounded-2xl p-6 hover:border-gray-200 hover:shadow-sm transition-all duration-200">
                            <div className="w-9 h-9 rounded-lg bg-gray-950 text-white flex items-center justify-center mb-4">
                                {opt.icon}
                            </div>
                            <h3 className="font-semibold text-gray-950 mb-1">{opt.title}</h3>
                            <p className="text-sm text-gray-400 mb-3">{opt.description}</p>
                            <p className="text-sm font-medium text-gray-950">{opt.action}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
                className="px-6 max-w-2xl mx-auto">
                <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
                    {submitted ? (
                        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                            className="text-center py-8">
                            <div className="w-12 h-12 rounded-full bg-gray-950 text-white flex items-center justify-center mx-auto mb-4 text-xl">✓</div>
                            <h3 className="text-2xl font-serif text-gray-950 mb-2">Message sent</h3>
                            <p className="text-gray-500 text-sm">We&apos;ll get back to you within 24 hours.</p>
                        </motion.div>
                    ) : (
                        <>
                            <h3 className="text-2xl font-serif text-gray-950 mb-8">Send us a message</h3>
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-xs font-medium text-gray-500 mb-2 uppercase tracking-wider">Name</label>
                                        <input type="text" required value={form.name}
                                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                                            placeholder="Your name"
                                            className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-950 placeholder-gray-300 focus:outline-none focus:border-gray-400 transition-colors" />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-medium text-gray-500 mb-2 uppercase tracking-wider">Email</label>
                                        <input type="email" required value={form.email}
                                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                                            placeholder="you@example.com"
                                            className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-950 placeholder-gray-300 focus:outline-none focus:border-gray-400 transition-colors" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-xs font-medium text-gray-500 mb-2 uppercase tracking-wider">Subject</label>
                                    <input type="text" required value={form.subject}
                                        onChange={(e) => setForm({ ...form, subject: e.target.value })}
                                        placeholder="What's this about?"
                                        className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-950 placeholder-gray-300 focus:outline-none focus:border-gray-400 transition-colors" />
                                </div>
                                <div>
                                    <label className="block text-xs font-medium text-gray-500 mb-2 uppercase tracking-wider">Message</label>
                                    <textarea required rows={5} value={form.message}
                                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                                        placeholder="Tell us what's on your mind..."
                                        className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-950 placeholder-gray-300 focus:outline-none focus:border-gray-400 transition-colors resize-none" />
                                </div>
                                <Button className="relative text-sm font-medium rounded-full h-12 p-1 ps-6 pe-14 group transition-all duration-500 hover:ps-14 hover:pe-6 w-fit overflow-hidden cursor-pointer">
                                    <span className="relative z-10 transition-all duration-500">
                                        Send message
                                    </span>
                                    <span className="absolute right-1 w-10 h-10 bg-background text-foreground rounded-full flex items-center justify-center transition-all duration-500 group-hover:right-[calc(100%-44px)] group-hover:rotate-45">
                                        <ArrowUpRight size={16} />
                                    </span>
                                </Button>
                            </form>
                        </>
                    )}
                </div>
            </motion.div>
        </section>
    );
}