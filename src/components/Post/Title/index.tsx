import React from 'react';
import styles from './index.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
const Title = ({title, imageUrl}) => {
    return (
        <strong className={cx('title')} style={{backgroundImage: 'url('+imageUrl+')'}}>
            {title}
        </strong>
    )
}
export default Title
