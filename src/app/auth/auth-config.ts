interface AuthConfig {
  CLIENT_ID: string;
  CLIENT_DOMAIN: string;
  AUDIENCE: string;
  REDIRECT: string;
  SCOPE: string;
}

export const AUTH_CONFIG: AuthConfig = {
  CLIENT_ID: 'w187UHEwhB4iDsQSEZMYN9IG8yPsocGL',
  CLIENT_DOMAIN: 'tanichols.auth0.com', // e.g., you.auth0.com
  AUDIENCE: 'https://tanichols.auth0.com/userinfo',
  REDIRECT: 'http://localhost:4200/callback',
  SCOPE: 'openid profile email'
};
