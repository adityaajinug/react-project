export interface ButtonType {
    name: string;
    id?: string;
    type: "button" | "submit" | "reset";
    img?: string;
    disabled?: any;
}