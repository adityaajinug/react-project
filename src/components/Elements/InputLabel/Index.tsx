import Input from "../Input/Index";
import Label from "../Label/Index";

const InputLabel: React.FC = () => {
    return (
        <>
        <div className="flex gap-2 flex-col w-full">
            <Label />
            <Input />
        </div>
        </>
    )
}

export default InputLabel;