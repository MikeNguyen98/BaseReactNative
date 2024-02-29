import {storage} from 'src/Storage/storage';

export const TOKEN_LOCAL_KEY = '__access-token__';

type TokenProps = {
  token?: string;
};

export function tokenStorage({token}: TokenProps) {
  if (token) {
    return storage.set('accessToken', token);
  }
  const _token = storage.getString('accessToken');
  if (_token) {
    return String(_token);
  }
  return false;
}
export function tokenClear() {
  return storage.delete('accessToken');
}
