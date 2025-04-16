import './globals.css';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '../../04_shared/components/theme-provider';
import { Toaster } from 'sonner';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Dashboard | SaaS Template',
  description: 'Authenticated dashboard for SaaS template',
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
