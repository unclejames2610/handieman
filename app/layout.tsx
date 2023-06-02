import "./globals.css";
// import { Inter, Manrope } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });

// export const manrope = Manrope({
//   subsets: ["latin"],
// });

export const metadata = {
  title: "HandieMan",
  description: "Where customers and professional artisans meet.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-main-dark">{children}</body>
    </html>
  );
}
