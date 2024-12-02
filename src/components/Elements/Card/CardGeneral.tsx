interface CardGeneralProps {
    children: React.ReactNode,
    title?: string
}

const CardGeneral:React.FC<CardGeneralProps> = (props) => {
    const {children, title} = props;
    return (
        <>  
            <h1 className="text-3xl font-normal">{title}</h1>
            <div className="shadow-xl bg-white rounded-md py-5 px-6">
                {children}
            </div>
        </>
    )
}

export default CardGeneral;