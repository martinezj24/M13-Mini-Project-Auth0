import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import { AppProvider } from './context/AppContext';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Auth0Provider
      domain="dev-37fkutxkyz8v2cho.us.auth0.com"
      clientId="umNGmwjXJwcJiHn7HIxkgb3VnPKXSwKO"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}>
      <AppProvider>

        <App />
      </AppProvider>
    </Auth0Provider>
  </BrowserRouter>
);
