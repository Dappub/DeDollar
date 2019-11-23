import React from "react";

import containerStyle from "../css/shared/container.module.css";
import style from "../css/components/DebankFooter.module.css";
import flexStyle from "../css/shared/flex.module.css";
import iDebank from "../assets/debank.svg";
import iHomepage from "../assets/icon/homepage.svg";
import iTelegram from "../assets/icon/telegram.svg";
import iTwitter from "../assets/icon/twitter.svg";
import iMedium from "../assets/icon/medium.svg";
import iGithub from "../assets/icon/github.svg";

const DebankFooter: React.FC = () => {
  return (
    <div className={style.footerClass}>
      <div className={containerStyle.footerContainer}>
        <div className={flexStyle.flexRow}>
          <div className={style.logo}>
            <img src={iDebank} alt="" className={style.dapppubLogoWhite} />
            <div className={style.copyright}>Copyright © 2019. DEBANK GLOBAL PTE. LTD.</div>
          </div>
          <div className={style.contacts}>
          <div>
            <a href="//dapp.pub" target="_blank" rel="noopener noreferrer"><img src={iHomepage} alt="" /></a>
            <a href="//t.me/dapppub" target="_blank" rel="noopener noreferrer"><img src={iTelegram} alt="" /></a>
            <a href="//twitter.com/dapppub" target="_blank" rel="noopener noreferrer"><img src={iTwitter} alt="" /></a>
            <a href="//medium.com/dapppub" target="_blank" rel="noopener noreferrer"><img src={iMedium} alt="" /></a>
            <a href="//github.com/dappub" target="_blank" rel="noopener noreferrer"><img src={iGithub} alt="" /></a>
          </div>

        </div>
      </div>
    </div>
</div>
  )
};

export default DebankFooter;
