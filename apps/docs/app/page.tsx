import Link from "next/link";

const title = "Coding Agent Template";
const description = "A web project implemented with SQL, TypeScript source files.";

export default function HomePage() {
  return (
    <main style={{ padding: 32 }}>
      <h1>{title}</h1>
      <p>{description}</p>
      <Link href="/docs">Open docs</Link>
    </main>
  );
}
