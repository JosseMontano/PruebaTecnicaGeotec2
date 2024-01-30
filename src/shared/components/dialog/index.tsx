import {
  Dialog as DialogComponent,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { useLanguage } from "../../context/useLanguage";

interface Params {
  //functions
  openModal: boolean;
  handleOpen: (fact?: string) => void;
  handleCopyText: () => void;
  //values
  title: string;
  description: string;
  copiarPortapepelesClass?:string
}

const Dialog = ({
  openModal,
  description,
  handleOpen,
  title,
  handleCopyText,
  copiarPortapepelesClass
}: Params) => {
  const {words} = useLanguage()
  return (
    <DialogComponent
      open={openModal}
      size={"md"}
      handler={handleOpen}
      placeholder={""}
     
    >
      <DialogHeader placeholder={""}>{title}</DialogHeader>
      <DialogBody placeholder={""}>{description}</DialogBody>
      <DialogFooter placeholder={""}>
        <button onClick={() => handleCopyText()} className={`mr-1 ${copiarPortapepelesClass}`}>
          <span>{words.DialogCopy}</span>
        </button>

        <button onClick={() => handleOpen()} className="mr-1">
          <span>{words.DialogClose}</span>
        </button>
      </DialogFooter>
    </DialogComponent>
  );
};

export default Dialog;
