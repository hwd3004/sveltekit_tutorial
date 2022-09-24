import { error } from "@sveltejs/kit";

/** @type {import('./$types').PageLoad} */
export function load(data: any) {
  if (data.params.slug === "hello-world") {
    return {
      title: "Hello world!",
      content: "Welcome to our blog. Lorem ipsum dolor sit amet...",
      data: JSON.stringify(data),
    };
  }

  throw error(404, "Not found");
}
