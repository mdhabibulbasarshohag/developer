import { Link } from "react-router";

const CommonLink = ({ children, className, path }) => {
    return (
        <Link to={path} className={`text-quinary font-bold ${className}`}>{children}</Link>
    )
}

export default CommonLink;