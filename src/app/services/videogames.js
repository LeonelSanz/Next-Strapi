import { API_URL, STRAPI_URL } from "../config";

export async function getGames({ page = 1 }) {
    const res = await fetch(
      `${API_URL}/videogames?populate[platforms][fields][0]=name&populate[cover][fields][0]=url&paginatio[page]=${page}&pagination[pageSize]=1`
    );
    if (!res.ok) {
      throw new Error("Something went wrong");
    }
    const { data, meta } = await res.json();
    const { pagination } = meta
    return { data, pagination };
}

export function getCoverImage ({ attributes }) {
    const { url } = attributes.cover.data.attributes
    return `${STRAPI_URL}${url}`
}