import React from "react";

import style from "../css/components/IntroDetail.module.css";
import flexStyle from "../css/shared/flex.module.css";
import IntroDetailTab from "./IntroDetailTab";
import bg01 from "../assets/bg01.png";
import bg02 from "../assets/bg02.png";
import bg03 from "../assets/bg03.png";
import bg04 from "../assets/bg04.png";


const IntroDetail: React.FC = () => {
  return (
    <div className={style.introDetail}>
      <div className={style.introBlock}>
        <h3>
          When BTC meets EOS
        </h3>
        <h5>
          DeDollar combines the best of both worlds
        </h5>
        <div className={[flexStyle.flexRow, style.tabs].join(" ")} >
          <IntroDetailTab
            title={"Scalable & Fast"}
            detail={"Industry leading speed and latency in transactions and throughput"}
            pic={bg01}/>
          <IntroDetailTab
            title={"Cost-Effective"}
            detail={"Flexible cost model by resources for operation with zero transaction fees"}
            pic={bg02}/>
          <IntroDetailTab
            title={"User-Friendly"}
            detail={"Sustainable and energy-efficient consensus mechanism built for performance"}
            pic={bg03}/>
          <IntroDetailTab
            title={"No volatility"}
            detail={"A price-stable currency that you control. Generate DeD on your terms, instantly"}
            pic={bg04}/>
        </div>
        <div className={style.about} >
          <h2>
            About DeBank
          </h2>
          <div>
            DeBank (former DappPub) focuses on building the future of finance via innovative and decentralized solutions.
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroDetail;
