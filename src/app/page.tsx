import { fetchCryptos } from "./lib/cryptoData";
import { abbreviateDollar } from "./lib/utility";
import styles from "./page.module.css";

type Crypto = {
  id: string; 
  name: string;
  symbol: string;
  current_price: number;
  price_change_percentage_24h: number;
  market_cap: number;
};
export default async function Home() {

  const cryptos = await fetchCryptos();
  const cryptoColumns = cryptos.map((crypto: Crypto, index: number) => (
    <tr key={crypto.id}>
      <td>{index + 1}</td>
      <td>{crypto.name}</td>
      <td>{crypto.symbol}</td>
      <td>${crypto.current_price}</td>
      <td style={{ color: (crypto.price_change_percentage_24h < 0) ? 'red': 'green' }}>
        {crypto.price_change_percentage_24h.toFixed(2)}%
      </td>
      <td>{abbreviateDollar(crypto.market_cap)}</td>
    </tr>
  ));
  return (
    <div className='page'>
      <h1 className={styles.title}>Crypto Market NOW</h1>
      <table className='table__crypto'>
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Symbol</th>
            <th>Price</th>
            <th>Change 24h</th>
            <th>Market Cap</th>
          </tr>
        </thead>
        <tbody>
          {cryptoColumns}
        </tbody>
      </table>
    </div>
  );
}
