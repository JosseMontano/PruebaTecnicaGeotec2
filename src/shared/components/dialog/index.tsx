import {
  Dialog as DialogComponent,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

interface Params {
  //functions
  openModal: boolean;
  handleOpen: (fact?: string) => void;
  //values
  title:string;
  description: string;

}

const Dialog = ({ openModal, description, handleOpen, title }: Params) => {
  return (
    <DialogComponent open={openModal} size={"md"} handler={handleOpen} placeholder={""}>
      <DialogHeader placeholder={""}>{title}</DialogHeader>
      <DialogBody placeholder={""}>{description}</DialogBody>
      <DialogFooter placeholder={""}>
        <button onClick={() => handleOpen()} className="mr-1">
          <span>Cerrar</span>
        </button>
      </DialogFooter>
    </DialogComponent>
  );
};

export default Dialog;
