"use client";

import { motion } from "motion/react";
import ButtonWithIconDemo from "@/components/shadcn-space/button/button-01";

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: (i: number = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
    }),
};

const stats = [
    { value: "4M+", label: "Users worldwide" },
    { value: "150+", label: "Countries" },
    { value: "2016", label: "Founded" },
    { value: "1000+", label: "Team members" },
];

const values = [
    { title: "Clarity over complexity", description: "We believe software should get out of your way. Every feature we ship is a bet that simplicity scales better than power." },
    { title: "Built for humans", description: "Your workspace should feel like yours. We design for adaptability so Notion works the way you think, not the other way around." },
    { title: "Long-term thinking", description: "We're building a company we'd want to use ourselves — one that makes thoughtful tradeoffs and earns trust over time." },
];

export default function AboutSection() {
    return (
        <section className="min-h-screen bg-white py-24 scroll-mt-20">
            <div className="px-6 max-w-5xl mx-auto mb-16">
                <motion.p variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={0}
                    className="text-sm font-medium tracking-widest text-gray-400 uppercase mb-6">
                    Our story
                </motion.p>
                <motion.h2 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={1}
                    className="text-5xl md:text-6xl font-serif font-normal leading-tight text-gray-950 mb-8 max-w-3xl">
                    We&apos;re rethinking{" "}
                    <span className="italic">how work gets done</span>
                </motion.h2>
                <motion.p variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={2}
                    className="text-lg text-gray-500 max-w-2xl leading-relaxed">
                    Notion started with a simple frustration: why do we need five different apps to do one job? We set out to build the tool we always wanted — and ended up building it for millions of others too.
                </motion.p>
            </div>

            <div className="px-6 pb-16 max-w-5xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-gray-100 border border-gray-100 rounded-2xl overflow-hidden">
                    {stats.map((stat, i) => (
                        <motion.div key={stat.label}
                            variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={i}
                            className="bg-white px-8 py-10 text-center">
                            <p className="text-5xl font-serif text-gray-950 mb-2">{stat.value}</p>
                            <p className="text-sm text-gray-400">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            <div className="px-6 pb-16 max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={0}>
                    <p className="text-sm font-medium tracking-widest text-gray-400 uppercase mb-4">Our mission</p>
                    <h3 className="text-4xl font-serif text-gray-950 leading-snug mb-6">
                        There is no one right way to organize your work.
                    </h3>
                    <p className="text-gray-500 leading-relaxed">
                        We&apos;re building a tool that adapts to people, not the other way around. Whether you&apos;re a solo writer or a 500-person engineering team, Notion gives you the building blocks to create the system that actually fits.
                    </p>
                </motion.div>
                <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={1}
                    className="bg-gray-50 rounded-2xl p-10 space-y-6">
                    {values.map((v) => (
                        <div key={v.title} className="border-b border-gray-100 pb-6 last:border-0 last:pb-0">
                            <h4 className="font-semibold text-gray-950 mb-2">{v.title}</h4>
                            <p className="text-sm text-gray-500 leading-relaxed">{v.description}</p>
                        </div>
                    ))}
                </motion.div>
            </div>

            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
                className="px-6 max-w-5xl mx-auto">
                <div className="border border-gray-100 rounded-2xl px-10 py-14 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div>
                        <h3 className="text-3xl font-serif text-gray-950 mb-2">Want to join us?</h3>
                        <p className="text-gray-500 text-sm">We&apos;re always looking for people who care deeply about craft.</p>
                    </div>
                    <ButtonWithIconDemo title="See open roles" />
                </div>
            </motion.div>
        </section>
    );
}