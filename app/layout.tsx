import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Background from "@/components/layout/Background";
import { ToastProvider } from "@/components/common/Toast";
import { MockDataProvider } from "@/context/MockDataContext";
import SplashScreen from "@/components/common/SplashScreen";
import ErrorBoundary from "@/components/common/ErrorBoundary";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "PlayBox - Gaming Lounge Booking Platform",
  description: "Book PS5, Xbox, and PC gaming slots. Organize gaming parties. Discover the best gaming lounges near you.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${poppins.variable} antialiased min-h-screen relative`}
      >
        <Background />

        {/* Main Content Wrapper */}
        <div className="relative z-10">
          <MockDataProvider>
            <SplashScreen />
            <ToastProvider>
              <ErrorBoundary>
                {children}
              </ErrorBoundary>
            </ToastProvider>
          </MockDataProvider>
        </div>
      </body>
    </html>
  );
}
