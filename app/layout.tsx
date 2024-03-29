import { Metadata } from "next";
import Navigation from "../components/navigation/navigation";
import "./global.css";

export const metadata: Metadata = {
  title: {
    template: "%s | Learn next.js 14",
    default: "aristatait"
  },
  description: "Generated by Next.js"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
