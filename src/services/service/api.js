import { api } from './axios'

export const fetchBooks = async () => {
    const response = await api.get('/Books');
    return response.data;
  };