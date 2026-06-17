"use client";

import { motion } from "framer-motion";
import ButtonWithIconDemo from "@/components/shadcn-space/button/button-01";

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: (i: number = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
    }),
};

export default function FeaturesPage() {
    const features = [
        {
            icon: (
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                </svg>
            ),
            title: "Docs & Notes",
            description: "Write anything — from quick notes to full documentation. Rich text, embeds, code blocks, and more in one beautiful editor.",
        },
        {
            icon: (
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                </svg>
            ),
            title: "Projects & Tasks",
            description: "Manage work with boards, lists, calendars, and timelines. Every view, one source of truth.",
        },
        {
            icon: (
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                </svg>
            ),
            title: "Databases",
            description: "Build powerful databases with custom properties, relations, and rollups. Filter and sort any way you like.",
        },
        {
            icon: (
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                </svg>
            ),
            title: "Team Collaboration",
            description: "Comment, mention, and work together in real time. Permissions and sharing that keep everyone in sync.",
        },
        {
            icon: (
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            ),
            title: "Automations",
            description: "Automate repetitive work with triggers and actions. Connect your tools and let Notion handle the rest.",
        },
        {
            icon: (
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3" />
                </svg>
            ),
            title: "AI Assistant",
            description: "Write, edit, summarize, and brainstorm with AI built right into your workspace — no switching tabs.",
        },
    ];

    return (
        <main className="min-h-screen bg-white">
            {/* Hero */}
            <section className="pt-32 pb-20 px-6 text-center max-w-4xl mx-auto">
                <motion.p
                    variants={fadeUp} initial="hidden" animate="show" custom={0}
                    className="text-sm font-medium tracking-widest text-gray-400 uppercase mb-6"
                >
                    What we offer
                </motion.p>
                <motion.h1
                    variants={fadeUp} initial="hidden" animate="show" custom={1}
                    className="text-6xl md:text-7xl font-serif font-normal leading-tight text-gray-950 mb-6"
                >
                    Everything you need,{" "}
                    <span className="italic">nothing you don&apos;t</span>
                </motion.h1>
                <motion.p
                    variants={fadeUp} initial="hidden" animate="show" custom={2}
                    className="text-lg text-gray-500 max-w-xl mx-auto leading-relaxed"
                >
                    Notion brings together your docs, tasks, and databases into one flexible workspace that grows with your team.
                </motion.p>
            </section>

            {/* Features Grid */}
            <section className="px-6 pb-32 max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-100 border border-gray-100 rounded-2xl overflow-hidden">
                    {features.map((feature, i) => (
                        <motion.div
                            key={feature.title}
                            variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }} custom={i}
                            className="bg-white p-8 hover:bg-gray-50 transition-colors duration-200 group"
                        >
                            <div className="w-10 h-10 rounded-xl bg-gray-950 text-white flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-200">
                                {feature.icon}
                            </div>
                            <h3 className="text-lg font-semibold text-gray-950 mb-3">{feature.title}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* CTA Banner */}
            <motion.section
                variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
                className="px-6 pb-32 max-w-6xl mx-auto"
            >
                <div className="bg-gray-950 rounded-2xl px-10 py-16 text-center">
                    <h2 className="text-4xl md:text-5xl font-serif text-white mb-4">
                        Start building your workspace
                    </h2>
                    <p className="text-gray-400 mb-8 max-w-md mx-auto">Free to start. No credit card required.</p>
                    <ButtonWithIconDemo title="Get started" />
                </div>
            </motion.section>
        </main>
    );
}