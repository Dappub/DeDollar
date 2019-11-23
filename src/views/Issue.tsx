import React from "react";
import containerStyle from "../css/shared/container.module.css";
import flexStyle from "../css/shared/flex.module.css";
import DebankHeader from "../components/DebankHeader";
import Borrow from "../components/Borrow";
import useLoginScatter from "../hooks/useLoginScatter";

const Issue: React.FC = () => {
  const accounts = useLoginScatter();

  return (
    <div className={[containerStyle.pageContainer].join(" ")}>
      <DebankHeader accounts={accounts} />
      <div className={[flexStyle.flexColumn].join(" ")}>
        <Borrow accounts={accounts} />
      </div>
    </div>
  );
};

export default Issue;
