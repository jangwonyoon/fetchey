import { createFetchey } from '.';

const get = createFetchey('GET');
const post = createFetchey('POST');
const put = createFetchey('put');
const del = createFetchey('delete');

const fetchey = {
  get,
  post,
  put,
  delete: del,
};

export default fetchey;
