import React, { createContext, useContext, useState } from "react";


type children = {
    children: React.ReactNode;
}

export interface Nomes {
    nomes: {
        id: number;
        nome: string;
        conta: number;
        dinheiro: number;
        troco: number;
        pgmtC: boolean;
    }[]
    state: (n: any) => any;
}


export const NomesContext = createContext<Nomes>({} as Nomes)


export const NomesProvider: React.FC<children> = ({ children }) => {

    const [nomes, setNomes] = useState([])

    function state(n: any) {
        setNomes(n)
    }

    return (
        <NomesContext.Provider value={{ nomes, state }}>
            {children}
        </NomesContext.Provider>
    );
}

export function global() {
    const context = useContext(NomesContext)
    return context
}