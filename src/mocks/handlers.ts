import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get('/api/test/get', () => {
    return HttpResponse.json({
      id: 'jjnng',
      name: 'jangwonyoon',
      email: 'jangwonyoon@naver.com',
    });
  }),
];
