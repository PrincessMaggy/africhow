import {onAuthStateChanged, signOut} from 'firebase/auth';
import {auth} from '../../../firebase';
import {useState, useEffect} from 'react';

function AuthDetails() {
    const [authUser, setAuthUser] = useState(null);

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user);
            } else {
                setAuthUser(null);
            }
        });

        return () => {
            listen();
        };
    });

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                alert('Sign out successful');
            })
            .catch((err) => {
                alert(err);
            });
    };
    return (
        <div>
            {authUser ? (
                <>
                    {' '}
                    <p className='text-green-600'>{`Signed In as ${authUser.email}`}</p>
                    <button onClick={handleSignOut}>sign out</button>
                </>
            ) : (
                <p className='text-red-400'>Signed Out</p>
            )}
        </div>
    );
}

export default AuthDetails;
