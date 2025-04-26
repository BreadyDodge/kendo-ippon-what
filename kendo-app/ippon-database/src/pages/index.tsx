import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-3 bg-gradient-to-b from-blue-900 to-violet-400">
      <h1 className="rounded-md bg-white px-2 py-1 text-5xl font-bold">
        Kendo ippon database
      </h1>
      <h2 className="text-2xl">What do you want to do?</h2>
      <div className="flex gap-5">
        <Link
          className="rounded bg-neutral-300 px-2 py-1 hover:bg-neutral-500"
          href="/add-ippon"
        >
          Add ippon
        </Link>
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
