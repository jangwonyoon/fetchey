import { http, HttpResponse } from "msw";

export interface User {
  id: string;
  name: string;
  email: string;
  age: number;
}

export const users: User[] = [
  {
    id: "jjnng",
    name: "get Test",
    email: "jangwonyoon@naver.com",
    age: 1,
  },
  {
    id: "jangwon",
    name: "query Parameter",
    email: "jangwonyoon@naver.com",
    age: 1,
  },
];

export const handlers = [
  // get Query Parameter
  http.get("https://example.com/users", ({ request }) => {
    const url = new URL(request.url);
    const id = url.searchParams.get("id");

    if (id) {
      const isQueryRes = users.filter((user) => user.id === id);
      return HttpResponse.json(isQueryRes);
    }

    return HttpResponse.json(users);
  }),
];
