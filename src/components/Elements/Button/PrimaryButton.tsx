import { ButtonType } from "@/types/button";

const PrimaryButton: React.FC<ButtonType> = (props) => {
  const { type, name, id, disabled } = props;
  
  return (
    <button
      type={type}
      id={id}
      disabled={disabled}
      className={`py-3 w-full rounded-md text-white font-semibold ${
        disabled ? "bg-gray-400 cursor-not-allowed" : "bg-webstyle-primary"
      }`}
    >
      {name}
    </button>
  );
};

export default PrimaryButton;
