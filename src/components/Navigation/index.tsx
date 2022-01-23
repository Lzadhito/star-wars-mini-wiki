import Link from "next/link";
import { styNavigation } from "./styles";

const Navigation = () => {
  return (
    <nav css={styNavigation}>
      <ul>
        <li>
          <Link href="/films" passHref>
            <h1 className="title">Star Wars Wiki</h1>
          </Link>
        </li>
        <li className="navTabWrapper">
          <ul className="navTabContainer">
            <li>
              <Link href="/films" passHref>
                <h3>Films</h3>
              </Link>
            </li>
            <li>
              <Link href="/characters" passHref>
                <h3>Characters</h3>
              </Link>
            </li>
            <li>
              <Link href="/planets" passHref>
                <h3>Planets</h3>
              </Link>
            </li>
            <li>
              <Link href="/species" passHref>
                <h3>Species</h3>
              </Link>
            </li>
            <li>
              <Link href="/starships" passHref>
                <h3>Starships</h3>
              </Link>
            </li>
            <li>
              <Link href="/vehicles" passHref>
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
