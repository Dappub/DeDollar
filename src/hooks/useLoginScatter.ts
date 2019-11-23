
// @ts-ignore
import ScatterJS from '@scatterjs/core';
// @ts-ignore
import ScatterEOS from '@scatterjs/eosjs2';
import {useEffect, useState} from "react";
import {iAccount} from "../consts/interfaces";
import {network} from "../consts/network";


export default function () {
  const [accounts, setAccounts] = useState<iAccount[]>(new Array<iAccount>());

  ScatterJS.plugins(new ScatterEOS());

  // @ts-ignore
  useEffect(function () {

    ScatterJS.connect("DeDOLLAR", {network}).then((connected: any) => {
      if (!connected) return false;
      // @ts-ignore
      ScatterJS.login({accounts:[network]}).then((a: any) => {
        setAccounts(a.accounts);
      })});
    }, []);
  return accounts;
}
