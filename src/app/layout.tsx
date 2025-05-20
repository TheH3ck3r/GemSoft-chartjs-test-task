import type { Metadata } from "next";
import { ReactNode } from "react";
import "./global.scss";
import { Page } from "@/components";

export const metadata: Metadata = {
  title: "GemSoft Chastjs Test Task",
  description: "Nechaev M.A. chartjs test task in Gemsoft",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang={"en"}>
      <body>
        <Page>{children}</Page>
      </body>
    </html>
  );
}
