import { setup } from "../../../setupTest";
import fetchey from "../fetchey";
import { User, users } from "../../../mocks/handlers";

// msw 서버 셋업
setup();

describe("fetchey Module Unit Test", () => {
  describe("기본 메소드 (GET,POST,PUT,DELETE)를 지원할 수 있어야합니다.", () => {
    describe("GET Method", () => {
      test("GET 요청을 했을때 데이터를 가져올수 있어야합니다.", async () => {
        const data = await fetchey.get<User[]>("https://example.com/users");
        expect(data).toEqual(users);
      });

      test("GET 요청에 Params를 넘겼을 때 데이터를 가져올 수 있어야합니다.", async () => {
        const data = await fetchey.get<User[]>("https://example.com/users", {
          params: {
            id: "jangwon",
          },
        });

        const queryData = users.filter((user) => user.id === "jangwon");

        expect(data).toEqual(queryData);
      });
    });

    test("POST 메소드를 지원해야합니다.", () => {});
    test("PUT 메소드를 지원해야합니다.", () => {});
    test("DELETE 메소드를 지원해야합니다.", () => {});
  });

  describe("다양한 ResponseType을 지원해야합니다.", () => {
    test("responseType을 text로 넘겼을때, Promise<string>을 결과값으로 받아야합니다.", () => {});
    test("responseType을 json으로 넘겼을때, Promise<string>을 결과값으로 받아야합니다.", () => {});
    test("responseType을 arraybuffer로 넘겼을때, Promise<arraybuffer>을 결과값으로 받아야합니다.", () => {});
    test("responseType을 blob으로 넘겼을때, PromiseBlob>을 결과값으로 받아야합니다.", () => {});
    test("responseType이 없을때, Promise<TData>을 결과값으로 받아야합니다.", () => {});
  });
});
