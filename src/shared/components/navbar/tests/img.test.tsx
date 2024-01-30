import { describe, test, expect } from "vitest"; //testear
import { render, screen } from "@testing-library/react"; //obtener funciones para javascript
import ImgComponent from "../components/img";
import Img from "../assets/cats.jpg";

describe("Navbar-Img", () => {
  test("deberia mostrar la imagen", () => {
    render(<ImgComponent imgCat={Img} />);

    //buscar la imagen
    const img = screen.getByRole("Imagen-nav");
    expect(img).toBeDefined();
  });
});
