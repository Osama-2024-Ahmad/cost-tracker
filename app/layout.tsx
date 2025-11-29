import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Navbar from "./components/Navbar";
import ClientOnly from "./components/ClientOnly";
import ErrorBoundary from "./components/ErrorBoundary";
import { Toaster } from "@/components/ui/sonner"

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"], // أضف 900
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Tracker Cost AI",
  description: "Take control of your money with Tracker Cost AI",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/Logo3.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ErrorBoundary>
      <ClerkProvider>
        <html lang="en" suppressHydrationWarning>
          <body className={`${roboto.variable} font-roboto antialiased`}>
            <script dangerouslySetInnerHTML={{
              __html: `
                (function() {
                  // Remove elements from browser extensions that might cause hydration issues
                  const extensionElements = document.querySelectorAll('[id*="ultimate-toolbar"], [id*="gpt"], [class*="ul-sticky"]');
                  extensionElements.forEach(el => {
                    if (el.parentNode) {
                      el.parentNode.removeChild(el);
                    }
                  });
                })();
              `
            }} />
            <ClientOnly>
              <Navbar />
            </ClientOnly>
            {children}
             <Toaster />
          </body>
        </html>
      </ClerkProvider>
    </ErrorBoundary>
  );
}