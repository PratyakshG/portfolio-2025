import {
  Anton,
  Bebas_Neue,
  Dela_Gothic_One,
  Poppins,
  Space_Mono,
} from "next/font/google";
import React from "react";
import "./globals.css";
import { ReactLenis } from "lenis/react";
import { ViewTransitions } from "next-view-transitions";

const delaGothicOne = Dela_Gothic_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-dela-gothic-one",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
});

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas-neue",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
});

export const metadata = {
  title: "Pratyaksh Gupta",
  description: "Personal Portfolio - Pratyaksh Gupta",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ViewTransitions>
      <html lang="en">
        <ReactLenis root>
          <body
            className={`${poppins.variable} ${delaGothicOne.variable} ${anton.variable} ${bebasNeue.variable} ${spaceMono.variable} antialiased overflow-x-hidden`}
          >
            {children}
          </body>
        </ReactLenis>
      </html>
    </ViewTransitions>
  );
}
