import type { Metadata } from 'next';

import { Toaster } from '@/components/ui/toaster';
import { baseDomain, blogDesc, blogName, blogThumbnailURL } from '@/config/const';
import '@/config/globals.css';
import { Footer } from '@/layouts/Footer';
import { Header } from '@/layouts/Header';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

export const metadata: Metadata = {
  metadataBase: new URL(baseDomain),
  title: blogName,
  description: blogDesc,
 
 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='h-full scroll-my-20 scroll-smooth' suppressHydrationWarning>
      <body className='flex min-h-screen flex-col font-pretendard'>
       
       
            <Header />
            <main className='mt-[40px] flex flex-1 flex-col sm:mt-[64px]'>{children}</main>
            <Footer />
         
          <Toaster />
          <Analytics />
          <SpeedInsights />
      </body>
    </html>
  );
}
