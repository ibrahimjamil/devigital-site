import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { useRouter } from 'next/router';

export default function Layout({ children }) {
    const router = useRouter();
    return (
        <>
            <Header carousalIndex={router.pathname === '/' ? 0 : 1} />
            <main>{children}</main>
            <Footer />
        </>
    );
}
