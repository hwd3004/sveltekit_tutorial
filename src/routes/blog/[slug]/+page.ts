import { error } from "@sveltejs/kit";

/** @type {import('./$types').PageLoad} */
export function load(props: any) {
  if (props.params.slug === "hello-world") {
    return {
      title: "Hello world!",
      content: "Welcome to our blog. Lorem ipsum dolor sit amet...",
      data: JSON.stringify(props),
    };
  }

  throw error(404, "Not found");
}
