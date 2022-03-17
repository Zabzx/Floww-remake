import { createContext, useState } from "react";

export const ResponsiveContext = createContext();

export const ResponsiveContextProvider = (props) => {

    const [responsiveProperties, setResponsiveProperties] = useState({
        trending: false
    })

    return (
        <ResponsiveContext.Provider value={[responsiveProperties, setResponsiveProperties]}>
            {props.children}
        </ResponsiveContext.Provider>
    )
}