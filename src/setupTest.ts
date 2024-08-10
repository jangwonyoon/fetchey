import { server } from "./mocks/server";

export const setup = () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());

  // msw 서버 종료
  afterAll(() => server.close());
};
