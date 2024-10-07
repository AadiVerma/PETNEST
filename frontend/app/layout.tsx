import type { Metadata } from "next";
import { Fredoka } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import { Provider } from "../redux/store/store";
import {store} from "../redux/store/store";
const amaticSc = Fredoka({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-Fredoka",
});
export const metadata: Metadata = {
  title: "PetNest",
  description: "Giving animals a second chance, one adoption at a time",
  icons: {
    icon: '/Paws.png'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${amaticSc.variable} ${amaticSc.style} ${amaticSc.className} antialiased p-0 m-0 flex flex-col h-screen`}
      >
        <Provider store={store}>
          <Header />
          <main className="flex-1">
          {children}
        </main>
        </Provider>
      </body>
    </html>
  );
}
