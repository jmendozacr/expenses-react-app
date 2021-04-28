import React from 'react';
import { ReactComponent as LogoutIcon } from './../images/log-out.svg'
import Button from './commons/Button';
import { auth } from './../firebase/firebaseConfig';
import { useHistory } from 'react-router';

const ButtonLogout = () => {
    const history = useHistory();

    const logout = async () => {
        try {
            await auth.signOut();
            history.push('/login');
        } catch(error) {
            console.log("error", error);
        }
    }

    return (
        <Button largeIcon as="button" onClick={logout}>
            <LogoutIcon/>
        </Button>
    );
}

export default ButtonLogout;