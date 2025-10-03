export interface IBalance {
  current: number;
  total: number;
  currency: string;
}

export interface IBalanceSliderProps {
  balance: IBalance;
  onValueChange: (value: number) => void;
  className?: string;
}
