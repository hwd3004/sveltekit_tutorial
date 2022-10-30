<script lang="ts">
  // src/components/PokemonCard.svelte

  import type IPokemon from "../interfaces/IPokmen";

  export let pokemon: IPokemon;
</script>

<a
  class="p-6 bg-gray-100 text-gray-800 text-center rounded-md shadow-sm hover:shaodw-md flex flex-col items-center mb-4"
  href={`/pokemon/${pokemon.id}`}
>
  <img class="h-40 w-40" src={pokemon.image} alt={pokemon.name} />
  <h2 class="uppercase text-2xl">{pokemon.id}. {pokemon.name}</h2>
</a>
