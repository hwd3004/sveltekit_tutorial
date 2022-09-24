<script>
  // @ts-nocheck

  /** @type {import('./$types').PageData} */
  export let data;
</script>

<h1>{data.title}</h1>
<div>{@html data.content}</div>
<div>{@html data.data}</div>
