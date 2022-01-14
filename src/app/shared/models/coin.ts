import { Status } from '.';

export interface Coin {
  id: string;
  name: string;
  symbol: string;
  date: Date;
  high: number;
  low: number;
  open: number;
  close: number;
  volume: number;
  marketCap: number;
  status: Status;
}
