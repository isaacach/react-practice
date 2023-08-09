/* eslint-disable react/prop-types */
import useNavigation from "../hooks/use-navigation";

export default function Route({ path, children }) {

  const { currentPath } = useNavigation();

  return currentPath === path ? children : null;
  
}