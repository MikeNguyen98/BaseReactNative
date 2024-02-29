import {MD5, HmacSHA256} from 'crypto-js';

export const hashHmacSHA256 = (
  value: string | CryptoJS.lib.WordArray,
  key: string | CryptoJS.lib.WordArray,
) => HmacSHA256(value, key).toString();

export const hashMd5 = (value: string | CryptoJS.lib.WordArray) =>
  MD5(value).toString();
