import { PropsWithChildren } from 'react';
import 'styles/main.css';
import Navbar from './navbar';

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className="bg-black overflow-hidden w-[100vw] h-[100vh]">
        <main className="w-full h-full flex flex-col">
          <Navbar />
          <div className="overflow-scroll">{children}</div>
        </main>
      </body>
    </html>
  );
}
