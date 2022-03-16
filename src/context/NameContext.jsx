import { useState, createContext } from "react";

export const NameContext = createContext();

export const NameProvider = (props) => {

    const [names, setNames] = useState(
        {
            id: 1,
            firstname: '',
            lastname: '',
            username: ''
        }
    );

    return (
        <NameContext.Provider>
            {props.children}
        </NameContext.Provider>
    )
}