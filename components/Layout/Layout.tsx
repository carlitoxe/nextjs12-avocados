import Footer from "@components/Footer/Footer"
import Navbar from "@components/Navbar/Navbar"

type LayoutProps = {
    children?: React.ReactNode
  }

export default function Layout({ children }: LayoutProps) {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    )
}