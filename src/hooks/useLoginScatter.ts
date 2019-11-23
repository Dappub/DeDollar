
// @ts-ignore
import ScatterJS from 'scatterjs-core';
// @ts-ignore
import ScatterEOS from 'scatterjs-plugin-eosjs';
import {useEffect, useState} from "react";
import {iAccount} from "../consts/interfaces";


export default function () {
  const [accounts, setAccounts] = useState<iAccount[]>(new Array<iAccount>());

  ScatterJS.plugins(new ScatterEOS());
  const network = ScatterJS.Network.fromJson({
    blockchain:'eos',
    chainId:'5fff1dae8dc8e2fc4d5b23b2c7665c97f9e9d8edf2b6485a86ba311c25639191',
    host:'kylin.eossweden.org',
    port:443,
    protocol:'https'
  });

  // @ts-ignore
  useEffect(function () {

    ScatterJS.connect("DeDOLLAR", {network}).then((connected: any) => {
      if (!connected) return false;
      // @ts-ignore
      ScatterJS.login({accounts:[network]}).then((a: any) => {
        console.log(a.accounts);
        setAccounts(a.accounts);
      })});
    }, []);
  return accounts;
}
