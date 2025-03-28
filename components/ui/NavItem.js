import Link from "next/link";
import classNames from "classnames";
import styles from "./Navbar.module.css";
const NavItem = ({ title, link, isActive }) => {
  return (
    <li
      className={classNames(styles.navbarLinks, {
        [styles.isLinkActive]: isActive,
      })}
    >
      <Link href={link}>
        <b>{title.split(" ")[0]}</b> {title.slice(title.indexOf(" ") + 1)}
      </Link>
    </li>
  );
};

export default NavItem;
