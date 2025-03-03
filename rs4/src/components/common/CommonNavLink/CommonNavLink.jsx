import { NavLink } from "react-router";

const CommonNavLink = ({ path, className, isActiveCss, isNotActiveCss, children }) => {
    return (
        <NavLink
            to={path}
            className={({ isActive }) =>
                `${className} ${isActive ? `text-quinary font-bold border-2 border-tertiary bg-primary ${isActiveCss} ` : `text-tertiary font-bold border-2 border-transparent ${isNotActiveCss}`}`
            }
        >
            {children}
        </NavLink>
    );
};

export default CommonNavLink;
