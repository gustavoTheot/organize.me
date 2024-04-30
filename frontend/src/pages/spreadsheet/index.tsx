import { useEffect, useState } from "react";
import { api } from "../../api/axios";
import { Header } from "../../component/header";
import { Filter, Main, Nav } from "./style";
import { formatCurrency } from "../../util/formatValue";
import { formatDate } from "../../util/formatDate";
import { Cardholder, CaretDown, TrendDown, TrendUp, Wallet } from "@phosphor-icons/react";

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
            <Filter>
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
            </Filter>

            <ul>
                <li>
                    <div>
                        <span>Saldo atual</span>
                        {'R$ 100,00'}
                    </div>
                   
                    <Wallet size={24}/>
                </li>
                <li>
                    <div>
                        <span>Receita</span>
                        {'R$ '}
                    </div>
                    
                    <TrendUp size={24} />
                </li>
                <li>
                    <div>
                        <span>Despesa</span>
                        {'R$ '}
                    </div>

                    <TrendDown size={24} />
                </li>
                <li>
                    <div>
                        <span>Cartão de crédito</span>
                        {'R$ '}
                    </div>

                    <Cardholder size={24} />
                </li>
            </ul>
        </Nav>
        <Main>
            <table>
                <thead>
                    <tr>
                        <th>Local</th>
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