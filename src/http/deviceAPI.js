import { $host, $authHost } from './index';

export const createType = async type => {
  const { data } = await $authHost.post('api/type', type);
  return data;
};

export const getAllTypes = async () => {
  const { data } = await $host.get('api/type');
  return data;
};
