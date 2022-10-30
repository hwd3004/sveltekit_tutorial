import { error } from "@sveltejs/kit";
import type { PageLoad } from "./$types";

export const load: PageLoad = async (props) => {
  try {
    const {
      params: { id },
    } = props;

    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

    const res = await fetch(url);

    const pokemon = await res.json();

    return { pokemon, data: JSON.stringify(props) };
  } catch (e) {
    throw error(404, "Not found");
  }
};
