// Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.


using IdentityServer4;
using IdentityServer4.Models;
using System.Collections.Generic;
using System.Linq;

namespace IdentityServer
{
    public static class Config
    {
        public static IEnumerable<IdentityResource> Ids =>
            new List<IdentityResource>
            {
                new IdentityResources.OpenId(),
                new IdentityResources.Profile(),
            };


        public static IEnumerable<ApiResource> Apis =>
            new List<ApiResource>
            {
                new ApiResource("testapiaccess", "Test access"),
                new ApiResource("api1", "Api1 access"),
            };

        public static IEnumerable<Client> Clients =>
            new List<Client>
            {
                // VaillaJS Client Code Flow (localhost)
                new Client
                {
                    ClientName = "VaillaJS Client",
                    ClientId = "vanillajs_sample",
                    AccessTokenType = AccessTokenType.Reference,
                    AllowOfflineAccess = false, // enable refresh_token
                    RequireConsent = false,
                    AccessTokenLifetime = 70,// 90 seconds, default 60 minutes
                    IdentityTokenLifetime = 300,

                    // https://tools.ietf.org/html/draft-ietf-oauth-browser-based-apps-00#section-4
                    AllowedGrantTypes = GrantTypes.Code,
                    RequireClientSecret = false,
                    RequirePkce = true,

                    AllowAccessTokensViaBrowser = true,
                    RedirectUris = new List<string>
                    {
                        "http://localhost:15000",
                        "http://localhost:15000/code-identityserver-sample.html",
                        "http://localhost:15000/loginresponse",
                        "http://localhost:15000/code-identityserver-sample-callback.html",
                        "http://localhost:15000/code-identityserver-sample-silent.html"
                    },
                    PostLogoutRedirectUris = new List<string>
                    {
                        "http://localhost:15000/"
                    },
                    AllowedCorsOrigins = new List<string>
                    {
                        "http://localhost:15000"
                    },
                    AllowedScopes =
                    {
                        IdentityServerConstants.StandardScopes.OpenId,
                        IdentityServerConstants.StandardScopes.Profile,
                        "api1"
                    }
                },
                // Code Flow with PKCE (localhost)
                new Client
                {
                    ClientName = "SPA Code Flow Client (localhost)",
                    ClientId = "spa_code_client_localhost",
                    AccessTokenType = AccessTokenType.Reference,
                    AllowOfflineAccess = true, // enable refresh_token
                    RequireConsent = false,
                    AccessTokenLifetime = 70,// 330 seconds, default 60 minutes
                    IdentityTokenLifetime = 300,

                    // https://tools.ietf.org/html/draft-ietf-oauth-browser-based-apps-00#section-4
                    AllowedGrantTypes = GrantTypes.Code,
                    RequireClientSecret = false,
                    RequirePkce = true,

                    AllowAccessTokensViaBrowser = true,
                    RedirectUris = new List<string>
                    {
                        "http://localhost:8100",
                        "http://localhost:8100/loginresponse",
                        "http://localhost:8100/callback.html",
                        "http://localhost:8100/silent-renew.html"
                    },
                    PostLogoutRedirectUris = new List<string>
                    {
                        "http://localhost:8100/"
                    },
                    AllowedCorsOrigins = new List<string>
                    {
                        "http://localhost:8100"
                    },
                    AllowedScopes =
                    {
                        IdentityServerConstants.StandardScopes.OpenId,
                        IdentityServerConstants.StandardScopes.Profile,
                        "api1"
                    }
                },
                // Code Flow with PKCE (docker-compose)
                new Client
                {
                    ClientName = "SPA Code Flow Client (docker)",
                    ClientId = "spa_code_client_docker",
                    AccessTokenType = AccessTokenType.Reference,
                    AllowOfflineAccess = true, // enable refresh_token
                    RequireConsent = false,
                    //AccessTokenLifetime = 330,// 330 seconds, default 60 minutes
                    AccessTokenLifetime = 90,// 330 seconds, default 60 minutes
                    IdentityTokenLifetime = 300,

                    RequireClientSecret = false,
                    AllowedGrantTypes = GrantTypes.Code,
                    RequirePkce = true,

                    AllowAccessTokensViaBrowser = true,
                    RedirectUris = new List<string>
                    {
                        "http://localhost:8101",
                        "http://localhost:8101/loginresponse",
                        "http://localhost:8101/callback.html",
                        "http://localhost:8101/silent-renew.html"
                    },
                    PostLogoutRedirectUris = new List<string>
                    {
                        "http://localhost:8101"
                    },
                    AllowedCorsOrigins = new List<string>
                    {
                        "http://localhost:8101"
                    },
                    // AllowedScopes = new List<string>
                    // {
                    //     "openid",
                    //     "dataEventRecords",
                    //     "dataeventrecordsscope",
                    //     "role",
                    //     "profile",
                    //     "email"
                    // },
                    AllowedScopes =
                    {
                        IdentityServerConstants.StandardScopes.OpenId,
                        IdentityServerConstants.StandardScopes.Profile,
                        "api1"
                    }
                },
                // machine to machine client
                new Client
                {
                    ClientId = "client",
                    ClientSecrets = { new Secret("secret".Sha256()) },

                    AllowedGrantTypes = GrantTypes.ClientCredentials,
                    // scopes that client has access to
                    AllowedScopes = { "testapiaccess" },
                    //AlwaysSendClientClaims = true,
                    //ClientClaimsPrefix = string.Empty,
                    //Claims = TestUsers.Users().First(x => x.Username.Equals("bob")).Claims
                },

                // curl
                new Client
                {
                    ClientId = "curltestclient",
                    ClientSecrets = { new Secret("CurlSecret".Sha256()) },

                    AllowedGrantTypes = GrantTypes.Implicit,
                    AllowedScopes = { "testapiaccess" },

                    ClientName = "Curl http test client",
                    AccessTokenType = AccessTokenType.Jwt,
                    IdentityTokenLifetime = 3600,
                    AccessTokenLifetime = 3600,
                    //RedirectUris = new List<string>
                    //{
                    //    "https://www.getpostman.com/oauth2/callback"
                    //},
                    Claims = TestUsers.Users().First(x => x.Username.Equals("postmantestclient")).Claims
                },
                // Postmann
                new Client
                {
                    ClientId = "postmantestclient",
                    ClientSecrets = { new Secret("PostmanSecret".Sha256()) },

                    AllowedGrantTypes = GrantTypes.ClientCredentials,
                    AllowedScopes = { "testapiaccess" },

                    ClientName = "Postman http test client",
                    AccessTokenType = AccessTokenType.Jwt,
                    IdentityTokenLifetime = 3600,
                    AccessTokenLifetime = 3600,
                    //RedirectUris = new List<string>
                    //{
                    //    "https://www.getpostman.com/oauth2/callback"
                    //},
                    Claims = TestUsers.Users().First(x => x.Username.Equals("postmantestclient")).Claims
                },
                // interactive ASP.NET Core MVC client
                new Client
                {
                    ClientId = "mvc",
                    ClientSecrets = { new Secret("secret".Sha256()) },

                    AllowedGrantTypes = GrantTypes.Code,
                    RequireConsent = false,
                    RequirePkce = true,
                
                    // where to redirect to after login
                    RedirectUris = { "http://localhost:5002/signin-oidc" },

                    // where to redirect to after logout
                    PostLogoutRedirectUris = { "http://localhost:5002/signout-callback-oidc" },

                    AllowedScopes = new List<string>
                    {
                        IdentityServerConstants.StandardScopes.OpenId,
                        //IdentityServerConstants.StandardScopes.Profile
                    }
                },
            };
    }
}