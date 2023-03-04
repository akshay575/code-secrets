const oauthEndpoint = {
    AuthURL: "https://auth.atlassian.com/authorize",
    TokenURL: "https://auth.atlassian.com/oauth/token",
}

const oauthConfig = {
    RedirectURL: "http://localhost:3000/auth/jira/callback",
    ClientID: "W4XTi79CmCvhnWYszR70dypEQFtHA3qH",
    ClientSecret: "CXEQC92LBtFAchTsuHnFcf_0if7t8KhFxgM_68dNHKYxZ--n6PwSRFyEckem6X9n",
    Scopes: ["read:jira-user", "read:jira-work", "offline_access"],
    Endpoint: oauthEndpoint
}

const JIRA_CLIENT = "s1JWjiFNbAurXIGu2KzSoRD9EF93vjLZ"
const JIRA_SECRET = "HEJdIgN55jQYZLXDN6hlTJjIjsHms4z0Xtga45XrmLsASTI1X_TE-67VdpwEiv8e"