import React from "react";

import containerStyle from "../css/shared/container.module.css";
import flexStyle from "../css/shared/flex.module.css";
import style from "../css/views/Intro.module.css";
import iLogo from "../assets/logosquare@2x.png";
import IntroHeader from "../components/IntroHeader";
import IntroDetail from "../components/IntroDetail";

const Intro: React.FC = () => {
  return (
    <div className={[containerStyle.pageContainer, flexStyle.flexColumn].join(" ")}>
      <IntroHeader />
      <div className={[containerStyle.pageSubContainer, flexStyle.flexColumn].join(" ")}>
        <IntroDetail />
      </div>
    </div>
  );
};

export default Intro;
