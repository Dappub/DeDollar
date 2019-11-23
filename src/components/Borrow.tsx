import React from "react";

import cardStyle from "../css/shared/card.module.css";
import style from "../css/components/Borrow.module.css";
import flexStyle from "../css/shared/flex.module.css";


const Borrow: React.FC = () => {
  return (
    <div>
      <div className={[cardStyle.bigCard, flexStyle.flexRow, style.assets].join(" ")}>
        <h3>我的资产</h3>
        <div>0.000000 DeD ｜ 21.365545 DBTC</div>
      </div>
      <div className={[cardStyle.bigCard].join(" ")}>
        <div className={[style.inputs].join(" ")}>
          <h3>
            你希望抵押多少 DBTC
          </h3>
          <div className={[flexStyle.flexRow, style.inputItem].join(" ")}>
            <div className={style.inputInterface}>
              <input/>
            </div>
            <span>DBTC</span>
          </div>
        </div>
        <div className={[style.inputs].join(" ")}>
          <h3>
            你希望生产多少 DeD
          </h3>
          <div className={[flexStyle.flexRow, style.inputItem].join(" ")}>
            <div className={style.inputInterface}>
              <input/>
            </div>
            <span>DeD</span>
          </div>
        </div>
        <div className={[style.button, flexStyle.flexColumn].join(" ")} >
          确定
        </div>
      </div>
    </div>
  );
};

export default Borrow;
