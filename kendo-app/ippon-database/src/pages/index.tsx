import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-3 bg-gradient-to-b from-blue-900 to-violet-400">
      <a
        href="/add-tournament"
        className="rounded-md bg-white px-2 py-1 text-5xl font-bold hover:cursor-default"
      >
        Kendo ippon database
      </a>
      <h2 className="text-2xl">What do you want to do?</h2>
      <div className="flex items-start gap-5">
        <Link
          className="rounded bg-neutral-300 px-2 py-1 hover:bg-neutral-500"
          href="/add-ippon"
        >
          Add ippon
        </Link>
        <div>
          <Link
            className="flex h-28 w-64 items-center justify-center rounded-xl bg-neutral-300 px-4 py-2 text-2xl font-semibold hover:bg-neutral-500"
            href="/start-match"
          >
            Start a match
          </Link>
        </div>
        <Link
          className="rounded bg-neutral-300 px-2 py-1 hover:bg-neutral-500"
          href="/get-ippon"
        >
          Search ippon
        </Link>
      </div>
    </div>
  );
}
