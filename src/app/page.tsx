import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Welcome to Frontend with OOP</h1>
      <p>
        Click any links to get started, though it means nothing before you check
        the code on{" "}
        <a
          href="https://github.com/messi-yang/frontend-with-oop"
          target="__blank"
          className="text-blue-500"
        >
          Github
        </a>
        .
      </p>
      <div className="flex flex-col">
        <Link href="/case-i/bad-sample" className="text-blue-500">
          Case I - Bad Sample
        </Link>
        <Link href="/case-i/bad-sample" className="text-blue-500">
          Case I - Good Sample
        </Link>
      </div>
    </main>
  );
}
