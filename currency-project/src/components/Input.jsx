import { useId } from "react";
import React from "react";

function Input({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [], // for default if user dont select any option
  selectCurrerncy = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {
  const amountInputId = useId();
  return (
    <div className={`bg-white p-3 ${className} rounded-lg text-sm flex `}>
      <div className="w-1/2">
        <label
          htmlFor={amountInputId}
          className="text-black/40 mb-2 inline-block"
        >
          {label}
        </label>
        <input
          id={amountInputId}
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          // this means that if onAmmounChange exist!

          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          } // onchange whenever the ammount is change but there is no default value

          // so chances are possible it will crash if no one change the value

          // use &&
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectCurrerncy}
          // now if the option change this value will also be change that why we will use onCurrencyChange
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
        >
          {/* <option value="usd">usd</option> */} // now we will use loop
          because there will be alot of option comming from the api
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
          //we will not use curly braces {} because we dont want to return
          anything
        </select>
      </div>
    </div>
  );
}

export default Input;
