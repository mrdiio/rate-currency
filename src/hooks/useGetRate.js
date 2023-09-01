import { useCallback, useState } from 'react';

export default function useGetRates() {
  const [rates, setRates] = useState([]);
  const [loading, setLoading] = useState(false);

  const getRates = useCallback(async () => {
    try {
      setLoading(true);
      const res = await fetch(
        'https://api.currencyfreaks.com/v2.0/rates/latest?apikey=50f6d95197b94347b6090c06e2738cc4&symbols=CAD,IDR,JPY,CHF,EUR,GBP'
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
    } finally {
      setLoading(false);
    }
  }, []);

  return { rates, getRates, loading };
}
