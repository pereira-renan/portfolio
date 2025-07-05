import type { Metadata } from "next";
import { Nunito, Nunito_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/utils/cn";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { BASE_URL } from "@/app/sitemap";
import { ThemeProvider } from "@/components/theme-provider";

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Renan Pereira | Portfolio",
    template: "%s | Renan Pereira | Portfolio",
  },
  description: "This is Renan Pereira's portfolio.",
  openGraph: {
    title: "Renan Pereira | Portfolio",
    description: "This is Renan's portfolio.",
    url: BASE_URL,
    siteName: "Renan Pereira | Portfolio",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(nunitoSans.variable, nunito.variable)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div id="root" className="root">
            <div className="absolute inset-0 flex flex-col overflow-hidden">
              <div className="flex h-full flex-col items-center lg:pb-10">
                <Header className="sticky top-0 z-50 flex h-20 w-full max-w-screen-2xl items-center justify-between px-8 py-5" />
                <main className="w-full flex-1 overflow-y-auto">
                  <div className="mx-auto h-full max-w-screen-xl px-8 py-5">
                    {children}
                  </div>
                </main>
              </div>
              <Footer className="sticky bottom-0 z-50 hidden h-5 w-full items-center justify-end px-4 py-6 opacity-50 lg:flex" />
              <Analytics />
              <SpeedInsights />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
