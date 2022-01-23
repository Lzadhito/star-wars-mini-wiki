import Link from "next/link";
import styFooter from "./styles";

const Footer = () => (
  <div css={styFooter}>
    Check the source code! @
    <Link href="https://github.com/Lzadhito/star-wars-mini-wiki">Github</Link>
  </div>
);

export default Footer;
