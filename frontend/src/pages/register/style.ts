import styled from "styled-components";

export const Form = styled.form`
    margin-top: 14rem;

    width: 24rem;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;


    input, select{
        outline-color: ${(props) => props.theme['blue-400']};
        height: 3.5rem;
        border-radius: 8px;
        border: none;
        padding-left: 1rem; 
        background-color: ${(props) => props.theme['ice-100']};
        color: ${(props => props.theme['grey-200'])};
    }

    button{
        width: 14rem;
        height: 3.5rem;
        cursor: pointer;
        font-weight: 600;
        border-radius: 8px;
        border: none;
        background-color: ${(props) => props.theme['blue-400']};
        color: white;

        margin: 0 auto;
    }
`

export const Row_1 = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 1rem;
`

export const Row_2 = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 1rem;
`