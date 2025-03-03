

const Button = ({ children, className, onClick }) => {
    return (
        <button
            onClick={onClick}
            className={`py-4 px-8 bg-blue-400 rounded-lg cursor-pointer ${className}`}
        >
            {children}
        </button>
    )
}

export default Button
