import { createFetchey } from '.';

const get = createFetchey('GET');
const post = createFetchey('POST');
const put = createFetchey('PUT');
const del = createFetchey('DELETE');

const fetchey = {
  get,
  post,
  put,
  delete: del,
};

export default fetchey;
