import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetails = () => {
    const friend = useLoaderData();

    return (
        <div>
            <h2>Everything about my friend is here</h2>
            <h4>Name: {friend.name}</h4>
            <p>Phone: {friend.phone}</p>
        </div>
    );
};

export default FriendDetails;