import { ReactNode } from "react";
import "./global.css";
import { Navbar } from "./components/Navbar";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className="max-w-screen-xl mx-auto mt-12">{children}</div>
      </body>
    </html>
  );
}
