const Description = ({ DescriptionText, className }) => {
    return (
        <p className={`text-xl font-normal ${className}`}    >
            {DescriptionText}
        </p>
    );
};

export default Description;