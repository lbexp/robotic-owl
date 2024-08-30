import { type PropsWithChildren } from "react";

function Layout({ children }: PropsWithChildren) {
  return (
    <main className="max-w-96 min-h-screen m-auto p-16 flex flex-col justify-center items-center gap-24">
      {children}
    </main>
  );
}

export default Layout;
