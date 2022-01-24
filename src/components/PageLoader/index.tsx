import { styPageLoader } from "./styles";

const PageLoader = () => (
  <div css={styPageLoader}>
    <div data-testid="loader" className="lds-hourglass"></div>
  </div>
);

export default PageLoader;
