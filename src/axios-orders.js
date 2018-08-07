import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://burger-builder-2449e.firebaseio.com/'
})

export default instance