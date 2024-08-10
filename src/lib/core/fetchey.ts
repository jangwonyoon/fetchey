import { FetchOptions, FetchReponse } from "../types/fetchey";

/**
 *
 * @param url Fetch 전달 URL
 * @param init Fetch API 옵션 fetchInitOptions
 */

// 오버로딩 시그니처 정의

// responseType이 text인 경우
function fetchey(
  url: string | URL,
  init: FetchOptions & { responseType: "text" }
): FetchReponse<string>;

// responseType이 json인 경우
function fetchey<TData>(
  url: string | URL,
  init: FetchOptions & { responseType: "json" }
): FetchReponse<TData>;

// responseType이 blob인 경우
function fetchey(
  url: string | URL,
  init: FetchOptions & { responseType: "blob" }
): FetchReponse<Blob>;

// responseType이 arraybuffer인 경우
function fetchey(
  url: string | URL,
  init: FetchOptions & { responseType: "arraybuffer" }
): FetchReponse<ArrayBuffer>;

// default
function fetchey<TData>(
  url: string | URL,
  init: FetchOptions
): FetchReponse<any>;

async function fetchey<TData>(
  url: string | URL,
  init: FetchOptions = { responseType: "json" }
): FetchReponse<TData> {
  const { responseType = "json", timeout, abortable, ...rest } = init;

  // abortㅇ
  let controller: AbortController | undefined;

  if (abortable || timeout) {
    // 중단 및 타임아웃이 존재할 때 할당
    controller = new AbortController();
    rest.signal = controller.signal;
  }

  if (timeout) {
    setTimeout(() => {
      controller?.abort;
    }, timeout);
  }

  return fetch(url, rest).then(async (res) => {
    // 에러메세지 발생

    /**
     * 네트워크,사용자 구분지어야함
     */
    if (!res.ok) {
      throw new Error(`HTTP error!, status: ${res.status}`);
    }

    // reponse타입에 따른 반환값 정의
    switch (responseType) {
      case "arraybuffer":
        return await res.arrayBuffer();
      case "blob":
        return await res.blob();
      case "text":
        return await res.text();
      case "json":
        return await res.json();
      default:
        return await res.json();
    }
  });
}

// GET 요청을 위한 헬퍼 함수
fetchey.get = <TData>(
  url: string | URL,
  init?: FetchOptions
): FetchReponse<TData> => {
  return fetchey<TData>(url, { method: "GET", ...init });
};

// POST 요청을 위한 헬퍼 함수
fetchey.post = <TData>(
  url: string | URL,
  body: any,
  init?: FetchOptions
): FetchReponse<TData> => {
  return fetchey<TData>(url, {
    method: "POST",
    body: JSON.stringify(body),
    ...init,
  });
};

// PUT 요철을 위한 헬퍼 함수
fetchey.put = <TData>(
  url: string | URL,
  body: any,
  init?: FetchOptions
): FetchReponse<TData> => {
  return fetchey<TData>(url, {
    method: "PUT",
    body: JSON.stringify(body),
    ...init,
  });
};

// DELETE 요청을 위한 헬퍼 함수
fetchey.delete = <TData>(
  url: string | URL,
  init?: FetchOptions
): FetchReponse<TData> => {
  return fetchey<TData>(url, { method: "DELETE", ...init });
};

export default fetchey;
