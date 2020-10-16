import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.1.97:3333', 
  // add my IP instead of localhost so it works on the mobile device during dev
  // find IP on metro builder / lan
  // if android simulator $ adb reverse tcp:3333 tcp:3333
});

export default api;