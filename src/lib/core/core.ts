import { FetchOptions } from '../types/fetchey';

const fetchey = (
  url: string | URL,
  init: FetchOptions & {
    abortable: true;
    responseType: 'text';
  },
) => {};
