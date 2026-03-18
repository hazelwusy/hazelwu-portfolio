import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import Script from "next/script"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Hazel Wu Personal Portfolio",
  description:
    "Recent UNC-Chapel Hill graduate in Health Policy & Management and Information Science. Looking for entry-level roles in health tech — product, strategy, analytics, and operations.",
  keywords: [
    "Health Tech",
    "Product Management",
    "Strategy",
    "Analytics",
    "Operations",
    "UNC Chapel Hill",
    "Shuyan Wu",
    "Hazel Wu",
    "Morehead-Cain Scholar"
  ],
  generator: "v0.app",
  openGraph: {
    title: "Hazel Wu Personal Portfolio",
    description:
      "Recent UNC-Chapel Hill graduate in Health Policy & Management and Information Science. Looking for entry-level roles in health tech.",
    type: "website",
    locale: "en_US",
    url: "https://hazelwu.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hazel Wu Personal Portfolio",
    description:
      "Recent UNC-Chapel Hill graduate in Health Policy & Management and Information Science. Looking for entry-level roles in health tech.",
  },
  alternates: {
    canonical: "https://hazelwu.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-L3XQRP3SR9" />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-L3XQRP3SR9', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Shuyan Hazel Wu",
              url: "https://hazelwu.com",
              jobTitle: "Health Tech Professional",
              email: "hazelwu@ad.unc.edu",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Chapel Hill",
                addressRegion: "NC",
                addressCountry: "US",
              },
              alumniOf: "University of North Carolina at Chapel Hill",
              knowsAbout: ["Health Tech", "Product Management", "Strategy", "Analytics", "Health Policy"],
            }),
          }}
        />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
