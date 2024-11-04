
interface LogoType {
    className?: string;
}
const Logo: React.FC<LogoType> = (props) => {
    const { className = 'text-webstyle-primary' } = props;
    return (
        <>
        <h1 className={`${className} font-poppins text-base xl:text-4xl font-extrabold text-center`}>
            FINE
            <span className="font-medium font-poppins">bank.</span>
            IO
        </h1>
        </>
    )
}
export default Logo;