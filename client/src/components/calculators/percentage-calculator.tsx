import { useState, useEffect } from "react";
import { Percent } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function PercentageCalculator() {
  const [calculationMode, setCalculationMode] = useState<string>("findPercentage");
  const [percentageValue, setPercentageValue] = useState<string>("");
  const [baseAmount, setBaseAmount] = useState<string>("");
  const [partAmount, setPartAmount] = useState<string>("");
  const [totalAmount, setTotalAmount] = useState<string>("");
  const [result, setResult] = useState<number>(0);

  useEffect(() => {
    calculatePercentage();
  }, [calculationMode, percentageValue, baseAmount, partAmount, totalAmount]);

  const calculatePercentage = () => {
    if (calculationMode === "findPercentage") {
      // What is X% of Y?
      const percentage = parseFloat(percentageValue) || 0;
      const base = parseFloat(baseAmount) || 0;
      const calculatedResult = (percentage / 100) * base;
      setResult(calculatedResult);
    } else {
      // X is what percent of Y?
      const part = parseFloat(partAmount) || 0;
      const total = parseFloat(totalAmount) || 0;
      const calculatedResult = total !== 0 ? (part / total) * 100 : 0;
      setResult(calculatedResult);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-3 mb-6">
        <div className="bg-primary text-white p-2 rounded-lg">
          <Percent className="w-5 h-5" />
        </div>
        <div>
          <h2 className="text-xl font-semibold text-gray-900">Percentage Calculator</h2>
          <p className="text-sm text-gray-500">Calculate percentages and find amounts</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Mode Selection & Inputs */}
        <div className="space-y-6">
          {/* Mode Selection */}
          <div>
            <Label className="block text-sm font-medium text-gray-700 mb-3">
              Calculation Mode
            </Label>
            <RadioGroup value={calculationMode} onValueChange={setCalculationMode}>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <RadioGroupItem value="findPercentage" id="findPercentage" data-testid="radio-find-percentage" />
                  <Label htmlFor="findPercentage" className="text-gray-700 cursor-pointer">
                    What is <strong>X%</strong> of <strong>Y</strong>?
                  </Label>
                </div>
                <div className="flex items-center space-x-3">
                  <RadioGroupItem value="findPercent" id="findPercent" data-testid="radio-find-percent" />
                  <Label htmlFor="findPercent" className="text-gray-700 cursor-pointer">
                    <strong>X</strong> is what percent of <strong>Y</strong>?
                  </Label>
                </div>
              </div>
            </RadioGroup>
          </div>

          {/* Dynamic Input Fields */}
          {calculationMode === "findPercentage" ? (
            <div className="space-y-4">
              <div>
                <Label htmlFor="percentage-input" className="block text-sm font-medium text-gray-700 mb-2">
                  Percentage (%)
                </Label>
                <div className="relative">
                  <Input
                    type="number"
                    id="percentage-input"
                    data-testid="input-percentage-value"
                    placeholder="25"
                    value={percentageValue}
                    onChange={(e) => setPercentageValue(e.target.value)}
                    className="pr-8 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200"
                  />
                  <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">%</span>
                </div>
              </div>
              
              <div>
                <Label htmlFor="base-amount" className="block text-sm font-medium text-gray-700 mb-2">
                  Base Amount
                </Label>
                <Input
                  type="number"
                  id="base-amount"
                  data-testid="input-base-amount"
                  placeholder="200"
                  value={baseAmount}
                  onChange={(e) => setBaseAmount(e.target.value)}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200"
                />
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div>
                <Label htmlFor="part-amount" className="block text-sm font-medium text-gray-700 mb-2">
                  Part Amount
                </Label>
                <Input
                  type="number"
                  id="part-amount"
                  data-testid="input-part-amount"
                  placeholder="50"
                  value={partAmount}
                  onChange={(e) => setPartAmount(e.target.value)}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200"
                />
              </div>
              
              <div>
                <Label htmlFor="total-amount" className="block text-sm font-medium text-gray-700 mb-2">
                  Total Amount
                </Label>
                <Input
                  type="number"
                  id="total-amount"
                  data-testid="input-total-amount"
                  placeholder="200"
                  value={totalAmount}
                  onChange={(e) => setTotalAmount(e.target.value)}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200"
                />
              </div>
            </div>
          )}
        </div>

        {/* Results Section */}
        <div className="bg-gray-50 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Result</h3>
          
          <div className="text-center space-y-4">
            <div className="text-4xl font-bold text-primary" data-testid="text-percentage-result">
              {calculationMode === "findPercentage" ? result.toFixed(2) : `${result.toFixed(2)}%`}
            </div>
            <div className="text-lg text-gray-600">
              {calculationMode === "findPercentage" ? (
                <span data-testid="text-calculation-display">
                  {percentageValue}% of {baseAmount} = <span className="font-semibold text-gray-900">{result.toFixed(2)}</span>
                </span>
              ) : (
                <span data-testid="text-calculation-display">
                  {partAmount} is <span className="font-semibold text-gray-900">{result.toFixed(2)}%</span> of {totalAmount}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
