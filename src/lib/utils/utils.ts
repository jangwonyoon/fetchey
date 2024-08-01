/**
 *
 * @param url 요청 url
 * @param options fetch options
 * @param timeout 타임아웃 하고 싶은 시간
 * @returns
 */

// 타임아웃 AbortController
export const fetchWithTimeout = async (
  url: string | URL | Request,
  options: RequestInit,
  timeout: number = 30000, // 기본 30초 대기
): Promise<Response> => {
  const controller = new AbortController();
  const { signal } = controller;
  const fetchOptions = { ...options, signal };

  const timeoutId = setTimeout(() => controller.abort(), timeout);

  try {
    const response = await fetch(url, fetchOptions);
    clearTimeout(timeoutId);
    return response;
  } catch (error) {
    throw error;
  }
};
