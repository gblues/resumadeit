type GoogleProfile = {
    email: string,
    name: string,
    picture: string
}

export function parseToken(token?: string): GoogleProfile {
    if(!token) return {email: 'unknown', name: 'unknown', picture: 'unknown'};
    const encoded = token.split('.')[1].replace(/-/g, '+').replace(/_/g, '/');
    const tokenData = JSON.parse(atob(encoded));
    console.log(tokenData);

    return {email: tokenData.email, name: tokenData.name, picture: tokenData.picture};
}

