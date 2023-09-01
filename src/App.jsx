import { useEffect } from 'react';
import useGetRates from './hooks/useGetRate';

function App() {
  const { rates, getRates } = useGetRates();

  useEffect(() => {
    getRates();
  }, [getRates]);

  console.log(rates);

  return (
    <>
      <div className="bg-orange-500 h-screen text-white">
        <div className="flex items-center justify-center h-full">
          <div>
            <table className="table-auto">
              <thead className="text-xl font-semibold h-10">
                <tr className="">
                  <th className="w-40">Currency</th>
                  <th className="w-40">We Buy</th>
                  <th className="w-40">Exchange Rate</th>
                  <th className="w-40">We Sell</th>
                </tr>
              </thead>
              <tbody className="text-center text-xl font-light">
                {rates.length > 0 && (
                  <>
                    {rates.map((rate, i) => (
                      <tr key={i} className="">
                        <td className="">{rate.currency}</td>
                        <td className="">{rate.buy}</td>
                        <td className="">{rate.rate}</td>
                        <td className="">{rate.sell}</td>
                      </tr>
                    ))}
                  </>
                )}
              </tbody>
            </table>

            <div className="pt-12">
              <div className="text-sm text-center font-light">
                <p>Rates are based from 1 USD.</p>
                <p>
                  This applications uses API from https://currencyfreaks.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
