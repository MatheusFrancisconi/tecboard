import "./formulario-de-eventos.estilos.css";
import { CampoDeEntrada } from "../CampoDeEntrada/CampoDeEntrada";
import { CampoDeFormulario } from "../CampoDeFormulario/CampoDeFormulario";
import { Label } from "../Label/Label";
import { TituloFormulario } from "../TituloFormulario/TituloFormulario";

export function FormularioDeEvento() {
  return (
    <form className="form-evento">
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
          <Label htmlFor="dataEvento">Data do evento</Label>
          <CampoDeEntrada type="date" id="datEvento" name="dataEvento" />
        </CampoDeFormulario>
      </div>
    </form>
  );
}
