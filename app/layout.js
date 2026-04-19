import './globals.css';
import ChatBotWidget from '../components/ChatBotWidget';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Web3Background from '../components/Web3Background';

export const metadata = {
  title: 'Marvin Amofa Marfo | Full Stack + DevOps Engineer',
  description:
    'Full-stack engineer with 10+ years experience in React, Next.js, Node.js, Kubernetes, Terraform, and cloud architecture. Building enterprise-grade systems and infrastructure.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-950 text-slate-100 antialiased">
        <Web3Background />
        <div className="flex min-h-screen flex-col relative z-10">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <ChatBotWidget />
        </div>
      </body>
    </html>
  );
}
