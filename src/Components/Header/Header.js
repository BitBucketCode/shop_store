import React from "react";
import s from './Header.module.css'

export default function Header() {
    return (
        <header>
            <div>
                <span className={s.logo}>House Goods</span>
                <ul className={s.nav}>
                    <li>About us</li>
                    <li>Contacts</li>
                    <li>Add to cart</li>
                </ul>
            </div>
            <div className={s.presentation}>

            </div>
        </header>
    )
}
