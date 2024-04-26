import { z } from "zod";
import { Header } from "../../component/header";
import { Form, Row_1, Row_2 } from "./style";
import { useForm } from "react-hook-form";
import { api } from "../../api/axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { NumericFormat } from "react-number-format";
import { useState } from "react";

const createRegisterValidateSchema = z.object({
    date: z.string().date(),
    local: z.string(),
    type: z.enum(['input', 'output']),
    formPayament: z.enum(['credit', 'debit', 'money', 'pix']),
    parcel: z.enum(['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'])
})

type CreateRegisterFormInput = z.infer<typeof createRegisterValidateSchema>

export function Register() {
    const [value, setValue, ] = useState('')
    const {register, handleSubmit, reset} = useForm<CreateRegisterFormInput>({
        resolver: zodResolver(createRegisterValidateSchema),
        defaultValues: {
            date: undefined,
            local: '',
            type: undefined,
            formPayament: undefined,
            parcel: undefined
        }
    })

    //const {id} = useParams<{id: string}>()

    async function onSubmit(data: CreateRegisterFormInput) {
        const {date, local, type, formPayament, parcel} = data

        try{
            await api.post(`/transaction/create/32020ac6-8671-4da6-89b8-1e091839ab1d`, {
                value, date, local, type, formPayament, parcel
            })
        }catch(err){
            alert(err)
        }

        setValue('')
        reset()
    }

    return (
        <>
            <Header />

            <Form onSubmit={handleSubmit(onSubmit)}>
                <Row_1>
                <NumericFormat 
                    placeholder="Valor (R$)"
                    value={value}
                    onValueChange={(values) => {
                        setValue(values.value)
                    }}

                    decimalScale={2}
                    fixedDecimalScale={true}
                    decimalSeparator=','
                    allowedDecimalSeparators={['.']}

                    prefix='R$ '
                    thousandSeparator='.'

                    isAllowed={(values) => {
                        if(values.value.length > 9) return false;
                        return true
                    }}
                />
                <input type="date" placeholder="yyyy/mm/dd" {...register('date')}/>
                </Row_1>
                
                <input type="text" placeholder="Local" {...register('local')}/>
                <select {...register('type')}>
                    <option value="">Tipo</option>
                    <option value="input">Entrada</option>
                    <option value="output">Saída</option>
                </select>
                <Row_2>
                    <select {...register('formPayament')}>
                        <option value="credit">Credito</option>
                        <option value="debit">Debito</option>
                        <option value="money">Dinheiro</option>
                        <option value="pix">Pix</option>
                    </select>
                    <select {...register('parcel')}>
                        <option value="1">1x</option>
                        <option value="2">2x</option>
                        <option value="3">3x</option>
                        <option value="4">4x</option>
                        <option value="5">5x</option>
                        <option value="6">6x</option>
                        <option value="7">7x</option>
                        <option value="8">8x</option>
                        <option value="9">9x</option>
                        <option value="10">10x</option>
                    </select>
                </Row_2>
                
                <button type="submit">Registrar</button>
            </Form>
        </>
    )
}