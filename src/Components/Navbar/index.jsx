import { ShoppingCartIcon } from '@heroicons/react/24/solid'
import { useContext } from 'react'
import {ShoppingCartContext} from '../../Context'
import { NavLink } from "react-router-dom"

const Navbar = () => 
{
    const context  = useContext(ShoppingCartContext)
    const activateStyle = 'underline underline-offset-4'


    return(
        <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm '>
            <ul className='flex items-center gap-3'>
                <li className="font-semibold text-lg">
                    <NavLink to='/' 
                    >
                        Shopi
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/'
                    onClick={() => context.setSearchByCategory()}
                    className={({isActive}) => 
                        isActive ? activateStyle : undefined}>
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/clothes'
                    onClick={() => context.setSearchByCategory('clothes')}
                    className={({isActive}) => 
                        isActive ? activateStyle : undefined
                    }>
                        Clothes
                    </NavLink>
                </li>                
                <li>
                    <NavLink 
                    to='/electronics'
                    onClick={() => context.setSearchByCategory('electronics')}
                    className={({isActive}) => 
                    isActive ? activateStyle : undefined
                    }>
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/furnitures'
                    onClick={() => context.setSearchByCategory('furniture')}
                    className={({isActive}) => 
                        isActive ? activateStyle : undefined
                    }>
                        Furnitures
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/toys'
                    onClick={() => context.setSearchByCategory('toy')} 
                    className={({isActive}) => 
                        isActive ? activateStyle : undefined
                    }>
                        Toys
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/others'
                    onClick={() => context.setSearchByCategory('other')}
                    className={({isActive}) => 
                        isActive ? activateStyle : undefined
                    }>
                        Others
                    </NavLink>
                </li>
                
                
            </ul>
            <ul className='flex items-center gap-3'>
                <li className="text-black/60">
                    patron@gmail.com
                </li>
                <li>
                    <NavLink to='/my-orders'>
                        My Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/my-account'>
                        My Account
                    </NavLink>
                </li>                
                <li>
                    <NavLink 
                        to='/sign-in'
                        className={({isActive}) => 
                        isActive ? activateStyle : undefined
                    }>
                        Sign In
                    </NavLink>
                </li>
                <li className='flex items-center justify-center'>
                    <ShoppingCartIcon className='h-6 w-6 text-black'/>
                    <div>
                        {context.cartProducts.length}
                    </div>
                </li>

                
                
            </ul>
        </nav>
    )
}

export default  Navbar;