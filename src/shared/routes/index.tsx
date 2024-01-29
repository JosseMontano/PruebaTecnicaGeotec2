import { ReactElement } from "react";
import Navbar from "../../shared/components/navbar";

interface Params {
  children: ReactElement;
  position?: boolean;
}

const Index = ({ children, position = true }: Params) => {
  return (
    <>
      <Navbar />
      <div className={position ? "relative top-20" : ""}>{children}</div>
    </>
  );
};

export default Index;
