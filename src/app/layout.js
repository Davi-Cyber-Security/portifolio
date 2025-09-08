import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Davi Gabriel - Desenvolvedor Full Stack Junior",
  description: "Portfólio de Davi Gabriel Ferreira Batista - Desenvolvedor Full Stack Junior especializado em JavaScript, React, Node.js e tecnologias modernas",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/meuPerfil.jpeg" type="image/jpeg" />
        <link rel="apple-touch-icon" href="/meuPerfil.jpeg" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
