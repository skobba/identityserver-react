import {
  UserManager,
  WebStorageStateStore,
  InMemoryWebStorage,
  User
} from 'oidc-client';
import env from '../../env';

const { HOSTNAME, STS_DOMAIN, CLIENT_ID } = env;

export class Auth {
  private userManager: UserManager;

  constructor() {

    const settings: any = {
      authority: STS_DOMAIN,
      client_id: CLIENT_ID,
      //client_id: 'spa.short',
      redirect_uri: `${HOSTNAME}/callback.html`,
      post_logout_redirect_uri: `${HOSTNAME}`,

      response_type: 'code',
      //response_mode: 'fragment',
      scope: 'openid profile api1',
      //scope: 'openid profile api offline_access',

      silent_redirect_uri: `${HOSTNAME}/silent-renew.html`,
      automaticSilentRenew:false,
      validateSubOnSilentRenew: true,
      //silentRequestTimeout:10000,
  
      monitorAnonymousSession : true,
  
      filterProtocolClaims: true,
      loadUserInfo: true,
      revokeAccessTokenOnSignout : true
    };


    this.userManager = new UserManager(settings);

    this.userManager.events.addAccessTokenExpiring(() => {
      console.log("*** token expiring ***");

      // maybe do this code manually if automaticSilentRenew doesn't work for you
      this.userManager.signinSilent().then((user: any) => {
          let tid = (new Date()).toTimeString()
          console.log("silent renew success" + tid, user);
      }).catch(function(e: any) {
          console.log("silent renew error", e.message);
      })
    });


  }

  public signinSilent(): Promise<User | null> {
    return this.userManager.signinSilent();
  }

  public getUser(): Promise<User | null> {
    return this.userManager.getUser();
  }

  public isAuthenticated(): Promise<boolean> {
    return this.userManager.getUser().then(user => {
      if (user && !user.expired) {
        // Set the authorization header for axios
        // axios.defaults.headers.common['Authorization'] = 'Bearer ' + user.access_token;
        return true;
      }
      return false;
    });
  }

  public signinRedirectCallback(props: any): Promise<any> {
    alert('signinRedirectCallback'); // eslint-disable-line
    console.log('signinRedirectCallback'); // eslint-disable-line
    return this.signinRedirectCallback(props.signInParams);
  }

  public completeLogin(): Promise<any> {
    alert('completeLogin'); // eslint-disable-line
    console.log('completeLogin'); // eslint-disable-line
    return this.userManager
      .signinRedirectCallback()
      .catch(error => console.log('Handle ERROR in Auth: ' + error.msg)); // eslint-disable-line
  }
  //   completeLogin() {
  //     this.manager.signinRedirectCallback()
  //        .then(user => this.user = user)
  //        .catch((error) => this.handleError(error));
  //  }

  public login(): Promise<void> {
    console.log('login'); // eslint-disable-line
    return this.userManager.signinRedirect();
  }

  public logout(): Promise<void> {
    return this.userManager.signoutRedirect();
  }

  public getAccessToken(): Promise<string> {
    return this.userManager.getUser().then((data: any) => {
      return data.access_token;
    });
  }
}
