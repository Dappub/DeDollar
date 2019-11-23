import React from "react";
import containerStyle from "../css/shared/container.module.css";
import flexStyle from "../css/shared/flex.module.css";
import DebankHeader from "../components/DebankHeader";
import Borrow from "../components/Borrow";

const Issue: React.FC = () => {
  return (
    <div className={[containerStyle.pageContainer].join(" ")}>
      <DebankHeader />
      <div className={[flexStyle.flexColumn].join(" ")}>
        <Borrow />
      </div>
    </div>
  );
};

export default Issue;
