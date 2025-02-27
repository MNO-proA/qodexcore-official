import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import HeaderSection from "@/components/Header";
import { HeaderProvider } from "@/context/HeaderContext";
import { Toaster } from "@/components/ui/sonner"



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Qodexcore",
  description: "Innovation In Business",
  icons: {
    icon: [{ url: "/favicon_qodexcore.svg", type: "image/svg+xml" }],
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <HeaderProvider>
          <HeaderSection />
          {children}
          <Toaster />
        </HeaderProvider>
      </body>
    </html>
  );
}
