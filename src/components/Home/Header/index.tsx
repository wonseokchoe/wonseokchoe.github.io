import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LightBulb from '@assets/svg/LightBulb'

import styles from './index.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles)

const Header = ({...props}) => {
    const [isDark, setDark] = useState(false)
    const lightBulbColor = isDark ? '#d3d3d3' : '#FFE46A';
    const pilamentColor = isDark ? '#888' : '#FAAF63'
    useEffect(()=> {props.onChange(isDark)})
    const OnChange = () => {
        setDark(isDark => !isDark)
    }
    return (
        <div className={cx('header')}>
            <Link to="/" className={cx('logo')}>Blog</Link>
            <div className={cx('list-nav')}>
                <Link to="/bbs" className={cx('nav')}>Posts</Link>
            </div>
            <button
                type="button"
                className={cx('button_theme')}
                onClick={OnChange}
            >
                <LightBulb width={30} height={30} lightBulbColor={lightBulbColor} pilamentColor={pilamentColor} />
                <span className={cx('blind')}>다크모드 토글</span>
            </button>
        </div>
    )
}

export default Header;
