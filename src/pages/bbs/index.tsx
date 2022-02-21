import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { DATA } from '../post/index'
import styles from './index.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Bbs = () => {
    return (
        <ul className={cx('bbs')}>
            {DATA.map((item, index) => {
                return (
                    <li className={cx('item')} key={index}>
                        <div className={cx('inner')}>
                            <div className={cx('thumbnail')}>
                                <img src={item.thumbnail} className={cx('image')} alt="" />
                            </div>
                            <p className={cx('text')}>
                                <span className={cx('title')}>{item.title}</span>
                            </p>
                            <Link to={item.url} className={cx('link')}>
                                <span className={cx('blind')}>{item.linkText}</span>
                            </Link>
                        </div>
                    </li>
                )
            })}
        </ul>
    )
}

export default Bbs