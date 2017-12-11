import { environment } from '../../environments/environment';

interface AuthConfig {
  CLIENT_ID: string;
  CLIENT_DOMAIN: string;
  AUDIENCE: string;
  REDIRECT: string;
  SCOPE: string;
}

export const AUTH_CONFIG: AuthConfig = {
  CLIENT_ID: 'w187UHEwhB4iDsQSEZMYN9IG8yPsocGL',
  CLIENT_DOMAIN: 'tanichols.auth0.com',
  AUDIENCE: 'coinvault',
  REDIRECT: environment.authRedirect,
  SCOPE: 'openid profile email'
};
