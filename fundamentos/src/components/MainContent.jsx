import SideBar from "./SideBar";
import Article from "./Article";

const MainContent = () => {
  function horario() {
    const hora = new Date().getHours();

    if (hora < 12) return "Bom dia";
    else if (hora > 12 && hora < 18) return "Boa tarde! Hora :" + hora;
    else return "Boa noite!";
  }

  return (
    <main>
      <div>
        <h1>Meu Componente Main!</h1>
        <p>A soma de cinquenta mais trezentos e cinquenta é : {50 + 350}</p>
        <h2>{horario()}</h2>
      </div>
      <Article />
      <SideBar />
    </main>
  );
};
export default MainContent;
