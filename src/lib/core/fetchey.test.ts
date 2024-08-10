describe("fetchey Module Unit Test", () => {
  describe("기본 메소드 (GET,POST,PUT,DELETE)를 지원할 수 있어야합니다.", () => {
    test("GET 메소드를 지원해야합니다.", () => {});
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
