

const Title = ({ className, children }) => {
    return (
        <h1 className={`text-5xl font-bold text-center text-quinary ${className}`}>
            {children}
        </h1>
    );
};

export default Title;