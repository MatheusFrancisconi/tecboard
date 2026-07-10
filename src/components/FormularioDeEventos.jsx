import { CampoDeEntrada } from "./CampoDeEntrada";
import { CampoDeFormulario } from "./CampoDeFormulario";
import { Label } from "./Label";
import { TituloFormulario } from "./TituloFormulario";

export function FormularioDeEvento() {
  return (
    <form className="form-evento">
      <TituloFormulario>Ola</TituloFormulario>
      <CampoDeFormulario>
        <Label htmlFor="nome">Qual o nome do evento?</Label>
        <CampoDeEntrada
          type="text"
          id="nome"
          placeholder="Summer dev hits"
          name="nome"
        />
      </CampoDeFormulario>
    </form>
  );
}
