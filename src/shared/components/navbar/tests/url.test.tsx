import { describe, test, expect } from "vitest"; //testear
import { render, screen } from "@testing-library/react"; //obtener funciones para javascript
import Url from "../components/url";

describe("Navbar-Url", () => {
  test("deberia mostrar el texto", () => {
    //parametros para el componente
    const text = "Inicio";

    render(<Url text={text} handleRedirect={() => {}} url="/Inicio" />);

    //buscar la imagen
    const etiquetaUrl = screen.getByRole("url");

    expect(etiquetaUrl.textContent).toEqual(text);
  });
});
