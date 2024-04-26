import { useEffect, useState } from "react";
import { api } from "../../api/axios";
import { Header } from "../../component/header";
import { Main, Nav } from "./style";
import { formatCurrency } from "../../util/formatValue";
import { formatDate } from "../../util/formatDate";

export function SpredSheet() {
    const currentMonth = new Date().getMonth()+1
    const [month, setMonth] = useState<number>(currentMonth)
    const [transactions, setTransactions] = useState([])

    async function handleInput() {
        try{
            const registers = await api.post('/transaction/transactionPerMonth', {
                month
            })
            setTransactions(registers.data.transactions)
        }catch(err){
            alert(err)
        }
    }

    useEffect(() => {
        handleInput()
    }, [month])

    function handleChange(e: React.ChangeEvent<HTMLSelectElement>){
        const intValue = parseInt(e.target.value)
        setMonth(intValue)
    }

    return(
        <>
        <Header/>
            
        <Nav>
            <ul>
                <li>
                    <span>Saldo atual</span>
                    {'R$ 100,00'}
                </li>
                <li>
                    <span>Receita</span>
                    {'R$ '}
                </li>
                <li>
                    <span>Despesa</span>
                    {'R$ '}
                </li>
                <li>
                    <span>Cartão de crédito</span>
                    {'R$ '}
                </li>
            </ul>
        </Nav>
        <Main>
            <label htmlFor="">Mês</label>
            <select onChange={handleChange} value={month}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
            </select>
            <table>
                <thead>
                    <tr>
                    <   th>Local</th>
                        <th>Valor gasto</th>
                        <th>Tipo</th>
                        <th>Forma de pagamento</th>
                        <th>Data da compra</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        transactions.map(itens => (
                            <tr>
                                <td>{itens.local}</td>
                                <td>{formatCurrency(itens.value)}</td>
                                <td>{itens.type}</td>
                                <td>{itens.formatPayament}</td>
                                <td>{formatDate(itens.date)}</td>
                            </tr>
                        ))
                    }
                    
                </tbody>
            </table>
        </Main>
        </>
    )
}