import {client} from "./fetch";
import {apiResponse, apiResponsePositions, apiResponseToken} from "../types/types";

export const getAllUsers = (url: string, criterion?: string[][]) => {
  return client.get<apiResponse>(url, criterion);
};

export const getAllPositions = (url: string, criterion?: string[][]) => {
  return client.get<apiResponsePositions>(url, criterion);
};

export const getToken = (url: string, criterion?: string[][]) => {
  return client.get<apiResponseToken>(url, criterion);
};