import Link from "next/link"
import Image from "next/image";
import { useRouter } from "next/router";
import { useCart } from "@store/Cart";

const navLinks = [
    {name: 'Home', path: '/'},
    {name: 'Cart', path: '/cart'}
]

export default function Navbar() {
    const { count: cartCount } = useCart()
    console.log(cartCount);
    
      const showCartCount = () => {
    if (!cartCount) {
      return <span className="text-2xl pl-1">(0)</span>
    }
    if (cartCount > 9) {
      return (
        <span className="text-2xl pl-1 font-medium">
          (9<sup>+</sup>)
        </span>
      )
    }
    return (
      <span className="text-2xl pl-1">
         ({cartCount})
      </span>
    )
  }

    const { pathname } = useRouter()
    
    return (
        <header>
            <nav className="">
                <ul className="flex gap-1 justify-around my-4 pb-3 border-gray-400 border-b text-2xl" >
                    
                {   
                    navLinks.map((link) => {
                        const isActive = pathname === link.path;
                        return (
                            <li key={link.name} className="">
                                 <Link 
                                    key={link.name} 
                                    href={link.path} 
                                    className={isActive ? 'text-lime-400 font-medium': 'text-white'}

                                  >
                                    <div className="flex">
                                      {link.path === '/cart' ? 
                                                              <><Image src="/images/cart.png" alt={`${link.name} icon`} width={32} height={32} /><p className="pl-1">{link.name}</p></> : 
                                                              <><Image src="/images/home.png" alt={`${link.name} icon`} width={32} height={32} /><p className="pl-1">{link.name}</p></>
                                      }
                                      
                                      {link.path === '/cart' ? showCartCount() : null}
                                    </div>

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