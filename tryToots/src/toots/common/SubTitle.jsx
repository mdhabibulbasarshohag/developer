

export const SubTitle = ({ children, className }) => {
    return (
        <h2 className={`text-5xl font-bold ${className}`}>
            {children}
        </h2>
    );
};
