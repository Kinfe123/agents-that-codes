import Link from "next/link";

const title = "Coding Agent Template";
const description = "A template for building AI powered coding agents that supports Claude Code, OpenAI's Codex CLI, Cursor CLI, and opencode with Vercel Sandbox to automatically execute coding tasks on your repositories.";

export default function HomePage() {
  return (
    <main style={{ padding: 32 }}>
      <h1>{title}</h1>
      <p>{description}</p>
      <p>Author markdown in <code>docs/</code> and <code>api-reference/</code>.</p>
      <Link href="/docs">Open docs</Link>
    </main>
  );
}
