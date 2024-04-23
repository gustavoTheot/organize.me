import { Link } from "react-router-dom";
import { HeaderContainer, Logo, NavBar } from "./style";

export function Header() {
    return (
        <HeaderContainer>
            <Logo>
                <h2>Organize.me</h2>
            </Logo>

            <NavBar>
                <ul>
                    <li>
                        <Link to={'/register'}>Registro</Link >
                    </li>
                    <li>Planilha</li>
                    <li>Perfil</li>
                    <li>Configuração</li>
                </ul>
            </NavBar>
        </HeaderContainer>
    )
}