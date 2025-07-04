import React, { useEffect, useState } from 'react';
import MemeCard from '../components/Card';
import { GetAllMemes } from '../api/memes';

const Homepage = () => {
    const [data, SetData] = useState([]);

    useEffect(() => {
        GetAllMemes().then((memes) => SetData(memes.data.memes));
    },  []);

    return (
        <div className="row">
          {data.map((el) => (
            <MemeCard img={el.url} title={el.name} />
        ))}
        </div>
    )
}

export default Homepage