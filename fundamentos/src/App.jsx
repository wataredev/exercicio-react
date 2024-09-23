import "./App.css";
import Cabeça from "./components/Header";
import Meio from "./components/MainContent";
import Pe from "./components/Footer";
import DadosUsuario from './components/DadosUsuario';
import {
  ClickButton,
  KeyDownComponent,
  InputField,
  FocusBlurComponent,
  MouseNaDiv,
} from "./components/Events";

const usuario = {
  nome: 'João',
  idade: 20,
  profissao: 'Desenvolvedor'
};

function App() {
  return (
    <>
      <DadosUsuario
        nome={usuario.nome}
        idade={usuario.idade}
        profissao={usuario.profissao}
      />
    </>
  );
}

export default App;
