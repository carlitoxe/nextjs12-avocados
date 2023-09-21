import Link from "next/link"
import { useRouter } from "next/router";

const navLinks = [
    {name: 'Home', path: '/'},
    {name: 'About', path: '/about'}
]

export default function Navbar() {
    const router = useRouter()
    return (
        <header>
            <nav className="">
                <ul className="flex gap-1 justify-around my-4 pb-3 border-gray-400 border-b text-2xl" >
                    
                {   
                    navLinks.map((link) => {
                        const isActive = router.pathname === link.path;
                        return (
                            <li key={link.name} >
                                 <Link 
                                    key={link.name} 
                                    href={link.path} 
                                    className={isActive ? 'text-lime-400 font-medium': 'text-white'}
                                  >
                                    {link.name}
                                </Link>
                            </li>

                        )
                    })
                }
                
                    {/* <li className={router.pathname == '/about' ? "active" : ''}>
                       <Link href={'/about'}>About</Link> 
                    </li> */}
                </ul>
            </nav>
        </header>
    )
}