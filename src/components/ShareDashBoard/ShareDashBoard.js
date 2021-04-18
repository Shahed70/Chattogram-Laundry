import React, { useContext } from 'react';
import { useState } from 'react/cjs/react.development';
import { CreactUserContext } from '../../App';
import Deshboar from '../Deshboard/Deshboar';
import UserDeshboard from '../UserDeshboard/UserDeshboard';

const ShareDashBoard = () => {
    const [loggedInUser, setLoggedInuser] = useContext(CreactUserContext)
    const [user, setUser] = useState(false)
    return (
        <div>
            {
                loggedInUser.email === ("amaremail234@gmail.com" || "programminghero001@gmail.com") ? <Deshboar sendUser={setUser} />:<UserDeshboard />
            }
            
            
        </div>
    );
};

export default ShareDashBoard;