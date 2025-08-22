import { useState, useEffect, useCallback } from "react";
import { ArrowRightLeft } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function CurrencyConverter() {
  const [convertAmount, setConvertAmount] = useState<string>("");
  const [fromCurrency, setFromCurrency] = useState<string>("USD");
  const [toCurrency, setToCurrency] = useState<string>("EUR");
  const [result, setResult] = useState<number>(0);
  const [exchangeRate, setExchangeRate] = useState<number>(0);
  const [lastUpdated, setLastUpdated] = useState<string>("");
  const [exchangeRates, setExchangeRates] = useState<{ [key: string]: { [key: string]: number } }>({});
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  // Fetch real-time exchange rates from API
  const fetchExchangeRates = useCallback(async (baseCurrency: string) => {
    setIsLoading(true);
    setError("");
    
    try {
      const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${baseCurrency}`);
      if (!response.ok) {
        throw new Error('Failed to fetch exchange rates');
      }
      
      const data = await response.json();
      
      setExchangeRates(prevRates => ({
        ...prevRates,
        [baseCurrency]: {
          ...data.rates,
          [baseCurrency]: 1 // Always include self-rate
        }
      }));
      
      setLastUpdated(new Date().toLocaleString());
    } catch (err) {
      setError('Failed to update exchange rates. Using cached data if available.');
      console.error('Currency API error:', err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const currencies = [
    { code: "USD", name: "USD - US Dollar" },
    { code: "EUR", name: "EUR - Euro" },
    { code: "GBP", name: "GBP - British Pound" },
    { code: "PKR", name: "PKR - Pakistani Rupee" },
    { code: "INR", name: "INR - Indian Rupee" },
    { code: "JPY", name: "JPY - Japanese Yen" },
    { code: "CAD", name: "CAD - Canadian Dollar" },
    { code: "AUD", name: "AUD - Australian Dollar" },
    { code: "CHF", name: "CHF - Swiss Franc" },
  ];

  // Initial fetch and setup auto-refresh
  useEffect(() => {
    // Fetch rates for initial currencies
    fetchExchangeRates(fromCurrency);
    
    // Set up interval to update every minute (60000ms)
    const interval = setInterval(() => {
      fetchExchangeRates(fromCurrency);
    }, 60000);

    return () => clearInterval(interval);
  }, [fromCurrency, fetchExchangeRates]);

  // Fetch rates when fromCurrency changes
  useEffect(() => {
    if (!exchangeRates[fromCurrency]) {
      fetchExchangeRates(fromCurrency);
    }
  }, [fromCurrency, exchangeRates, fetchExchangeRates]);

  // Calculate conversion when inputs change
  useEffect(() => {
    calculateConversion();
  }, [convertAmount, fromCurrency, toCurrency, exchangeRates]);

  const calculateConversion = () => {
    const amount = parseFloat(convertAmount) || 0;
    const rate = exchangeRates[fromCurrency]?.[toCurrency] || 1;
    setExchangeRate(rate);
    setResult(amount * rate);
  };

  const convertCurrency = () => {
    calculateConversion();
  };

  const getCurrencySymbol = (currencyCode: string): string => {
    const symbols: { [key: string]: string } = {
      USD: "$",
      EUR: "€",
      GBP: "£",
      PKR: "₨",
      INR: "₹",
      JPY: "¥",
      CAD: "C$",
      AUD: "A$",
      CHF: "CHF",
    };
    return symbols[currencyCode] || currencyCode;
  };

  const formatCurrency = (amount: number, currencyCode: string): string => {
    const symbol = getCurrencySymbol(currencyCode);
    return `${symbol}${amount.toFixed(2)}`;
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-3 mb-6">
        <div className="bg-primary text-white p-2 rounded-lg">
          <ArrowRightLeft className="w-5 h-5" />
        </div>
        <div>
          <h2 className="text-xl font-semibold text-gray-900">Currency Converter</h2>
          <p className="text-sm text-gray-500">
            Convert between different currencies with real-time rates
            {isLoading && <span className="ml-2 text-blue-600">🔄 Updating...</span>}
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="space-y-6">
          {/* Amount */}
          <div>
            <Label htmlFor="convert-amount" className="block text-sm font-medium text-gray-700 mb-2">
              Amount to Convert
            </Label>
            <Input
              type="number"
              id="convert-amount"
              data-testid="input-convert-amount"
              placeholder="100"
              value={convertAmount}
              onChange={(e) => setConvertAmount(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200"
            />
          </div>

          {/* From Currency */}
          <div>
            <Label htmlFor="from-currency" className="block text-sm font-medium text-gray-700 mb-2">
              From Currency
            </Label>
            <Select value={fromCurrency} onValueChange={setFromCurrency}>
              <SelectTrigger 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200"
                data-testid="select-from-currency"
              >
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {currencies.map((currency) => (
                  <SelectItem key={currency.code} value={currency.code}>
                    {currency.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* To Currency */}
          <div>
            <Label htmlFor="to-currency" className="block text-sm font-medium text-gray-700 mb-2">
              To Currency
            </Label>
            <Select value={toCurrency} onValueChange={setToCurrency}>
              <SelectTrigger 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200"
                data-testid="select-to-currency"
              >
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {currencies.map((currency) => (
                  <SelectItem key={currency.code} value={currency.code}>
                    {currency.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Convert Button */}
          <Button
            onClick={convertCurrency}
            data-testid="button-convert"
            className="w-full bg-primary text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            <ArrowRightLeft className="w-4 h-4 mr-2" />
            Convert Currency
          </Button>
        </div>

        {/* Results Section */}
        <div className="bg-gray-50 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Conversion Result</h3>
          
          <div className="space-y-6">
            {/* Exchange Rate Info */}
            <div className="text-center border-b border-gray-200 pb-4">
              <div className="text-sm text-gray-600 mb-1">Exchange Rate</div>
              <div className="text-lg font-semibold text-gray-900" data-testid="text-exchange-rate">
                1 {fromCurrency} = {exchangeRate.toFixed(4)} {toCurrency}
              </div>
            </div>

            {/* Conversion Result */}
            <div className="text-center space-y-3">
              <div className="text-3xl font-bold text-primary" data-testid="text-conversion-result">
                {formatCurrency(result, toCurrency)}
              </div>
              <div className="text-lg text-gray-600">
                <span data-testid="text-conversion-display">
                  {formatCurrency(parseFloat(convertAmount) || 0, fromCurrency)} {fromCurrency} = 
                  <span className="font-semibold text-gray-900 ml-1">
                    {formatCurrency(result, toCurrency)}
                  </span> {toCurrency}
                </span>
              </div>
            </div>

            {/* Last Updated Info */}
            <div className="text-center text-xs text-gray-500 mt-4">
              {error ? (
                <div className="text-red-500">⚠️ {error}</div>
              ) : (
                <div>
                  ⏰ Rates updated: <span data-testid="text-last-updated">{lastUpdated}</span>
                  <div className="mt-1 text-green-600">📡 Auto-updating every minute</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
