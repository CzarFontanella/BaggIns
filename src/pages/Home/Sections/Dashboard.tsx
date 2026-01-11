import AnualBarChart from "../../../components/Home/AnualBarChart";

export default function Dashboard() {
  return (
    <section>
      <div className="flex flex-row gap-6">
        <div>
          <AnualBarChart />
        </div>

        <div className="flex flex-col gap-6 justify-between">
          <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-2 flex flex-col items-center justify-center text-center">
            <h2 className="text-md font-semibold text-white mb-1">Receitas</h2>
            <p className="text-lg text-lime-400 whitespace-nowrap">
              $12,345.67
            </p>
          </div>

          <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-2 flex flex-col items-center justify-center text-center">
            <h2 className="text-md font-semibold text-white mb-1">Despesas</h2>
            <p className="text-lg text-red-400 whitespace-nowrap">$1,234.56</p>
          </div>

          <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-2 flex flex-col items-center justify-center text-center">
            <h2 className="text-md font-semibold text-white mb-1">Saldo</h2>
            <p className="text-lg text-green-400 whitespace-nowrap">
              $3,456.78
            </p>
          </div>

          <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-2 flex flex-col items-center justify-center text-center">
            <h2 className="text-md font-semibold text-white mb-1">
              Crescimento
            </h2>
            <p className="text-lg text-blue-400 whitespace-nowrap">25%</p>
          </div>
        </div>
      </div>
    </section>
  );
}
