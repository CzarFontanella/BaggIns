import React, { useMemo, useState } from "react";

type MonthData = {
  month: string;
  receitas: number;
  despesas: number;
  saldo: number;
};

type KPIKey = "receitas" | "despesas" | "saldo";

type TooltipState = {
  visible: boolean;
  x: number;
  y: number;
  label: string;
  value: number;
};

const data: MonthData[] = [
  { month: "Jan", receitas: 12345, despesas: 8230, saldo: 4115 },
  { month: "Fev", receitas: 10400, despesas: 9200, saldo: 1200 },
  { month: "Mar", receitas: 15000, despesas: 9800, saldo: 5200 },
  { month: "Abr", receitas: 13800, despesas: 10200, saldo: 3600 },
  { month: "Mai", receitas: 16200, despesas: 11500, saldo: 4700 },
  { month: "Jun", receitas: 12000, despesas: 9800, saldo: 2200 },
  { month: "Jul", receitas: 14100, despesas: 10100, saldo: 4000 },
  { month: "Ago", receitas: 15500, despesas: 11200, saldo: 4300 },
  { month: "Set", receitas: 12900, despesas: 10400, saldo: 2500 },
  { month: "Out", receitas: 14300, despesas: 9700, saldo: 4600 },
  { month: "Nov", receitas: 15000, despesas: 10000, saldo: 5000 },
  { month: "Dez", receitas: 17000, despesas: 12500, saldo: 4500 },
];

const formatBRL = (value: number): string =>
  new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);

function niceRoundUp(value: number): number {
  if (value <= 0) return 0;
  const exp = Math.floor(Math.log10(value));
  const base = 10 ** exp;
  const scaled = value / base;
  let nice: number;
  if (scaled <= 1) nice = 1;
  else if (scaled <= 2) nice = 2;
  else if (scaled <= 5) nice = 5;
  else nice = 10;
  return nice * base;
}

const KPI_LABEL: Record<KPIKey, string> = {
  receitas: "Receitas",
  despesas: "Despesas",
  saldo: "Saldo",
};

export default function AnualBarChart() {
  const rawMax = useMemo(
    () => Math.max(...data.flatMap((d) => [d.receitas, d.despesas, d.saldo])),
    []
  );

  const maxValue = useMemo(() => niceRoundUp(rawMax), [rawMax]);

  const toPercent = (value: number): number => {
    if (maxValue === 0) return 0;
    return (value / maxValue) * 100;
  };

  const yTicks: number[] = useMemo(
    () => [1, 0.75, 0.5, 0.25, 0].map((p) => Math.round(maxValue * p)),
    [maxValue]
  );

  const [tooltip, setTooltip] = useState<TooltipState>({
    visible: false,
    x: 0,
    y: 0,
    label: "",
    value: 0,
  });

  const showTooltip = (
    e: React.MouseEvent<HTMLDivElement>,
    month: string,
    key: KPIKey,
    value: number
  ) => {
    setTooltip({
      visible: true,
      x: e.clientX,
      y: e.clientY,
      label: `${KPI_LABEL[key]} (${month})`,
      value,
    });
  };

  const moveTooltip = (e: React.MouseEvent<HTMLDivElement>) => {
    setTooltip((prev) =>
      prev.visible ? { ...prev, x: e.clientX, y: e.clientY } : prev
    );
  };

  const hideTooltip = () => {
    setTooltip((prev) => ({ ...prev, visible: false }));
  };

  return (
    <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 relative">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-white">
          Indicadores Financeiros por Mês
        </h2>
        <p className="text-sm text-slate-400 mt-1">
          Passe o mouse nas barras para ver o valor.
        </p>
      </div>

      <div className="flex">
        {/* Eixo Y */}
        <div className="flex flex-col justify-between h-64 pr-3 text-xs text-slate-400 select-none">
          {yTicks.map((v) => (
            <span key={v}>{formatBRL(v)}</span>
          ))}
        </div>

        {/* Área do gráfico */}
        <div className="flex-1 overflow-x-auto">
          <div className="h-64 flex items-end gap-2">
            {data.map((item) => (
              <div
                key={item.month}
                className="flex flex-col items-center gap-2 min-w-[60px]"
              >
                {/* Plot area */}
                <div className="flex items-end gap-1 h-52">
                  {/* Receitas */}
                  <div
                    className="w-3 bg-green-400 rounded-t cursor-default"
                    style={{ height: `${toPercent(item.receitas)}%` }}
                    onMouseEnter={(e) =>
                      showTooltip(e, item.month, "receitas", item.receitas)
                    }
                    onMouseMove={moveTooltip}
                    onMouseLeave={hideTooltip}
                  />

                  {/* Despesas */}
                  <div
                    className="w-3 bg-red-400 rounded-t cursor-default"
                    style={{ height: `${toPercent(item.despesas)}%` }}
                    onMouseEnter={(e) =>
                      showTooltip(e, item.month, "despesas", item.despesas)
                    }
                    onMouseMove={moveTooltip}
                    onMouseLeave={hideTooltip}
                  />

                  {/* Saldo */}
                  <div
                    className="w-3 bg-blue-400 rounded-t cursor-default"
                    style={{ height: `${toPercent(item.saldo)}%` }}
                    onMouseEnter={(e) =>
                      showTooltip(e, item.month, "saldo", item.saldo)
                    }
                    onMouseMove={moveTooltip}
                    onMouseLeave={hideTooltip}
                  />
                </div>

                {/* Eixo X */}
                <span className="text-xs text-slate-400 select-none">
                  {item.month}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Legenda */}
      <div className="flex flex-wrap gap-6 mt-6 text-sm">
        <div className="flex items-center gap-2 text-slate-300">
          <span className="w-3 h-3 bg-green-400 rounded-sm" />
          Receitas
        </div>
        <div className="flex items-center gap-2 text-slate-300">
          <span className="w-3 h-3 bg-red-400 rounded-sm" />
          Despesas
        </div>
        <div className="flex items-center gap-2 text-slate-300">
          <span className="w-3 h-3 bg-blue-400 rounded-sm" />
          Saldo
        </div>
      </div>

      {/* Tooltip (fixed para não sofrer com overflow) */}
      {tooltip.visible && (
        <div
          className="fixed z-50 pointer-events-none"
          style={{ left: tooltip.x + 12, top: tooltip.y + 12 }}
        >
          <div className="bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 shadow-lg">
            <div className="text-xs text-slate-300">{tooltip.label}</div>
            <div className="text-sm font-semibold text-white">
              {formatBRL(tooltip.value)}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
