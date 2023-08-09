/* eslint-disable react/prop-types */
import classNames from "classnames";
import useNavigation from "../hooks/use-navigation";

export default function Link({ to, children, className, activeClassName }) {
  const { navigate, currentPath } = useNavigation();

  const classes = classNames('text-blue-500', 
  className,
  currentPath === to && activeClassName,
  );

  const handleClick = (e) => {
    if (event.metaKey || event.ctrlKey) {
      return;
    }
    e.preventDefault();
    navigate(to)
  }

  return <a className={classes} href={to} onClick={handleClick}>{children}</a>

}