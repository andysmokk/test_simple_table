import { Manrope } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "../providers/ThemeProvider";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata = {
  title: "List",
  description: "Generate your list",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${manrope.className} h-screen dark:bg-basicBg-dark`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
