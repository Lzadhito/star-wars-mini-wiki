import Link from "next/link";
import { styNavigation } from "./styles";

const Navigation = () => {
  return (
    <nav css={styNavigation}>
      <ul>
        <li>
          <Link href="/films">
            <h1 className="title">Star Wars Wiki</h1>
          </Link>
        </li>
        <li className="navTabWrapper">
          <ul className="navTabContainer">
            <li>
              <Link href="/films">
                <h3>Films</h3>
              </Link>
            </li>
            <li>
              <Link href="/characters">
                <h3>Characters</h3>
              </Link>
            </li>
            <li>
              <Link href="/planets">
                <h3>Planets</h3>
              </Link>
            </li>
            <li>
              <Link href="/species">
                <h3>Species</h3>
              </Link>
            </li>
            <li>
              <Link href="/starships">
                <h3>Starships</h3>
              </Link>
            </li>
            <li>
              <Link href="/vehicles">
                <h3>Vehicles</h3>
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};
export default Navigation;
