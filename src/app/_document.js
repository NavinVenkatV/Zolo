// pages/_app.js or _document.js (for global font)

import { Inter, Roboto } from 'next/font/google';
import './globals.css';

// Importing the Inter font
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-inter', // Optional: Custom variable for font
});

// Importing the Roboto font
const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-roboto', // Optional: Custom variable for font
});

export default function App({ Component, pageProps }) {
  return (
    <div className={`${inter.variable} ${roboto.variable} antialiased`}>
      <Component {...pageProps} />
    </div>
  );
}
