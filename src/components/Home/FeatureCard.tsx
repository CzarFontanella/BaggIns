import type { LucideIcon } from "lucide-react";

type Feature = { icon: LucideIcon; title: string; desc: string };

interface Props {
  feature: Feature;
}

export default function FeatureCard({ feature }: Props) {
  const Icon = feature.icon;
  const accent = "from-lime-500 to-green-800";
  return (
    <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8 hover:border-lime-500 hover:bg-slate-800/80 transition justify-items-center text-center">
      <div
        className={`inline-flex w-fit h-fit items-center justify-center rounded-xl ring-1 ring-white/10 bg-gradient-to-r ${accent} p-2 sm:p-3 md:p-4 mb-4`}
      >
        <Icon
          className="w-8 h-8 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
          strokeWidth={1.75}
        />
        <span className="sr-only">{feature.title}</span>
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
      <p className="text-slate-400">{feature.desc}</p>
    </div>
  );
}
