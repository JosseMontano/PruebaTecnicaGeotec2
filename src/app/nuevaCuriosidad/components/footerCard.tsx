//icons
import { FaRegSave, FaRegCopy } from "react-icons/fa";
import { IoReload } from "react-icons/io5";

type FooterCardProps = {
  colorIcon: "text-gray-800 cursor-pointer" | "text-gray-100";
  handleGuardarLocalStorage: () => void;
  handleCopyText: () => Promise<void>;
  handleLoadOtheCat: ()=>void;
};

export const FooterCard = ({
  colorIcon,
  handleGuardarLocalStorage,
  handleCopyText,
  handleLoadOtheCat
}: FooterCardProps) => (
  <div className="relative bottom-10 rounded-md flex justify-evenly gap-3 border-t-2 border-gray-800">
    <div className="absolute left-1/3 border-r-2 border-gray-800 h-full"></div>
    <div className="absolute left-2/3 border-r-2 border-gray-800 h-full"></div>
    <FaRegSave
      size={38}
      className={colorIcon}
      onClick={handleGuardarLocalStorage}
    />
    <IoReload size={38} className={colorIcon} onClick={handleLoadOtheCat} />
    <FaRegCopy size={38} className={colorIcon} onClick={handleCopyText} />
  </div>
);
