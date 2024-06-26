import { $host, $authHost } from './index';

export const createType = async type => {
  const { data } = await $authHost.post('api/type', type);
  return data;
};

export const getAllTypes = async () => {
  const { data } = await $host.get('api/type');
  return data;
};

export const createBrand = async brand => {
  const { data } = await $authHost.post('api/brand', brand);
  return data;
};

export const getAllBrands = async () => {
  const { data } = await $host.get('api/brand');
  return data;
};

export const createDevice = async device => {
  const { data } = await $authHost.post('api/device', device);
  return data;
};

export const getAllDevices = async (brandId, typeId, limit = 5, page) => {
  const { data } = await $host.get('api/device', {
    params: {
      brandId,
      typeId,
      limit,
      page,
    },
  });
  return data;
};

export const getOneDevice = async id => {
  const { data } = await $host.get('api/device/' + id);
  return data;
};
