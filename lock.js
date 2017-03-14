export const lockOptions = {
    oidcConformant: true,
    auth: {
        params: {
            audience: 'YOUR_API_IDENTIFIER_HERE',
            scope: 'YOUR_INTENDED_SCOPES_HERE'
        }
    }
};
