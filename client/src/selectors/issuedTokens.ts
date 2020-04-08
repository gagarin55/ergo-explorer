import { getStruct } from 'redux-struct';
import { GET_ALL_ISSUED_TOKENS_STRUCT } from '../constants/struct.types';

export const getAllIssuedTokensStructSelector = (state: any) =>
  getStruct(GET_ALL_ISSUED_TOKENS_STRUCT)(state);
