export interface LabelType {
    labelName: string;
    idFor: string;
    optionalLink?: {
        href: any,
        text: string
    };
}

export interface InputType {
    name: string;
    type: string;
    id: string;
    placeholder: string;
}

export interface CheckboxType {
    name: string;
    id: string;
    type: string;
}