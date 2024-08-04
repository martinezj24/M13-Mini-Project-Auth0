import { useAuth0 } from '@auth0/auth0-react';
import { Button } from 'react-bootstrap';

const AuthButton = () => {
    const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

    const handleLogout = () => {
        logout({
            returnTo: `${window.location.origin}/` // Redirects to home after logout
        });
    };

    const handleLogin = () => {
        loginWithRedirect({
            returnTo: `${window.location.origin}/dashboard` // The idea is to redirect to Dashboard after successful login and not home but Im not sure how to do it using Auth0
        });
    };

    return isAuthenticated ? (
        <Button onClick={handleLogout}>Log Out</Button>
    ) : (
        <>
            <Button onClick={handleLogin} className="me-2">Log In / Sign Up</Button>
        </>
    );
};
export default AuthButton;
