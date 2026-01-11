import UnsignedHome from "./UnsignedHome";
import UserHome from "./UserHome";

export default function Home() {
  const testHome = true; // Simulação de estado de autenticação do usuário
  return (
    // Renderização adaptativa baseada em autenticação do usuário
    <>{testHome ? <UserHome /> : <UnsignedHome />}</>
  );
}