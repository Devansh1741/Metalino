import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "../components/layout/Header";

const roboto = Roboto({ subsets: ["latin"], weight: ['400', '500', '700'] });

export const metadata = {
  title: "Metalino",
  description: "A meta Italino",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <main className="max-w-6xl mx-auto p-4">
        <Header />
          {children}
          <footer className="border-t p-4 text-center text-gray-500 mt-8">
            &copy; 2024 All rights reserved
          </footer>
        </main>
        </body>
    </html>
  );
}
