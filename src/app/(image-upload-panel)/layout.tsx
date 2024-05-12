import type { Metadata } from "next";
import "../(client-panel)/globals.css";
import { Providers } from "../(client-panel)/Providers";

export const metadata: Metadata = {
  title: "Sharlow Speed SHop",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {" "}
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}