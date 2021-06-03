import axios from 'axios';

const client = axios.create({
  baseURL: 'https://outside-in-dev-api.herokuapp.com/bmEconeY9YjBKMeGF1hytWH3mHyqmw1h',
});

const api = {
  loadRestaurants() {
    return client.get('/restaurants').then(response => response.data);
  },
};

export default api;
