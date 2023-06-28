import {client} from "./fetch";
import {apiResponse} from "../types/types";

export const getAllUsers = (url: string, criterion?: string[][]) => {
  return client.get<apiResponse>(url, criterion);
};