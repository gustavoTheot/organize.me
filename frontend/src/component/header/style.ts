import styled from "styled-components";

export const HeaderContainer = styled.header`
    margin-top: 4rem;
    
    width: 100%;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    a{
        text-decoration: none;
        color: ${(props => props.theme['grey-200'])};
    }
`

export const Logo = styled.div`
`

export const NavBar = styled.div`
    ul{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        gap: 2rem;

        li{
            list-style: none;
            cursor: pointer;

            transition: transform 0.1s;
            
            &:hover{
                transform: scale(1.05);
            }
        }
     }
`