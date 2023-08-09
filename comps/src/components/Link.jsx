/* eslint-disable react/prop-types */
import classNames from "classnames";
import { useContext } from "react";
import  NavigationContext  from "../context/navigation";

export default function Link({ to, children }) {
  const { navigate } = useContext(NavigationContext);

  const classes = classNames('text-blue-500 hover:underline');

  const handleClick = (e) => {
    if (event.metaKey || event.ctrlKey) {
      return;
    }
    e.preventDefault();
    navigate(to)
  }

  return <a className={classes} href={to} onClick={handleClick}>{children}</a>

}