import React from "react";
import style from "../css/components/IntroHeader.module.css";
import flexStyle from "../css/shared/flex.module.css";
import iLogo from "../assets/logosquare@2x.png";

const IntroHeader: React.FC = () => {
  return (
    <div className={[style.poster, flexStyle.flexColumn].join(" ")}>
      <div className={[style.posterImage].join(" ")}>
        <a href={"https://debank.com"} target={"_blank"}><img src={iLogo} alt={""} style={{width: 60, height: 60}} /></a>
        <h1>
          DeDOLLAR
        </h1>
        <h2>
          BTC-backed stablecoin on EOS
        </h2>
        <div className={[style.button, flexStyle.flexColumn].join(" ")}>
            <span>
              Generate DeD
            </span>
        </div>
      </div>

    </div>
  );
};

export default IntroHeader;
