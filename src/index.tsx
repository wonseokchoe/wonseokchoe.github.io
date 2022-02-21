import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory as history } from 'history'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import MyPost from '@pages/post/MyPost';
import bbs from '@pages/bbs';
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
                    <Switch>
                        <Route path="/bbs" component={bbs}></Route>
                        <Route path="/post1" component={MyPost} />
                    </Switch>
                </div>
            </div>
        </BrowserRouter>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
