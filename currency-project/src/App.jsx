import { useState } from "react";
import { Input } from "./components";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
function App() {
  const [amount, setAmount] = useState(1);
  const [convertedAmmount, setConvertedAmmount] = useState(1); // this is the state which will give final result
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("pkr");

  const currencyInfo = useCurrencyInfo(from); // this will be usd if it will be empty it will crash

  // from the hook we know that this hook also return data the data will be stored in this options
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    // the amount will also swap
    setConvertedAmmount(amount);
    setAmount(convertedAmmount);
  };

  //now we need to get the result of the value given by user

  const convertedResult = () => {
    setConvertedAmmount(amount * currencyInfo[to]);
  };

  return (
    
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/186461/pexels-photo-186461.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault(); // means that when form is submitted it should not go to  the other page this will stop it
              convertedResult();
            }}
          >
            <div className="w-full mb-1">
              <Input
                onAmountChange={(amount) => {
                  setAmount(amount);
                }}
                selectCurrerncy={from}
                onCurrencyChange={(currency) => setFrom(currency)}
                amount={amount}
                currencyOptions={options}
                label="From"
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <Input
                selectCurrerncy={to}
                amountDisable
                onCurrencyChange={(currency) => setTo(currency)} // here currency is whatever the value of currency the user has chosen
                amount={convertedAmmount}
                currencyOptions={options}
                label="to"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
