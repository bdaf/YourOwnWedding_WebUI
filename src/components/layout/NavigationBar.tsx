import { Link } from "react-router-dom";

import styles from "./NavigationBar.module.css";
import { SE_OFFERS } from "../../constants";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChurch } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import WindowSizeContext from "../store/window-size-context";

function NavigationBar() {
  const windowSizeCtx = useContext(WindowSizeContext);

  return (
    <header className={styles.header}>
      <Link to={"/"}>
        <div className={styles.logo}>
          <FontAwesomeIcon icon={faChurch} />
          {windowSizeCtx.isWindowMoreWiderThan(550) &&
            (windowSizeCtx.isWindowLessWiderThan(1000)
              ? " YOW!"
              : " Your Own Wedding")}
        </div>
      </Link>
      <nav>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <div className={styles.dropdown}>
              <Link className={styles.dropdown} to={`/${SE_OFFERS}`}>
                Offers
              </Link>
              <div className={styles.dropdown_content}>
                <Link className={styles.link} to={`/${SE_OFFERS}`}>
                  All offers
                </Link>
                <Link className={styles.link} to={`/${SE_OFFERS}/new`}>
                  New offer
                </Link>
              </div>
            </div>
          </li>
          <li>
            <Link to={`/${SE_OFFERS}/favourites`}>Favourites</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavigationBar;
