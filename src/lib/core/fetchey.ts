export interface FetchOptions extends RequestInit {
  abortable?: boolean;
  responseType?: "text" | "arraybuffer" | "blob" | "json";
  timeout?: number;
  params?: Record<string, string | number | undefined>;
  body?: any;
}

export type FetchReponse<TData> = Promise<TData>;

export interface FetcheyErrorMsg {
  status: number;
  msg: string;
}

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
): FetchReponse<string | Blob | ArrayBuffer | Awaited<TData>> {
  const {
    responseType = "json",
    timeout,
    abortable,
    params,
    body,
    headers,
    ...rest
  } = init;

  // abort
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

  // parmas가 있는 경우
  if (params) {
    const urlObj = new URL(url.toString());

    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined) {
        urlObj.searchParams.append(key, String(value));
      }
    });

    url = urlObj.toString();
  }

  return await request<TData>(
    url,
    {
      body: JSON.stringify(body),
      ...rest,
    },
    responseType
  );
}

async function request<TData>(
  url: string | URL,
  options: FetchOptions,
  responseType: FetchOptions["responseType"] = "json"
) {
  try {
    const response = await fetch(url, options);

    // HTTP 상태 코드가 성공적인 응답이 아닌 경우, 에러 처리
    if (!response.ok) {
      // 서버가 반환한 상태 코드와 메시지를 기반으로 에러를 생성
      throw new Error(`HTTP error!, status: ${response.status}`);
    }

    // responseType에 따른 반환값 정의
    switch (responseType) {
      case "arraybuffer":
        return (await response.arrayBuffer()) as unknown as ArrayBuffer;
      case "blob":
        return (await response.blob()) as unknown as Blob;
      case "text":
        return (await response.text()) as unknown as string;
      case "json":
        return (await response.json()) as TData;
      default:
        return (await response.json()) as TData;
    }
  } catch (error) {
    console.error(`Fetch request failed: ${error}`);
    throw error;
  }
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
  init?: FetchOptions
): FetchReponse<TData> => {
  return fetchey<TData>(url, {
    method: "POST",
    body: init?.body,
    ...init,
  });
};

// PUT 요철을 위한 헬퍼 함수
fetchey.put = <TData>(
  url: string | URL,
  init?: FetchOptions
): FetchReponse<TData> => {
  return fetchey<TData>(url, {
    method: "PUT",
    body: init?.body,
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
