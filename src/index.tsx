import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory as history } from 'history'
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import MyPost from '@pages/post/MyPost';
import Bbs from '@pages/bbs';
import Header from '@components/Home/Header';
import styles from './index.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const App = () => {
    const [isDarkTheme, setDarkTheme] = useState(false);

    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <div className={cx('app', {'theme-dark': isDarkTheme})}>
                <Header onChange={isDarkTheme => {
                    setDarkTheme(isDarkTheme)
                }}/>
                <div className={cx('content')}>
                    <Routes>
                        <Route path="/bbs" element={<Bbs />}></Route>
                        <Route path="/post1" element={<MyPost />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
