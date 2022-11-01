import { error } from "@sveltejs/kit";

/** @type {import('./$types').PageServerLoad} */
export async function load(props: any) {
  try {
    const {
      params: { id },
    } = props;

    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

    const res = await fetch(url);

    const pokemon = await res.json();

    return { pokemon, data: JSON.stringify(props) };
  } catch (e: any) {
    throw error(404, e);
  }

  throw error(404, "Not found");
}
