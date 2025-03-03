const SubTitle = ({ className, children }) => {
    return (
        <h2 className={`text-3xl font-bold text-center text-quinary ${className}`}>
            {children}
        </h2>
    );
};

export default SubTitle;