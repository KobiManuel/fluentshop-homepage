import localFont from "next/font/local";
import "./globals.css";

const generalSans = localFont({
  src: "./fonts/GeneralSans_Complete/Fonts/WEB/fonts/GeneralSans-Variable.woff2",
  variable: "--font-general-sans",
});

const clashGrotesk = localFont({
  src: "./fonts/ClashGrotesk_Complete/Fonts/WEB/fonts/ClashGrotesk-Variable.woff2",
  variable: "--font-clash-grotesk",
});

export const metadata = {
  title: "fluentshop.ai",
  description: "A creator powered marketplace for modern startup teams",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" style={{ overflowX: "hidden" }}>
      <body className={`${generalSans.variable} ${clashGrotesk.variable}`}>
        {children}
      </body>
    </html>
  );
}
