import {useGoogleOneTapLogin} from "@react-oauth/google";
import {parseToken} from "../auth.ts";

export type GoogleProfile = {
    picture: string,
    name: string,
    email: string
};



type GoogleAuthProps = {
    setProfile: (setProfileRef: GoogleProfile) => void
}

// setProfile: (setProfileRef: GoogleProfile) => void
export function GoogleAuth(props: GoogleAuthProps) {
    useGoogleOneTapLogin({
        onSuccess: (response) => {
            props.setProfile(parseToken(response.credential));
        },
        onError: () => console.log('Login failed'),
        auto_select: true
    });

    return (
        <>
        </>
    )
}