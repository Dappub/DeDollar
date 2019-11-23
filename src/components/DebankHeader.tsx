import React from "react";

import flexStyle from "../css/shared/flex.module.css";
import style from "../css/components/DebankHeader.module.css";
import containerStyle from "../css/shared/container.module.css";
import iDebank from "../assets/debank.svg";
import {NavLink} from "react-router-dom";
import useLoginScatter from "../hooks/useLoginScatter";
import {iAccount} from "../consts/interfaces";

type Props = {
  accounts?: iAccount[];
}

const DebankHeader: React.FC<Props> = (props) => {

  return (
    <div className={[style.header, flexStyle.flexColumn].join(" ")}>
      <div className={[containerStyle.pageSubContainer, flexStyle.flexRow, style.headerInside].join(" ")}>
        <div className={[style.name, flexStyle.flexRow].join(" ")}>
          <NavLink to={"/"}><img src={iDebank} alt={""} style={{width: 154, height: 38}} /></NavLink>
          <div>
            DeDOLLAR
          </div>
        </div>
        <div className={style.nameTag} >
          {props.accounts && props.accounts.length? props.accounts[0].name: "请登录"}
        </div>
      </div>
    </div>
  );
};

export default DebankHeader;
