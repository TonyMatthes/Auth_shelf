import axios from 'axios';

export function callItemGet() {
  const config = {
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true,
  };

  return axios.get('/api/shelf', config)
    .then(response => response.data)
    .catch(error => {
      throw error.response || error;
    });
}