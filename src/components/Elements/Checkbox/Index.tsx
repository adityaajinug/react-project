
import { CheckboxType } from "@/types/input";

const Checkbox: React.FC<CheckboxType> = (props) => {
    const {name, id, type} = props
    return (
        <>
            <div className="flex gap-2 w-full">
                <input type={type} id={id} className="accent-webstyle-primary min-w-5 min-h-5" />
                <label htmlFor={id} className="text-webstyle-addon-black text-base font-medium flex justify-between items-center">
                    {name}
                </label>
            </div>
        </>
    )
}

export default Checkbox;