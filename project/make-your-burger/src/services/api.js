const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
const BACKEND_PORT = import.meta.env.VITE_BACKEND_PORT;

export async function createOrder(payload) {
  const POST_URL =`${BACKEND_URL}:${BACKEND_PORT}/burgers`;
  const POST_DATA = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  };
  const response = await fetch(POST_URL, POST_DATA);

  return response.json();
}

export async function getIngredients() {
  try {
    const REQUEST_URL = `${BACKEND_URL}:${BACKEND_PORT}/ingredients`;
    const request = await fetch(REQUEST_URL);
    const ingredients = await request.json();

    return ingredients;
  } catch (error) {
    console.error(error);
  }
}

export async function getOrders() {
  try {
    const REQUEST_URL = `${BACKEND_URL}:${BACKEND_PORT}/burgers`;
    const request = await fetch(REQUEST_URL);
    const orders = await request.json();

    return orders;
  } catch (error) {
    console.error(error);
  }
}

export async function getStatus() {
  try {
    const REQUEST_URL = `${BACKEND_URL}:${BACKEND_PORT}/status`;
    const request = await fetch(REQUEST_URL);
    const status = await request.json();

    return status;
  } catch (error) {
    console.error(error);
  }
}

export async function deleteOrder(id) {
  try {
    const REQUEST_URL = `${BACKEND_URL}:${BACKEND_PORT}/burgers/${id}`;
    const request = await fetch(REQUEST_URL, { method: "DELETE" })
    const response = await request.json();
    return response;
  } catch (error) {
    console.error(error);
  }
}