import AccentLine from "../../components/App/AccentLine";
import FeatureCard from "../../components/Home/FeatureCard";
import { CreditCard, BarChart2, Target, ShieldCheck } from "lucide-react";

const featureList = [
  {
    id: "expenses",
    icon: CreditCard,
    title: "Monitorar Gastos",
    desc: "Categorize e acompanhe todos os seus gastos em tempo real!",
  },
  {
    id: "analytics",
    icon: BarChart2,
    title: "Análises Detalhadas",
    desc: "Relatórios visuais para entender com precisão seus hábitos de gasto!",
  },
  {
    id: "goals",
    icon: Target,
    title: "Metas Financeiras",
    desc: "Defina e acompanhe objetivos de economia de forma prátia e eficaz!",
  },
  {
    id: "security",
    icon: ShieldCheck,
    title: "Segurança",
    desc: "Seus dados são protegidos com as mais recentes tecnologias de segurança.",
  },
];

export default function UnsignedHome() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative max-w-7xl mx-auto px-6 lg:px-8 pb-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
          {/* Glow decorativo de fundo */}
          <div
            className="pointer-events-none absolute -z-10 h-screen w-screen"
            style={{
              background:
                "radial-gradient(ellipse 1000px 500px at 50% 200px, rgba(52,216,30,0.15), transparent 60%)",
            }}
            aria-hidden="true"
          />
          <div className="space-y-8 pt-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                Controle suas{" "}
                <span className="bg-gradient-to-r from-lime-500 to-green-800 bg-clip-text text-transparent">
                  finanças
                </span>{" "}
                de forma inteligente!
              </h1>
              <p className="text-justify text-xl text-slate-300 leading-relaxed">
                Gerencie seu dinheiro de forma inteligente. Acompanhe gastos,
                crie orçamentos e alcance suas metas financeiras com uma
                plataforma simples e poderosa.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#00ac0e] hover:bg-[#34d81e] text-white px-8 py-4 rounded-lg font-semibold text-lg transition transform hover:scale-105">
                Começar Gratuitamente
              </button>
            </div>
            <div className="flex gap-8 pt-8 text-slate-400 text-sm">
              <div>✓ Sem cartão de crédito</div>
              <div>✓ Configuração rápida e segura</div>
            </div>
          </div>
          <div className="hidden lg:flex justify-center">
            <div className="relative w-full h-96 bg-gray-950 rounded-2xl border border-slate-700 flex items-center justify-center z-10">
              <div className="text-center text-slate-400">
                <div className="text-6xl mb-4">📊</div>
                <p>Espaço reservado para Imagem do Dashboard</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AccentLine />

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Recursos Poderosos
          </h2>
          <p className="text-xl text-slate-400">
            Tudo que você precisa para gerenciar suas finanças efetivamente
          </p>
        </div>
        <div className="grid md:grid-cols-4 gap-8">
          {featureList.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>
      </section>
    </>
  );
}
