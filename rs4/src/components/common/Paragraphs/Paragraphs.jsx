const Paragraphs = ({ className, children }) => {
    return (
        <p className={`text-quinary font-primary text-base ${className}`}>
            {children}
        </p>
    )
}

export default Paragraphs