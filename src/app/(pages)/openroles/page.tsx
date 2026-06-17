"use client";

import { motion } from "motion/react";

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: (i: number = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
    }),
};

export default function CareersPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero */}
            <section className="pt-32 pb-20 px-6 max-w-5xl mx-auto">
                <motion.p
                    variants={fadeUp} initial="hidden" animate="show" custom={0}
                    className="text-sm font-medium tracking-widest text-gray-400 uppercase mb-6"
                >
                    Careers
                </motion.p>
                <motion.h1
                    variants={fadeUp} initial="hidden" animate="show" custom={1}
                    className="text-6xl md:text-7xl font-serif font-normal leading-tight text-gray-950 mb-8 max-w-3xl"
                >
                    Come build with{" "}
                    <span className="italic">us</span>
                </motion.h1>
                <motion.p
                    variants={fadeUp} initial="hidden" animate="show" custom={2}
                    className="text-lg text-gray-500 max-w-2xl leading-relaxed"
                >
                    We're always looking for people who care deeply about craft, simplicity, and building tools that actually help people work better.
                </motion.p>
            </section>

            {/* No roles state */}
            <motion.section
                variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
                className="px-6 pb-32 max-w-5xl mx-auto"
            >
                <div className="border border-gray-100 rounded-2xl px-10 py-24 flex flex-col items-center text-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-2">
                        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" className="text-gray-400">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0" />
                        </svg>
                    </div>
                    <h2 className="text-2xl font-serif text-gray-950">No open roles right now</h2>
                    <p className="text-gray-400 text-sm max-w-sm leading-relaxed">
                        We don't have any positions open at the moment, but we're always growing. Check back soon or leave your email and we'll reach out when something comes up.
                    </p>

                    <div className="flex items-center gap-2 mt-4 w-full max-w-sm">
                        <input
                            type="email"
                            placeholder="you@example.com"
                            className="flex-1 bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-950 placeholder-gray-300 focus:outline-none focus:border-gray-400 transition-colors"
                        />
                        <button className="bg-gray-950 text-white px-5 py-3 rounded-xl text-sm font-medium hover:bg-gray-800 transition-colors whitespace-nowrap">
                            Notify me
                        </button>
                    </div>
                </div>
            </motion.section>

            {/* Values reminder */}
            <motion.section
                variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
                className="px-6 pb-32 max-w-5xl mx-auto grid md:grid-cols-3 gap-4"
            >
                {[
                    { title: "Craft first", description: "We sweat the details others skip. Every pixel and every line of code matters." },
                    { title: "Small team, big impact", description: "We stay lean on purpose. Fewer people, more ownership, faster decisions." },
                    { title: "Remote & async", description: "Work from wherever you do your best thinking. We don't care about hours — we care about outcomes." },
                ].map((item, i) => (
                    <motion.div
                        key={item.title}
                        variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={i}
                        className="bg-gray-50 rounded-2xl p-8"
                    >
                        <h3 className="font-semibold text-gray-950 mb-2">{item.title}</h3>
                        <p className="text-sm text-gray-500 leading-relaxed">{item.description}</p>
                    </motion.div>
                ))}
            </motion.section>
        </main>
    );
}