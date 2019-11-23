import React from "react";

import style from "../css/components/IntroDetailTab.module.css";

type Props = {
  title: string;
  detail: string;
  pic: string;
}

const IntroDetailTab: React.FC<Props> = (props) => {
  return (
    <div className={style.tab} style={{
      background: `url(${props.pic}) no-repeat`,
      backgroundSize: "contain",
    }}>
      <h3>
        {props.title}
      </h3>
      <div>
        {props.detail}
      </div>
    </div>
  );
};

export default IntroDetailTab;
