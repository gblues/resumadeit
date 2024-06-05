import {useState, useEffect, Dispatch, SetStateAction} from "react";

function getStorageValue(key: string, defaultValue: unknown) {
    const saved = localStorage.getItem(key);
    return saved === null ? defaultValue : JSON.parse(saved);
}

export default function useLocalStorage<S>(key: string, defaultValue: S | unknown = {}): [S, Dispatch<SetStateAction<S>>] {
    const [value, setValue] = useState<S>(() => {
        return getStorageValue(key, defaultValue);
    })

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value])

    return [value, setValue];
}