import "./globals.css";


export const metadata = {
  metadataBase: "https://flickertv.live",
  title: "Flicker TV",
  description: "Flicker TV is an open source quote generator that generates random quote. It's a great way to get started with open source.",
  image: "https://i.postimg.cc/yNwwpqR0/image.png",
  keywords: ["Flicker", "tv", "quote", "generator", "open", "source"],
  openGraph: {

    images: [
      {
        url: "https://i.postimg.cc/yNwwpqR0/image.png",
      },
    ],
  },
  twitter: {
    images: [
      {
        url: "https://i.postimg.cc/yNwwpqR0/image.png",
        color: "#ffffff",
      },
    ]
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body>
      {children}
      </body>
    </html>
  );
}