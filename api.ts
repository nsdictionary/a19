const API_URL = "https://books-api.nomadcoders.workers.dev";

export async function getBookList() {
  // await new Promise((resolve) => setTimeout(resolve, 3000));
  const response = await fetch(`${API_URL}/lists`);
  const json = await response.json();
  return json;
}

export async function getBookListByName(name: string) {
  // await new Promise((resolve) => setTimeout(resolve, 3000));
  const response = await fetch(`${API_URL}/list?name=${name}`);
  const json = await response.json();
  return json;
}
