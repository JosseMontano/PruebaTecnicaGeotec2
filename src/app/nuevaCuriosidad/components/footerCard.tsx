//icons
import { FaRegSave, FaRegCopy } from "react-icons/fa";

type FooterCardProps = {
  colorIcon: "text-gray-800 cursor-pointer" | "text-gray-100";
  handleGuardarLocalStorage: () => void;
  handleCopyText: () => Promise<void>;
};

export const FooterCard = ({
  colorIcon,
  handleGuardarLocalStorage,
  handleCopyText,
}: FooterCardProps) => (
  <div className="relative bottom-10 rounded-md flex justify-evenly gap-3 border-t-2 border-gray-800">
    <div className="absolute left-1/2 border-r-2 border-gray-800 h-full"></div>
    <FaRegSave
      size={38}
      className={colorIcon}
      onClick={handleGuardarLocalStorage}
    />
    <FaRegCopy size={38} className={colorIcon} onClick={handleCopyText} />
  </div>
);
