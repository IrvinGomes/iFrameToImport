import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useState } from 'react'
import Storefronts from './components/storefront'
import { SimpleIFrame } from './components/simpleIFrame'
import Header from './components/header'
import Footer from './components/footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
	const [open, setOpen] = useState(false)
	const [option, setOption] = useState(2)

	const handleOpen = ()=>{
		setOpen(!open)
	}

		const isOpen = ()=>{
		return (<ul className="menu">
			<li className="menu-item">
				<button onClick={()=>handleMenuOption(1)}>Simple iFrame</button>
			</li>
			<li className="menu-item">
				<button onClick={()=>handleMenuOption(2)}>Storefronts</button>
			</li>
			</ul>)
	}

		const handleMenuOption = (value:number)=>{
			setOption(value)
			setOpen(!open)
		}

	return (
		<div className='page'>
			<Header/>
        <div className='content'>
          <Storefronts />
        </div>
			<Footer/>
		</div>
	)
}
