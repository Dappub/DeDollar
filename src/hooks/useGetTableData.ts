
import {JsonRpc} from "eosjs";
import {useEffect, useState} from "react";

export default function (account?: string) {
  const [balances, setBalances] = useState<string[]>(new Array<string>());

  useEffect(() => {
    if (!account) {
      return;
    }
    const rpc = new JsonRpc("https://kylin.eossweden.org");
    rpc.get_table_rows({
      json: true,
      code: 'dedollardapp',
      scope: account,
      table: 'accounts',
      limit: 10,
    }).then(res => {
      setBalances(res.rows.map((e: any) => {
        return e.balance;
      }));
    })
  }, [account]);

  return balances;
}
