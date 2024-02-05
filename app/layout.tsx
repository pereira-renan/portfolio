import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/theme-provider";
import Header from "@/components/elements/site-header";
import Footer from "@/components/elements/site-footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Renan Pereira",
  description: "This is a portfolio website created by Renan Pereira.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <main className="flex min-h-screen flex-col items-center lg:px-24 md:px-16 px-8">
            <Header />
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
