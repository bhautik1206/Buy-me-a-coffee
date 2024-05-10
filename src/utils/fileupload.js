import { axiosClient } from '#/utils/axiosClient';

export const uploadFile = (data, options) =>
  axiosClient.post('/files/upload', data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    ...options,
  });
