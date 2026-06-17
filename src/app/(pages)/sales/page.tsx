"use client";

import { useState } from "react";
import { motion } from "motion/react";

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: (i: number = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
    }),
};

const perks = [
    { title: "Custom contracts", description: "Flexible terms tailored to your organization's needs and procurement process." },
    { title: "Volume pricing", description: "Significant discounts for large teams. The more seats, the better the deal." },
    { title: "Advanced security", description: "SSO, audit logs, data residency, and compliance support built in." },
    { title: "Dedicated support", description: "A named success manager and priority SLA so you're never left waiting." },
];

export default function TalkToSalesPage() {
    const [submitted, setSubmitted] = useState(false);
    const [form, setForm] = useState({
        name: "", email: "", company: "", teamSize: "", message: "",
    });

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setSubmitted(true);
    }

    return (
        <main className="min-h-screen bg-white">
            {/* Hero */}
            <section className="pt-32 pb-20 px-6 max-w-5xl mx-auto">
                <motion.p
                    variants={fadeUp} initial="hidden" animate="show" custom={0}
                    className="text-sm font-medium tracking-widest text-gray-400 uppercase mb-6"
                >
                    Enterprise
                </motion.p>
                <motion.h1
                    variants={fadeUp} initial="hidden" animate="show" custom={1}
                    className="text-6xl md:text-7xl font-serif font-normal leading-tight text-gray-950 mb-8 max-w-3xl"
                >
                    Need something{" "}
                    <span className="italic">bigger?</span>
                </motion.h1>
                <motion.p
                    variants={fadeUp} initial="hidden" animate="show" custom={2}
                    className="text-lg text-gray-500 max-w-2xl leading-relaxed"
                >
                    Custom contracts, volume pricing, advanced security, and dedicated support for large organizations. Tell us about your team and we'll be in touch within one business day.
                </motion.p>
            </section>

            {/* Two column: perks + form */}
            <section className="px-6 pb-32 max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-start">

                {/* Perks */}
                <motion.div
                    variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={0}
                    className="space-y-6"
                >
                    {perks.map((perk, i) => (
                        <motion.div
                            key={perk.title}
                            variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={i}
                            className="border-b border-gray-100 pb-6 last:border-0 last:pb-0"
                        >
                            <h3 className="font-semibold text-gray-950 mb-1">{perk.title}</h3>
                            <p className="text-sm text-gray-500 leading-relaxed">{perk.description}</p>
                        </motion.div>
                    ))}

                    {/* Social proof */}
                    <motion.div
                        variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={4}
                        className="bg-gray-50 rounded-2xl p-6 mt-4"
                    >
                        <p className="text-sm text-gray-500 leading-relaxed italic mb-4">
                            "Notion Enterprise gave us the security controls we needed without slowing the team down. Rolled out to 800 people in a week."
                        </p>
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-gray-200" />
                            <div>
                                <p className="text-xs font-semibold text-gray-950">Sarah K.</p>
                                <p className="text-xs text-gray-400">Head of Ops, Acme Corp</p>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Form */}
                <motion.div
                    variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={1}
                    className="bg-gray-50 rounded-2xl p-8 md:p-10"
                >
                    {submitted ? (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                            className="text-center py-12"
                        >
                            <div className="w-12 h-12 rounded-full bg-gray-950 text-white flex items-center justify-center mx-auto mb-4 text-xl">✓</div>
                            <h3 className="text-2xl font-serif text-gray-950 mb-2">We'll be in touch</h3>
                            <p className="text-gray-400 text-sm">Expect a reply within one business day.</p>
                        </motion.div>
                    ) : (
                        <>
                            <h2 className="text-2xl font-serif text-gray-950 mb-8">Talk to sales</h2>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-xs font-medium text-gray-500 mb-2 uppercase tracking-wider">Name</label>
                                        <input
                                            type="text" required value={form.name}
                                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                                            placeholder="Your name"
                                            className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-950 placeholder-gray-300 focus:outline-none focus:border-gray-400 transition-colors"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-medium text-gray-500 mb-2 uppercase tracking-wider">Work email</label>
                                        <input
                                            type="email" required value={form.email}
                                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                                            placeholder="you@company.com"
                                            className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-950 placeholder-gray-300 focus:outline-none focus:border-gray-400 transition-colors"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs font-medium text-gray-500 mb-2 uppercase tracking-wider">Company</label>
                                    <input
                                        type="text" required value={form.company}
                                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                                        placeholder="Acme Corp"
                                        className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-950 placeholder-gray-300 focus:outline-none focus:border-gray-400 transition-colors"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-medium text-gray-500 mb-2 uppercase tracking-wider">Team size</label>
                                    <select
                                        required value={form.teamSize}
                                        onChange={(e) => setForm({ ...form, teamSize: e.target.value })}
                                        className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-950 focus:outline-none focus:border-gray-400 transition-colors appearance-none"
                                    >
                                        <option value="" disabled>Select a range</option>
                                        <option value="50-100">50 – 100</option>
                                        <option value="100-500">100 – 500</option>
                                        <option value="500-1000">500 – 1,000</option>
                                        <option value="1000+">1,000+</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-xs font-medium text-gray-500 mb-2 uppercase tracking-wider">What are you looking for?</label>
                                    <textarea
                                        rows={4} value={form.message}
                                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                                        placeholder="Tell us about your team's needs..."
                                        className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-950 placeholder-gray-300 focus:outline-none focus:border-gray-400 transition-colors resize-none"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-gray-950 text-white py-3 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors"
                                >
                                    Submit
                                </button>

                                <p className="text-xs text-gray-400 text-center">
                                    We'll never share your details with third parties.
                                </p>
                            </form>
                        </>
                    )}
                </motion.div>
            </section>
        </main>
    );
}