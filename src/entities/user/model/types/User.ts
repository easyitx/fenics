import { IBalance } from "@/entities/balance/model/types";

export interface IUser {
  username: string;
  avatar?: string;
  balance?: IBalance;
}
