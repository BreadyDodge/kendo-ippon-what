import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <main className="flex flex-col gap-5">
      <div className="items-center justify-center">{children}</div>
      <a
        href="/"
        className="mx-5 rounded-md bg-neutral-300 px-2 text-center hover:bg-neutral-500"
      >
        Back to home page
      </a>
    </main>
  );
}
