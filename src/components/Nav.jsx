import { Form, NavLink } from 'react-router-dom'
import { MoonIcon, SunIcon, TrashIcon } from '@heroicons/react/24/solid'
import logomark from '../assets/logomark.svg'
import { useEffect, useState } from 'react'

const Nav = ({ userName, getMode }) => {
    const val = localStorage.getItem("mode") === null ? "light" : localStorage.getItem("mode");
    const [mode, setMode] = useState(val)

    const changeMode = () => {
        setMode(mode === "light" ? "dark" : "light");
        localStorage.setItem("mode", mode);
    }

    useEffect(() => {
        getMode(mode);
    }, [changeMode])

    return (
        <nav>
            <NavLink to="/" aria-label='Go to home'>
                <img src={logomark} alt="" height={30} />
                <span>HomeBudget</span>
            </NavLink>
            {
                mode === "light" ? (
                    <button className='btn modeBtn' onClick={changeMode}>
                        <MoonIcon width={26} color='#EBC815' />
                    </button>
                ) : (
                    <button className='btn modeBtn' onClick={changeMode}>
                        <SunIcon width={26} color='#FDB813' />
                    </button>
                )
            }
            {
                userName && (
                    <Form
                        method='post'
                        action='/logout'
                        onSubmit={e => {
                            if (!confirm("Delete user and all data?")) {
                                e.preventDefault()
                            }
                        }}
                    >
                        <button type='submit' className='btn btn--warning'>
                            <span>Delete User</span>
                            <TrashIcon width={20} />
                        </button>
                    </Form>
                )
            }
        </nav>
    )
}

export default Nav
