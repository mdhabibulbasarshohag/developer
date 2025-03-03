const TertiaryTitle = ({ className, children }) => {
    return (
        <h4 className={`text-xl font-semibold text-quinary ${className}`}>
            {children}
        </h4>
    )
}

export default TertiaryTitle