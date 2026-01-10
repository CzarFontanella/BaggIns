export default function About() {
  return (
    <div className="py-8 px-16 text-slate-300">
      <h1 className="text-4xl text-white font-bold mb-4">Sobre o BaggIns</h1>
      <p className="text-lg mb-4">
        O BaggIns é uma plataforma de gerenciamento financeiro pessoal
        desenvolvida para auxiliar usuários no controle e na organização de suas
        finanças de forma simples, eficiente e intuitiva.
      </p>
      <p className="text-lg mb-4">
        Criado por <span className="font-semibold text-lime-500">César F. Fontanella</span>, o
        BaggIns surgiu com o propósito de consolidar habilidades avançadas de
        desenvolvimento de software por meio da criação de uma solução completa,
        funcional e aplicada a um contexto real. A plataforma tem como objetivo
        apoiar a tomada de decisões financeiras mais conscientes, incentivando a
        responsabilidade e bem-estar econômico.
      </p>
      <h2 className="text-2xl font-semibold text-white mb-3">Recursos Principais</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Acompanhamento de despesas e receitas em tempo real.</li>
        <li>Relatórios detalhados para análise financeira.</li>
        <li>Metas financeiras para ajudar você a economizar e investir.</li>
        <li>Interface amigável e fácil de usar.</li>
      </ul>
      <h2 className="text-2xl font-semibold text-white mb-3">Contato</h2>
      <p className="text-lg">
        Se você tiver alguma dúvida ou sugestão, não hesite em entrar em contato
        comigo através do{" "}
        <a
          href="https://github.com/CzarFontanella"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-300"
        >
          GitHub (@CzarFontanella)
        </a>
        .
      </p>
    </div>
  );
}
