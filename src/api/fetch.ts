const BASE_URL = 'https://frontend-test-assignment-api.abz.agency/api/v1';

type RequestMethod = 'GET';

async function request<T>(
  url: string,
  method: RequestMethod = 'GET',
  searchParams: string[][] = []
): Promise<T> {
  const options: RequestInit = {method};

  const partlyUrl = new URL(BASE_URL + url);

  searchParams.forEach((p) => partlyUrl.searchParams.set(p[0], p[1]));

  const finalUrl = partlyUrl.toString();


  try {
    const response = await fetch(finalUrl, options);
    if (!response.ok) {
      throw new Error();
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export const client = {
  get: <T>(url: string, searchParams: string[][] = []) =>
    request<T>(url, undefined, searchParams),
};