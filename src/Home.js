import React from 'react';
import {Link} from 'react-router-dom';

export default function Home() {
    return (
        <div>
            <p>This is home page</p>
            <Link to = "/About">Got to About</Link><br/>
            <a href="/About">Got to About with normal a</a>
    </div>
    )
}
