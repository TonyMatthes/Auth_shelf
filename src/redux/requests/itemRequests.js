import axios from 'axios';

export function callItemGet(payload) {
  const config = {
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true,
  };
  if (payload) {
    return axios.get('/api/shelf/' + payload.params.id, config)
      .then(response => response.data)
      .catch(error => {
        throw error.response || error;
      });
  } else {
    return axios.get('/api/shelf', config)
      .then(response => response.data)
      .catch(error => {
        throw error.response || error;
      });
  }
  
}

export function callItemDelete(id) {
  const config = {
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true,
  };

  return axios.delete('/api/shelf/' + id, config)
    .then(response => response.status)
    .catch(error => {
      throw error.response || error;
    });
}

export function callItemPost(dataToSend) {
  const config = {
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true,
  };
  return axios.post('/api/shelf', dataToSend, config)
    .then(response => response.status)
    .catch(error => {
      throw error.response || error;
    });
}

export function callGetItemCount() {
  const config = {
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true,
  };

  return axios.get('/api/shelf/count', config)
    .then(response => {
      console.log('getting count:', response.data);
      return response.data;
    })
    .catch(error => {
      throw error.response || error;
    });
}