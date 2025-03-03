

export const CommonButton = ({
  tag: Tag = "button",
  children,
  sizeValue = "primary",
  to,
  className = "",
  onClick,
  ...props
}) => {

  if ((Tag === "NavLink" || Tag === "Link") && !to) {
    console.error("The 'to' prop is required when using 'NavLink' or 'Link'.");
    return null;
  }


  if (Tag === "button") {
    return (
      <button className={`${className}`} onClick={onClick} {...props}>
        {children}
      </button>
    )
  }


  if (Tag === "NavLink") {
    return (
      <NavLink className={{ active: `${sizeValue}` }}`${className}`} to={to} {...props}>
        {children}
      </NavLink>
    )
  }


  if (Tag === "Link") {
    return (
      <Link className={`${className}`} to={to} {...props}>
        {children}
      </Link>
    )
  }


  return (
    <Tag className={`${className}`} {...props}>{children}</Tag>
  )
}
