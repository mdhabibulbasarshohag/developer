

const CommonButton = ({ className, children, type, onClick }) => {
    return (
        <button onClick={onClick} type={type} className={`bg-tertiary text-primary font-bold py-2 px-4 rounded ${className}`}>
            {children}
        </button>
    );
};

export default CommonButton;