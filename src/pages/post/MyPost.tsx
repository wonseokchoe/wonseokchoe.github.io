import React from 'react';
import { DATA } from './index'
import Title from '@components/Post/Title'

const index = 0;
const title = DATA[index].title;
const thumbnail = DATA[index].thumbnail

const MyPost = () => {
    return (
        <div>
            <Title title={title} imageUrl={thumbnail} />
        </div>
    )
}

export default MyPost
