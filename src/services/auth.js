
export const TOKEN_KEY = 'findevs-token';

export const isAuthenticaded = () => localStorage.getItem(TOKEN_KEY) !== null;

const getToken = () => localStorage.getItem('findevs-token');


export { getToken };
