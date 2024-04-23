import { Header } from "../../component/header";
import { Form } from "./style";

export function Register() {
    return (
        <>
            <Header />

            <Form>
                <input type="number" name="" id="" placeholder="Valor" />
                <input type="datetime" name="" id="" placeholder="dd//mm/yyyy" />
                <input type="text" name="" id="" placeholder="Local" />
                <select value="">
                    <option id="">Tipo</option>
                    <option id="">Entrada</option>
                    <option id="">Saida</option>
                </select>
                <select value="">
                    <option>Credito</option>
                    <option>Debito</option>
                    <option>Dinheiro</option>
                    <option>Pix</option>
                </select>
                <select value="">
                    <option id="">1x</option>
                    <option id="">2x</option>
                    <option id="">3x</option>
                    <option id="">4x</option>
                    <option id="">5x</option>
                    <option id="">6x</option>
                    <option id="">7x</option>
                    <option id="">8x</option>
                    <option id="">9x</option>
                    <option id="">10x</option>
                </select>

                <button>Registrar</button>
            </Form>
        </>
    )
}