import { api } from './axios';

export const fetchJewelry = async () => {
  try {
    const response = await api.get('/category/jewelery');
    return response.data;
  } catch (error) {
    console.error('Error fetching jewelry:', error);
    throw error;
  }
};
