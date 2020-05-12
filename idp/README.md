# IdentityServer - for local development

Source code from samples found in: https://github.com/IdentityServer/IdentityServer4

> ## To install and run IdentityServer in docker
>
> run this shell command in current directory
>
> ```
> docker-compose up -d
> ```

| From                      | Url                     |
| ------------------------- | ----------------------- |
| Your local machine        | https://localhost:8443/ |
| Within the docker network | https://identityserver/ |

Edit _IdentityServer/Config.cs_ and/or _IdentityServer/Quickstart/TestUsers.cs_ to configure og add new users to the developer instance of IdentityServer.

## Postman setup

- In "Authorization"-pane:
  - Type: "OAuth 2.0"
- In "Get new Access Token"-window
  - Grant Type: Client Credentials
  - Access Token URL: https://localhost:8443/connect/token
  - Client ID: postmantestclient
  - Client Secret: PostmanSecret
  - Scope: testapiaccess
  - Client Authentication: Send as Basic Auth header

## Service configuration

> Settings.cs
>
> ```C#
> ...
> public List<IdentityServerSetting> IdentityServerSettings { get; set; }
> ...
> ```

> Cloud.Bootstrapper.Identity needs this list on initialization.
>
> ```C#
> services.AddBootstrapperSecurity(IdentityServerSettings);
> ```

> appsettings.json
>
> ```JSON
> ...
>    "IdentityServerSettings": [
>      {
>        "Authority": "https://identityserver/",
>        "ApiName": "testapiaccess",
>        "ClientSecret": "PostmanSecret"
>      }
>    ]
> ...
> ```

# Build and output logs
docker-compose down ; docker-compose up -d --build ; docker-compose logs --follow

# Test

https://localhost:8443/account/login

https://localhost:8443/.well-known/openid-configuration

# curl

curl -d 'client_id=postmantestclient' -d 'username=postmantestclient' -d 'password=postman' -d 'grant_type=password' 'https://localhost:8443/connect/token'

## curl - Request an access token using OAuth 2.0 Client Credentials Grant

curl -k --data "grant_type=client_credentials&client_id=postmantestclient&client_secret=PostmanSecret" 'https://localhost:8443/connect/token'

