import '@/app/ui/global.css';
import { interLatinFontFamily } from './ui/fonts/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${interLatinFontFamily.className} antialiased`}>{children}</body>
    </html>
  );
}
