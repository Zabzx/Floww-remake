import { useState, createContext } from "react";

export const NameContext = createContext();

export const NameProvider = (props) => {

    const [names, setNames] = useState(
        {
            id: 1,
            firstName: '',
            lastName: '',
            userName: ''
        }
    );

    return (
        <NameContext.Provider value={[names, setNames]}>
            {props.children}
        </NameContext.Provider>
    )
}