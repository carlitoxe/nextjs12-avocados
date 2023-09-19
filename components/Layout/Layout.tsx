import Navbar from "@components/Navbar/Navbar"

export default function Layout({ children }) {
    return (
        <div>
            <Navbar />
            {children}
            <footer className="footer text-center mt-12 mb-2">
               <p>        
                Made with 💙 by <a href="https://github.com/carlitoxe" className="hover:text-blue-700 text-blue-500" target="_blank" rel="noreferrer">carlitoxe</a>
                </p>   
            </footer>
        </div>
    )
}