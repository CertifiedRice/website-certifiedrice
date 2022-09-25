import Navbar from "./Navbar";
import Head from "next/head";

const Layout = ({ children }) => {
    return (
        <div className="content">
            <Head>
                <link rel="icon" href="https://avatars.githubusercontent.com/certifiedrice" />
                <title>CertifiedRice</title>
            </Head>
            <Navbar />
            {children}
            {/* <Foot /> */}
        </div>
    );
}

export default Layout;