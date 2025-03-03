




export const Button = ({ buttonText, className }) => {
    return (
        <button className={`bg-amber-400 py-5 px-10 rounded-md  mx-auto ${className}`}>
            {buttonText}
        </button>
    );
};


export const Container = ({ children }) => {
    return (
        <div className="container mx-auto lg:px-0 px-3">
            {children}
        </div>
    );
};
