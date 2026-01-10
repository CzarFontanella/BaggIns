import UnsignedHome from "./UnsignedHome";
import UserHome from "./UserHome";

export default function Home() {
  return (
    // Renderização adaptativa baseada em autenticação do usuário
    <>{false ? <UserHome /> : <UnsignedHome />}</>
  );
}