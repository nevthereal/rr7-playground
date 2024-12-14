import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "React Router Playground" },
    { name: "description", content: "idk" },
  ];
}

export async function clientLoader() {}

export default function Home() {
  return (
    <div>
      <p>Hello World</p>
    </div>
  );
}
