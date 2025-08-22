import { useState, useEffect } from "react";
import { Receipt } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function TipCalculator() {
  const [billAmount, setBillAmount] = useState<string>("");
  const [tipPercentage, setTipPercentage] = useState<number>(10);
  const [customTip, setCustomTip] = useState<string>("");
  const [numberOfPeople, setNumberOfPeople] = useState<string>("1");

  const [tipAmount, setTipAmount] = useState<number>(0);
  const [totalBill, setTotalBill] = useState<number>(0);
  const [perPerson, setPerPerson] = useState<number>(0);

  const tipPresets = [10, 15, 18, 20];

  useEffect(() => {
    calculateTip();
  }, [billAmount, tipPercentage, customTip, numberOfPeople]);

  const calculateTip = () => {
    const bill = parseFloat(billAmount) || 0;
    const people = parseInt(numberOfPeople) || 1;
    const tip = customTip ? parseFloat(customTip) : tipPercentage;
    
    const calculatedTipAmount = bill * (tip / 100);
    const calculatedTotalBill = bill + calculatedTipAmount;
    const calculatedPerPerson = calculatedTotalBill / people;

    setTipAmount(calculatedTipAmount);
    setTotalBill(calculatedTotalBill);
    setPerPerson(calculatedPerPerson);
  };

  const handleTipPresetClick = (percentage: number) => {
    setTipPercentage(percentage);
    setCustomTip("");
  };

  const handleCustomTipChange = (value: string) => {
    setCustomTip(value);
    if (value) {
      setTipPercentage(0);
    }
  };

  const formatCurrency = (amount: number) => {
    return `$${amount.toFixed(2)}`;
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-3 mb-6">
        <div className="bg-primary text-white p-2 rounded-lg">
          <Receipt className="w-5 h-5" />
        </div>
        <div>
          <h2 className="text-xl font-semibold text-gray-900">Tip Calculator</h2>
          <p className="text-sm text-gray-500">Calculate tips and split bills easily</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="space-y-6">
          {/* Bill Amount */}
          <div>
            <Label htmlFor="bill-amount" className="block text-sm font-medium text-gray-700 mb-2">
              Bill Amount
            </Label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
              <Input
                type="number"
                id="bill-amount"
                data-testid="input-bill-amount"
                placeholder="0.00"
                value={billAmount}
                onChange={(e) => setBillAmount(e.target.value)}
                className="pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200"
              />
            </div>
          </div>

          {/* Tip Percentage */}
          <div>
            <Label className="block text-sm font-medium text-gray-700 mb-3">
              Tip Percentage
            </Label>
            <div className="grid grid-cols-2 gap-3 mb-4">
              {tipPresets.map((preset) => (
                <button
                  key={preset}
                  data-testid={`button-tip-${preset}`}
                  onClick={() => handleTipPresetClick(preset)}
                  className={`
                    px-4 py-3 border-2 rounded-lg font-medium transition-colors duration-200 
                    focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
                    ${(tipPercentage === preset && !customTip)
                      ? 'border-primary bg-primary text-white hover:bg-blue-600'
                      : 'border-gray-300 text-gray-700 hover:border-primary hover:text-primary'
                    }
                  `}
                >
                  {preset}%
                </button>
              ))}
            </div>
            
            <div className="flex items-center space-x-3">
              <span className="text-sm text-gray-600">Custom:</span>
              <div className="relative flex-1">
                <Input
                  type="number"
                  data-testid="input-custom-tip"
                  placeholder="Custom %"
                  value={customTip}
                  onChange={(e) => handleCustomTipChange(e.target.value)}
                  className="pr-8 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200"
                />
                <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">%</span>
              </div>
            </div>
          </div>

          {/* Number of People */}
          <div>
            <Label htmlFor="num-people" className="block text-sm font-medium text-gray-700 mb-2">
              Number of People
            </Label>
            <Input
              type="number"
              id="num-people"
              data-testid="input-num-people"
              min="1"
              placeholder="1"
              value={numberOfPeople}
              onChange={(e) => setNumberOfPeople(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200"
            />
          </div>
        </div>

        {/* Results Section */}
        <div className="bg-gray-50 rounded-xl p-6 space-y-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Results</h3>
          
          <div className="space-y-4">
            <div className="flex justify-between items-center py-3 border-b border-gray-200">
              <span className="text-gray-600">Tip Amount:</span>
              <span className="text-xl font-semibold text-success" data-testid="text-tip-amount">
                {formatCurrency(tipAmount)}
              </span>
            </div>
            
            <div className="flex justify-between items-center py-3 border-b border-gray-200">
              <span className="text-gray-600">Total Bill:</span>
              <span className="text-xl font-semibold text-gray-900" data-testid="text-total-bill">
                {formatCurrency(totalBill)}
              </span>
            </div>
            
            <div className="flex justify-between items-center py-3">
              <span className="text-gray-600">Per Person:</span>
              <span className="text-2xl font-bold text-primary" data-testid="text-per-person">
                {formatCurrency(perPerson)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
