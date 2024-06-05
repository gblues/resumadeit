export function useAuthc(token: string) {
    let result;
    fetch(`${import.meta.env.VITE_BACKEND_URL}/auth`, {
        body: `{"query":"{ auth(${token})"}`,
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        }})
        .then((response) => response.json())
        .then((data) => result = data);

    return result;

}