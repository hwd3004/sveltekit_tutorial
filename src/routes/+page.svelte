<script lang="ts">
  // src/routes/+page.svelte

  import { pokemons } from "../stores/pokestores";
  import PokemonCard from "../components/pokemonCard.svelte";
  import type IPokemon from "src/interfaces/IPokmen";

  setTimeout(() => {
    console.log($pokemons);
  }, 2000);

  // 검색어
  let searchTerm = "";

  let filteredPokemon: any[] = [];

  $: {
    console.log(searchTerm);

    if (searchTerm) {
      // search the pokemon
      filteredPokemon = $pokemons.filter((pokemon: IPokemon) => {
        return pokemon.name.toLowerCase().includes(searchTerm.toLowerCase());
      });
    } else {
      filteredPokemon = [...$pokemons];
    }
  }
</script>

<svelte:head>
  <title>Svelte Kit Pokedex</title>
</svelte:head>

<h1 class="text-4xl text-center my-8 uppercase">Learn SvelteKit with Pokedex</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<a href="/about">About my site</a>

<input
  class="w-full rounded-none text-lg p-4 border-2 border-gray-200"
  type="text"
  placeholder="Search Pokemon"
  bind:value={searchTerm}
/>

<div class="py-4 grid gap-4 md:grid-cols-2 grid-cols-1">
  <!-- {#each $pokemons as pokemon}
    <PokemonCard {pokemon} />
  {/each} -->
  {#each filteredPokemon as pokemon}
    <PokemonCard {pokemon} />
  {/each}
</div>
