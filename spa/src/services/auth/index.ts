import { Auth } from '../../lib/auth';
// import env from '../env';

// const OIDC_ISSUER = 'https://localhost:44356';
// const OIDC_CLIENT_ID = 'spa_code_client';

// export const authService = new Auth({
//   oidcIssuer: OIDC_ISSUER,
//   clientId: OIDC_CLIENT_ID,
//   redirectUri: location.origin,
//   logoutRedirectUri: location.origin,
//   silentCheckSsoRedirectUri: `${window.location.origin}/silent-check-sso.html`
// });

export const authService = new Auth();

export default authService;
