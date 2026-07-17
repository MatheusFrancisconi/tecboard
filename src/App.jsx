import "./App.css";
import { Banner } from "./components/Banner";
import { FormularioDeEvento } from "./components/FormularioDeEventos/FormularioDeEventos";
import { Tema } from "./components/Tema";

//props é um objeto
function App() {
  const temas = [
    { id: 1, nome: "front-end" },
    { id: 2, nome: "back-end" },
    { id: 3, nome: "devops" },
    { id: 4, nome: "inteligencia artifical" },
    { id: 5, nome: "data science" },
    { id: 6, nome: "cloud" },
  ];

  return (
    <main>
      <header>
        <img src="/logo.png" alt="" />
      </header>
      <Banner />
      <FormularioDeEvento />
      <section>
        <Tema tema={temas[0]} />
      </section>
      <section>
        <Tema tema={temas[1]} />
      </section>
      <section>
        <Tema tema={temas[2]} />
      </section>
      <section>
        <Tema tema={temas[3]} />
      </section>
      <section>
        <Tema tema={temas[4]} />
      </section>
      <section>
        <Tema tema={temas[5]} />
      </section>
    </main>
  );
}

export default App;
