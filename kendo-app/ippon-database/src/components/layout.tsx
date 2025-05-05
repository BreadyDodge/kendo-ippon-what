import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center gap-5 bg-gradient-to-b from-blue-900 to-violet-400">
      <div className="items-center justify-center">{children}</div>
      <a
        href="/"
        className="fixed bottom-5 right-5 z-50 rounded-md bg-neutral-300 px-4 py-2 text-center hover:bg-neutral-500"
      >
        Back to home page
      </a>
    </main>
  );
}
