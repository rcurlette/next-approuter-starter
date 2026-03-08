
import "../styles/styles.css";
import { Inter, Oswald } from "next/font/google";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

const oswald = Oswald({ 
  subsets: ["latin"],
  variable: "--font-oswald",
});

export const metadata = {
  title: "Composable GP | Where Speed Meets Strategy",
  description: "The ultimate F1 fan experience. Follow the Composable GP Championship with live standings, driver profiles, race schedules, and breaking news.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${oswald.variable}`}>
      <body className="min-h-screen bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
