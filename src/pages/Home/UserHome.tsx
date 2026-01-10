export default function UserHome() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)] p-8">
      <h1 className="text-4xl font-bold mb-4">Olá, Usuário!</h1>
      <p className="text-lg text-gray-400">
        Aqui estão suas últimas transações e saldo atual.
      </p>
    </section>
  );
}
