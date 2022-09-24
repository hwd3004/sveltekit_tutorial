```svelte
<script>
  // @ts-nocheck

  /** @type {import('./$types').PageData} */
  export let data;
</script>

<h1>{data.title}</h1>
<div>{@html data.content}</div>
```

```ts
import { error } from "@sveltejs/kit";

/** @type {import('./$types').PageLoad} */
export function load(props: any) {
  if (props.params.slug === "hello-world") {
    return {
      title: "Hello world!",
      // content: "Welcome to our blog. Lorem ipsum dolor sit amet...",
      content: JSON.stringify(props),
    };
  }

  throw error(404, "Not found");
}
```
