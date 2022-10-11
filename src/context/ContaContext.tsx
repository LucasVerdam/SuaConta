import React, { createContext, useContext, useState } from "react";


type children = {
    children: React.ReactNode;
}

export interface Conta {
    nomes: {
        id: number;
        nome: string;
        conta: number;
        dinheiro: number;
        troco: number;
        pgmtC: boolean;
        pgmtP: boolean;
    }[]
    stateNomes: (n: any) => any;

    produtos: {
        id: number;
        nome: string;
        valor: number;
        qtd: number;
        valorT: number;
        pessoas: string[];
    }[]
    stateProdutos: (n: any) => any;

    valores: {
        valCard: number;
        valDin: number;
        total: number;
        trocoT: number;
    }
    stateValores: (n: any) => any;
}


export const ContaContext = createContext<Conta>({} as Conta)


export const ContaProvider: React.FC<children> = ({ children }) => {

    const [nomes, setNomes] = useState([])
    const [produtos, setProdutos] = useState([])
    const [valores, setValores] = useState({ valCard: 0, valDin: 0, total: 0, trocoT: 0 })


    function stateNomes(n: any) {
        setNomes(n)
    }

    function stateProdutos(n: any) {
        setProdutos(n)
    }

    function stateValores(n: any) {
        setValores(n)
    }

    return (
        <ContaContext.Provider value={{ nomes, stateNomes, produtos, stateProdutos, valores, stateValores }}>
            {children}
        </ContaContext.Provider>
    );
}

export function global() {
    const context = useContext(ContaContext)
    return context
}