"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { useRouter } from "next/navigation";


const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: (i: number = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
    }),
};

const plans = [
    {
        name: "Free", monthlyPrice: 0, yearlyPrice: 0,
        description: "For personal use and small projects.",
        cta: "Get started free", featured: false,
        features: ["Unlimited pages & blocks", "Share with 5 guests", "Sync across devices", "7-day page history", "Basic integrations"],
    },
    {
        name: "Plus", monthlyPrice: 10, yearlyPrice: 8,
        description: "For individuals who want unlimited power.",
        cta: "Start free trial", featured: true,
        features: ["Everything in Free", "Unlimited file uploads", "30-day page history", "Custom domains", "Priority support", "Advanced integrations"],
    },
    {
        name: "Business", monthlyPrice: 18, yearlyPrice: 15,
        description: "For teams that need more control and security.",
        cta: "Start free trial", featured: false,
        features: ["Everything in Plus", "Unlimited page history", "Advanced permissions", "SAML SSO", "Audit log", "Admin tools", "Dedicated success manager"],
    },
];

const faqs = [
    { q: "Can I switch plans at any time?", a: "Yes. Upgrades take effect immediately. Downgrades apply at the end of your billing cycle." },
    { q: "Is there a free trial?", a: "Paid plans come with a 7-day free trial. No credit card needed to start." },
    { q: "What happens to my data if I downgrade?", a: "Your pages are safe. You may lose access to features, but nothing is deleted." },
    { q: "Do you offer discounts for students or nonprofits?", a: "Yes — students and eligible nonprofits get Notion Plus free. Apply on our website." },
];

export default function PricingSection() {
    const [yearly, setYearly] = useState(true);
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const router = useRouter();

    return (
        <section className="min-h-screen bg-white py-24 scroll-mt-20">
            <div className="px-6 text-center max-w-3xl mx-auto mb-12">
                <motion.p variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={0}
                    className="text-sm font-medium tracking-widest text-gray-400 uppercase mb-6">
                    Pricing
                </motion.p>
                <motion.h2 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={1}
                    className="text-5xl md:text-6xl font-serif font-normal leading-tight text-gray-950 mb-6">
                    Simple pricing,{" "}
                    <span className="italic">zero surprises</span>
                </motion.h2>
                <motion.p variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={2}
                    className="text-lg text-gray-500 leading-relaxed mb-10">
                    Start free. Upgrade when you need more. Cancel anytime.
                </motion.p>

                <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={3}
                    className="inline-flex items-center gap-3 bg-gray-100 rounded-full p-1">
                    <button onClick={() => setYearly(false)}
                        className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${!yearly ? "bg-white text-gray-950 shadow-sm" : "text-gray-400"}`}>
                        Monthly
                    </button>
                    <button onClick={() => setYearly(true)}
                        className={`px-5 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${yearly ? "bg-white text-gray-950 shadow-sm" : "text-gray-400"}`}>
                        Yearly
                        <span className="text-xs bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full font-semibold">Save 20%</span>
                    </button>
                </motion.div>
            </div>

            <div className="px-6 pb-16 max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {plans.map((plan, i) => (
                        <motion.div key={plan.name}
                            variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={i}
                            className={`rounded-2xl p-8 flex flex-col ${plan.featured ? "bg-gray-950 text-white" : "bg-white border border-gray-100"}`}>
                            <div className="mb-6">
                                <p className="text-sm font-semibold mb-4 text-gray-400">{plan.name}</p>
                                <div className="flex items-end gap-1 mb-2">
                                    <motion.span key={`${plan.name}-${yearly}`}
                                        initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.25, ease: "easeOut" }}
                                        className="text-5xl font-serif">
                                        ${yearly ? plan.yearlyPrice : plan.monthlyPrice}
                                    </motion.span>
                                    <span className="text-sm mb-2 text-gray-400">/mo</span>
                                </div>
                                <p className={`text-sm leading-relaxed ${plan.featured ? "text-gray-400" : "text-gray-500"}`}>
                                    {plan.description}
                                </p>
                            </div>
                            <button className={`w-full py-3 rounded-full text-sm font-medium mb-8 transition-colors ${plan.featured ? "bg-white text-gray-950 hover:bg-gray-100" : "bg-gray-950 text-white hover:bg-gray-800"}`}>
                                {plan.cta}
                            </button>
                            <ul className="space-y-3 mt-auto">
                                {plan.features.map((f) => (
                                    <li key={f} className="flex items-start gap-2.5 text-sm">
                                        <svg className={`w-4 h-4 mt-0.5 flex-shrink-0 ${plan.featured ? "text-white" : "text-gray-950"}`}
                                            fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                        </svg>
                                        <span className={plan.featured ? "text-gray-300" : "text-gray-600"}>{f}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>

            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
                className="px-6 pb-16 max-w-6xl mx-auto">
                <div className="border border-gray-100 rounded-2xl px-10 py-12 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div>
                        <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-2">Enterprise</p>
                        <h3 className="text-3xl font-serif text-gray-950 mb-2">Need something bigger?</h3>
                        <p className="text-gray-500 text-sm max-w-md">
                            Custom contracts, volume pricing, advanced security, and dedicated support for large organizations.
                        </p>
                    </div>
                    <Button onClick={() => router.push("/sales")} className="relative text-sm font-medium rounded-full h-12 p-1 ps-6 pe-14 group transition-all duration-500 hover:ps-14 hover:pe-6 w-fit overflow-hidden cursor-pointer">
                        <span className="relative z-10 transition-all duration-500">
                            Talk to sales
                        </span>
                        <span className="absolute right-1 w-10 h-10 bg-background text-foreground rounded-full flex items-center justify-center transition-all duration-500 group-hover:right-[calc(100%-44px)] group-hover:rotate-45">
                            <ArrowUpRight size={16} />
                        </span>
                    </Button>
                </div>
            </motion.div>

            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
                className="px-6 pb-8 max-w-3xl mx-auto">
                <h3 className="text-3xl font-serif text-gray-950 mb-10 text-center">Common questions</h3>
                <div className="divide-y divide-gray-100">
                    {faqs.map((faq, i) => (
                        <div key={faq.q} className="py-5">
                            <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                className="w-full flex items-center justify-between text-left gap-4">
                                <span className="font-medium text-gray-950 text-sm">{faq.q}</span>
                                <motion.span animate={{ rotate: openFaq === i ? 45 : 0 }} transition={{ duration: 0.2 }}
                                    className="text-gray-400 flex-shrink-0 text-lg leading-none">
                                    +
                                </motion.span>
                            </button>
                            <AnimatePresence initial={false}>
                                {openFaq === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                                        className="overflow-hidden">
                                        <p className="mt-3 text-sm text-gray-500 leading-relaxed pr-8">{faq.a}</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}