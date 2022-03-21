import { createContext, useState } from "react";

export const PfpContext = createContext();

export const PfpProvider = (props) => {
    const [userPfp, setUserPfp] = useState('');

    return <PfpContext.Provider value={[userPfp, setUserPfp]}>
        {props.children}
    </PfpContext.Provider>
}