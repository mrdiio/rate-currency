import { useCallback, useState } from 'react';

export default function useGetRates() {
  const [rates, setRates] = useState([]);

  const getRates = useCallback(async () => {
    try {
      const res = await fetch(
        'https://api.currencyfreaks.com/v2.0/rates/latest?apikey=710084c741934fc390ea8f0e0cf1e9d4&symbols=CAD,IDR,JPY,CHF,EUR,GBP',
        {
          cache: 'no-cache',
        }
      );
      const data = await res.json();

      // get key and value from data.rates
      const rates = Object.entries(data.rates).map(([key, value]) => ({
        currency: key,
        rate: Number(value).toFixed(5),
        buy: Number(value * 1.05).toFixed(4),
        sell: Number(value * 0.95).toFixed(4),
      }));

      setRates(rates);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return { rates, getRates };
}
