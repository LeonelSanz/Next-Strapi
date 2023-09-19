import { API_URL, STRAPI_URL } from "../config";

export async function getGames({ page = 1 }) {
  // Validar que "page" sea un número entero positivo
  if (!Number.isInteger(page) || page <= 0) {
    page = 1
  }

  const res = await fetch(
    `${API_URL}/videogames?populate[platforms][fields][0]=name&populate[cover][fields][0]=url&pagination[pageSize]=1&pagination[page]=${page}`
  )
  if (!res.ok) {
    const errorData = await res.json(); // Obtener datos de error del servidor si están disponibles
    throw new Error(`Error: ${res.status} - ${errorData.message}`);
  }

  const { data, meta } = await res.json()
  const { pagination } = meta
  return { data, pagination }
}

export function getCoverImage({ attributes }) {
  const { url } = attributes.cover.data.attributes
  return `${STRAPI_URL}${url}`
}