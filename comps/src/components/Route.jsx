/* eslint-disable react/prop-types */
import { useContext } from "react";
import NavigationContext  from "../context/navigation";

export default function Route({ path, children }) {

  const { currentPath } = useContext(NavigationContext);

  return currentPath === path ? children : null;
  
}