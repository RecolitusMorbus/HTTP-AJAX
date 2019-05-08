import React from 'react';
import { Link } from 'react-router-dom';

const Friend = props => (
    <div>
        <p>
            <strong>{props.friend.name}</strong>, {" "}
            {props.friend.age}
            <br/>
            {props.friend.email}
            <br/>
            {!props.action &&
                <Link to='/action-friend'>
                    <button onClick={props.toggleAction}>Do Something To Your Friend?</button>
                </Link>
            }
        </p>
    </div>
);

export default Friend;