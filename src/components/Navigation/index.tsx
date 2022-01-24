import Link from "next/link";
import { styNavigation } from "./styles";

const Navigation = () => {
  return (
    <nav css={styNavigation}>
      <ul>
        <li>
          <Link href="/films" passHref>
            <a>
              <h1 className="title">Star Wars Wiki</h1>
            </a>
          </Link>
        </li>
        <li className="navTabWrapper">
          <ul className="navTabContainer">
            <li>
              <Link href="/films" passHref>
                <a>
                  <h3>Films</h3>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/characters" passHref>
                <a>
                  <h3>Characters</h3>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/planets" passHref>
                <a>
                  <h3>Planets</h3>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/species" passHref>
                <a>
                  <h3>Species</h3>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/starships" passHref>
                <a>
                  <h3>Starships</h3>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/vehicles" passHref>
                <a>
                  <h3>Vehicles</h3>
                </a>
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};
export default Navigation;
