import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Kebodel Ngoumbe Kenne — Software Engineer',
  description: 'Portfolio of Kebodel Ngoumbe Kenne, Applied Computer Science student at Hochschule Worms, specializing in Software Engineering & Development.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
