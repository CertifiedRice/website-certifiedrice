import Footer from "./Footer"
import Navbar from "./Navbar";
import Head from "next/head";

const Layout = ({ children }) => {
    return (
        console.log("%c CertifiedRice was here!", "color: cyan; font-weight: bold;"),
        <div className="content">
            <Head>
                <link rel="icon" href="https://avatars.githubusercontent.com/certifiedrice" />
                <title>CertifiedRice</title>
            </Head>
            <Navbar />
            {children}
            <Footer />
        </div>
    );
}

export default Layout;