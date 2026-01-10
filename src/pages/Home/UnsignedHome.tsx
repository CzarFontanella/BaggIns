import AccentLine from "../../components/App/AccentLine";
import FeatureCard from "../../components/Home/FeatureCard";
import { CreditCard, BarChart2, Target, ShieldCheck } from "lucide-react";

const featureList = [
  {
    icon: CreditCard,
    title: "Monitorar Gastos",
    desc: "Categorize e acompanhe todos os seus gastos em tempo real!",
  },
  {
    icon: BarChart2,
    title: "Análises Detalhadas",
    desc: "Relatórios visuais para entender com precisão seus hábitos de gasto!",
  },
  {
    icon: Target,
    title: "Metas Financeiras",
    desc: "Defina e acompanhe objetivos de economia de forma prátia e eficaz!",
  },
  {
    icon: ShieldCheck,
    title: "Segurança",
    desc: "Seus dados são protegidos com as mais recentes tecnologias de segurança.",
  },
];

export default function UnsignedHome() {
  return (
    <>
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                Controle suas{" "}
                <span className="bg-gradient-to-r from-[#34d81e] to-[#00ac0e] bg-clip-text text-transparent">
                  finanças
                </span>{" "}
                de forma inteligente!
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Gerencie seu dinheiro inteligentemente. Acompanhe gastos, crie
                orçamentos e alcance suas metas financeiras com uma plataforma
                simples e poderosa.
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
            <div
              className="relative w-full h-96 rounded-2xl border border-slate-700 flex items-center justify-center"
              style={{
                background:
                  "linear-gradient(135deg, rgba(3,7,18,0.02), rgba(52,216,30,0.06))",
              }}
            >
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
          {featureList.map((feature, idx) => (
            <FeatureCard key={idx} feature={feature} />
          ))}
        </div>
      </section>
    </>
  );
}
