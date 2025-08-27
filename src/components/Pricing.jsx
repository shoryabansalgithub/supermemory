import React from "react";
import { motion } from "framer-motion";

const Check = (props) => (
	<svg
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		aria-hidden="true"
		className={props.className || "w-5 h-5"}
	>
		<path
			d="M20 6L9 17l-5-5"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
);

const Card = ({ featured, badge, title, price, cadence, blurb, features, cta }) => (
	<motion.div
		initial={{ opacity: 0, y: 24 }}
		whileInView={{ opacity: 1, y: 0 }}
		viewport={{ once: true, amount: 0.2 }}
		transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
		className={[
			"relative isolate flex flex-col rounded-2xl border bg-white/[0.035] border-white/10 text-white overflow-hidden backdrop-blur-[2px]",
			featured
				? "shadow-[0_24px_80px_rgba(0,0,0,0.35)] ring-1 ring-inset ring-white/10"
				: "shadow-[0_10px_35px_rgba(0,0,0,0.28)]",
		].join(" ")}
	>
		{featured && (
			<>
				<div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#1e3cff1a] via-[#2d6bff12] to-transparent" />
				<div className="pointer-events-none absolute -top-1/3 left-1/2 -translate-x-1/2 w-[160%] h-[70%] bg-[radial-gradient(60%_60%_at_50%_50%,rgba(45,107,255,0.45),rgba(45,107,255,0)_70%)] blur-3xl opacity-80" />
			</>
		)}

		<div className="pointer-events-none absolute inset-0 z-20">
			<div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
			{featured && (
				<div
					className="absolute -inset-px rounded-[18px]"
					style={{ boxShadow: "0 0 0 1.5px rgba(45,107,255,0.35), 0 30px 140px rgba(45,107,255,0.2)" }}
				/>
			)}
		</div>

		<div className="relative z-10 p-6 md:p-7 lg:p-8">
			{badge && (
				<div
					className={[
						"inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium mb-4",
						featured
							? "bg-[#2d6bff]/15 text-white border border-white/10"
							: "bg-white/[0.06] text-white/90 border border-white/10",
					].join(" ")}
				>
					{badge}
				</div>
			)}
			<h3 className="text-2xl font-semibold tracking-tight">{title}</h3>
			<div className="mt-3 flex items-baseline gap-2">
				<span className="text-4xl md:text-5xl font-extrabold">{price}</span>
				{cadence && <span className="text-white/70">{cadence}</span>}
			</div>
			{blurb && <p className="mt-3 text-white/75 leading-6">{blurb}</p>}
			<ul className="mt-6 space-y-3 text-white/90">
				{features.map((f, i) => (
					<li key={i} className="flex items-start gap-3">
						<span className="mt-0.5 text-emerald-400/90">
							<Check className="w-5 h-5" />
						</span>
						<span className="leading-6">{f}</span>
					</li>
				))}
			</ul>
		</div>

		<div className="relative z-10 px-6 md:px-7 lg:px-8 pb-6 md:pb-7 lg:pb-8 mt-auto">
			<button
				className={[
					"w-full inline-flex items-center justify-center rounded-xl px-4 py-3 text-sm font-semibold transition-all",
					featured
						? "bg-white text-gray-900 hover:opacity-95 shadow-[0_10px_30px_rgba(255,255,255,0.08)]"
						: "bg-white/10 hover:bg-white/15 border border-white/10 text-white",
				].join(" ")}
				aria-label={cta}
			>
				{cta}
			</button>
		</div>
	</motion.div>
);

const Pricing = () => {
	const plans = [
		{
			title: "Free",
			price: "$0",
			cadence: "/month",
			blurb: "For getting started and trying Supermemory.",
			features: ["Up to 1,000 memories", "Basic search", "Standard connectors", "Community support"],
			cta: "Get started",
			featured: false,
		},
		{
			title: "Pro",
			price: "$9",
			cadence: "/month, billed monthly",
			blurb: "For power users who need more.",
			features: ["Unlimited memories", "Unlimited connections", "Advanced search", "Priority support"],
			cta: "Upgrade to Pro",
			featured: true,
			badge: "Most Popular",
		},
		{
			title: "Custom",
			price: "Let's talk",
			blurb: "For teams with custom token limits, SLAs, and security needs.",
			features: ["SAML/SSO & SCIM", "Dedicated support", "Custom limits", "Security review"],
			cta: "Contact Sales",
			featured: false,
		},
	];

	return (
		<section id="pricing" className="relative w-full px-6 md:px-10 py-16 md:py-24 text-white">
			<div className="max-w-6xl mx-auto">
				<div className="text-center mb-10 md:mb-14">
					<h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">Pricing</h2>
					<p className="mt-3 text-white/80 max-w-2xl mx-auto">Choose a plan that grows with you. Cancel anytime.</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-7 lg:gap-8 items-stretch">
					{plans.map((p, i) => (
						<Card key={i} {...p} />
					))}
				</div>
			</div>
		</section>
	);
};

export default Pricing;
