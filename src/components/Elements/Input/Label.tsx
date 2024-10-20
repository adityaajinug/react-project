import { LabelType } from "@/types/input";
import { Link } from "react-router-dom";

const Label: React.FC<LabelType> = (props) => {
    const { labelName, idFor, optionalLink } = props;
    return (
        <>
        <label htmlFor={idFor} className="text-webstyle-addon-black text-base font-medium flex justify-between items-center">{labelName}
        <Link to={optionalLink?.href} className="text-webstyle-primary font-semibold text-xs hover:text-webstyle-secondary">{optionalLink?.text}</Link>
        </label>
        
        </>
    )
}

export default Label;