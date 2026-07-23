import "./formulario-de-eventos.estilos.css";
import { CampoDeEntrada } from "../CampoDeEntrada/CampoDeEntrada";
import { CampoDeFormulario } from "../CampoDeFormulario/CampoDeFormulario";
import { Label } from "../Label/Label";
import { TituloFormulario } from "../TituloFormulario/TituloFormulario";
import { Botao } from "../Botao";
import { ListaSuspensa } from "../ListaSuspensa";

export function FormularioDeEvento({ temas }) {
  function formSubmtido(formData) {
    console.log("deu certo!", formData);
    const evento = {
      capa: formData.get("capa"),
      tema: temas.find(function (item) {
        return item.id == formData.get("tema");
      }),
      data: new Date(formData.get("dataEvento")),
      titulo: formData.get("nomeEvento"),
    };
    console.log("esse é o evento: ", evento);
  }

  return (
    <form className="form-evento" action={formSubmtido}>
      <TituloFormulario>Preencha para criar um evento:</TituloFormulario>
      <div className="campos">
        <CampoDeFormulario>
          <Label htmlFor="nomeEvento">Qual o nome do evento?</Label>
          <CampoDeEntrada
            type="text"
            id="nomeEvento"
            placeholder="Summer dev hits"
            name="nomeEvento"
          />
        </CampoDeFormulario>

        <CampoDeFormulario>
          <Label htmlFor="nomeEvento">Qual a URL do evento?</Label>
          <CampoDeEntrada
            type="text"
            id="capa"
            placeholder="https://..."
            name="capa"
          />
        </CampoDeFormulario>

        <CampoDeFormulario>
          <Label htmlFor="dataEvento">Data do evento</Label>
          <CampoDeEntrada type="date" id="datEvento" name="dataEvento" />
        </CampoDeFormulario>

        <CampoDeFormulario>
          <Label htmlFor="temaEvento">Tema do Evento</Label>
          <ListaSuspensa id="tema" name="tema" itens={temas} />
        </CampoDeFormulario>
      </div>
      <div className="acoes">
        <Botao>Criar evento</Botao>
      </div>
    </form>
  );
}
