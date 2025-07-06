'use server'

const COIN_GECKO_API_URL = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=40&page=1";

export const fetchCryptos = async () => {
  try {
    const resp = await fetch(COIN_GECKO_API_URL);
    return await resp.json();
  } catch (error) {
    throw new Error(`Failed to get cryptos. ${error}`);
  }
}
