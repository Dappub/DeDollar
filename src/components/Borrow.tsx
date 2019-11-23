import React, {useState} from "react";

import cardStyle from "../css/shared/card.module.css";
import style from "../css/components/Borrow.module.css";
import flexStyle from "../css/shared/flex.module.css";
import useGetTableData from "../hooks/useGetTableData";
import {iAccount} from "../consts/interfaces";
// @ts-ignore
import ScatterJS from '@scatterjs/core';
// @ts-ignore
import ScatterEOS from '@scatterjs/eosjs2';

import {JsonRpc, Api} from 'eosjs'
import {network} from "../consts/network";

type Props = {
  accounts?: iAccount[];
}

const Borrow: React.FC<Props> = (props) => {
  const [btc, setBtc] = useState(0);
  const balances = useGetTableData(props.accounts && props.accounts.length? props.accounts[0].name: undefined);
  return (
    <div>
      <div className={[cardStyle.bigCard, flexStyle.flexRow, style.assets].join(" ")}>
        <h3>我的资产</h3>
        <div>{balances.join(" | ")}</div>
      </div>
      <div className={[cardStyle.bigCard].join(" ")}>
        <div className={[style.inputs].join(" ")}>
          <h3>
            你希望抵押多少 DBTC
          </h3>
          <div className={[flexStyle.flexRow, style.inputItem].join(" ")}>
            <div className={style.inputInterface}>
              <input value={btc} onChange={(event) => setBtc(parseFloat(event.target.value))} />
            </div>
            <span>DBTC</span>
          </div>
        </div>
        <div className={[style.button, flexStyle.flexColumn].join(" ")} onClick={
          () => {
            ScatterJS.plugins(new ScatterEOS());
            ScatterJS.connect("DeDOLLAR", {network}).then((connected: any) => {
              if (!props.accounts) {
                return;
              }
              const rpc = new JsonRpc(network.fullhost());
              const eos = ScatterJS.eos(network, Api, {rpc});
              const account = props.accounts[0];
              const result = eos.transact({
                actions: [{
                  account: 'dedollardapp',
                  name: 'transfer',
                  authorization: [{
                    actor: account.name,
                    permission: 'active',
                  }],
                  data: {
                    from: account.name,
                    to: 'dedollardapp',
                    quantity: `${btc.toFixed(4)} BTC`,
                    memo: '1'
                  },
                }
                ]
              }, {
                blocksBehind: 3,
                expireSeconds: 30,
              }).then((res: any) => {
                alert('success');
                window.location.reload();
              });
              console.dir(result);
            })
        }} >
          确定
        </div>
      </div>
    </div>
  );
};

export default Borrow;
