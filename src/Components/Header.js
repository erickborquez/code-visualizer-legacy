/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import '../Styles/Header.css'
import { ReactComponent as Edit } from '../SVGs/edit.svg'
import { ReactComponent as Logo } from '../SVGs/logo.svg'

const Header = () => {
    return (
        <header className="header">
                <a href="#" className="header-brand">
                    <Logo className="header-brand-logo" />
                    <h1 className="header-brand-name">Algorithm Visualizer</h1>
                </a>
            <div className="header-algorithm">
                <h2 className="header-algorithm-name ">Bubble sort</h2>
                <Edit className='header-edit' />
            </div>
        </header>
    )
}
export default Header;