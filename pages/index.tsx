import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useState } from 'react'
import Storefronts from './components/storefront'
import { SimpleIFrame } from './components/simpleIFrame'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
	const [open, setOpen] = useState(false)
	const [option, setOption] = useState(1)

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
		<main>
			<h1>Main Page</h1>
			<div className='page'>
				<button onClick={handleOpen} className='dropdownBtn'>Dropdown</button>
				{open? isOpen(): null }
					<div className="content">
						{option == 1? <SimpleIFrame/>: <Storefronts/>}
					</div>
			</div>
		</main>
	)
}
