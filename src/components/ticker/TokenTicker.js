import { TokenDataLoader } from "./TokenDataLoader";
import "./ticker.styles.scss";
import { TokenInfo } from "./TokenInfo";

function TokenTicker() {
  return (
    <div className="ticker">
      <div className="ticker__element">
        <div className="header-coins">
          <TokenDataLoader>
            <TokenInfo />
          </TokenDataLoader>
        </div>
      </div>
    </div>
  );
}

export default TokenTicker;
