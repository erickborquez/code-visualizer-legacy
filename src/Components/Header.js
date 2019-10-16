/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from "react";
import '../Styles/Header.css'
import { BrowserRouter as Router, Link } from "react-router-dom";

import { ReactComponent as Logo } from '../SVGs/logo.svg'

import { RouteContext } from '../providers/RouterProvider'


const Header = ({ title, setTitle }) => {

    const baseURL = useContext(RouteContext);
    return (
        <header className="header">
            <Link to={`${baseURL}`} className="header-brand">
                <Logo className="header-brand-logo" />
                <h1 className="header-brand-name">Algorithm Visualizer</h1>
            </Link>
            <div className="header-algorithm">
                <input value={title}
                    className="header-algorithm-name"
                    onKeyDown={e => {
                        if (e.key === 'Escape' ||
                            e.key === "Enter" ||
                            e.key === "Tab")
                            e.target.blur();
                    }}
                    onChange={e => setTitle(e.target.value.slice(0, 25))}
                    onBlur={e => e.target.value === '' ? setTitle("Undefined") : null}
                />
            </div>
        </header>
    )
}
export default Header;