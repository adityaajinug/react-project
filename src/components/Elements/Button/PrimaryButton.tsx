import { ButtonType } from "@/types/button";

const PrimaryButton: React.FC<ButtonType> = (props) => {
  const { type, name, id, disabled } = props;
  
  return (
    <button
      type={type}
      id={id}
      disabled={disabled}
      className={`py-3 w-full rounded-md text-white font-semibold transition-transform duration-150 ${
        disabled
          ? "bg-gray-400 cursor-not-allowed"
          : "bg-webstyle-primary active:scale-95"
      }`}
    >
      {name}
    </button>
  );
};

export default PrimaryButton;
