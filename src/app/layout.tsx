import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import NavBar from '@/components/nav-bar/NavBar';
import RegisterModal from '@/components/modals/RegisterModal';
import ToasterProvider from '@/providers/ToasterProvider';
import LoginModal from '@/components/modals/LoginModal';
import getCurrentUser from '@/actions/getCurrentUser';
import RentModal from '@/components/modals/RentModal';
import SessionAuthProvider from '@/providers/SessionAuthProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Airbnb App',

  description: 'Airbnb app',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();
  return (
    <html lang='en'>
      <body className={inter.className}>
        <SessionAuthProvider>
          <ToasterProvider />
          <RegisterModal />
          <RentModal />
          <LoginModal />
          <NavBar currentUser={currentUser} />
          {children}
        </SessionAuthProvider>
      </body>
    </html>
  );
}
