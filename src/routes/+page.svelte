<script>
  import { pokemons } from "../stores/pokestores";
  console.log($pokemons);

  setTimeout(() => {
    console.log($pokemons);
  }, 1000);
</script>

<svelte:head>
  <title>Svelte Kit Pokedex</title>
</svelte:head>

<h1 class="text-4xl text-center my-8 uppercase">Learn SvelteKit with Pokedex</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<a href="/about">About my site</a>

{#each $pokemons as pokemon}
  <p>{pokemon.name}</p>
{/each}
