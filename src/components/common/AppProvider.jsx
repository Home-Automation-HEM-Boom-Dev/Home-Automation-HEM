import { createContext, useContext } from "react";

export const AppContext = createContext({ refresh: () => { }, rooms: [], devices: [], thermostats: [], properties: [], scenes: [] });

export default function AppProvider({children}) {
    const context = useContext(AppContext);

    return (
        <AppContext.Provider value={{context}}>
            {children}
        </AppContext.Provider>
    )

}

