import './globals.css';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@shared/components/theme-provider';
import { Toaster } from 'sonner';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'SaaS Template',
  description: 'Micro-services SaaS landing page',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <Toaster richColors />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
