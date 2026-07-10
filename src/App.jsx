import "./App.css";
import { FormularioDeEvento } from "./components/FormularioDeEventos/FormularioDeEventos";

//props é um objeto
function App() {
  return (
    <main>
      <header>
        <img src="/logo.png" alt="" />
      </header>
      <section>
        <img src="/banner.png" alt="" />
      </section>
      <FormularioDeEvento />
    </main>
  );
}

export default App;
