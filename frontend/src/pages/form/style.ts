import styled from "styled-components";

export const Form = styled.form`
    margin-top: 14rem;

    width: 24rem;

    display: grid;
    grid-template-areas: 
        "first-input second-input"
        "thrid-input thrid-input"
        "first-select first-select"
        "second-select third-select";
    ;
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

    input{
        &:nth-child(1){
            grid-area: first-input;
        }
        &:nth-child(2){
            grid-area: second-input;
        }
        &:nth-child(3){
            grid-area: thrid-input;
        }
    }

    select{
        &:nth-child(1){
            grid-area: first-select;
        }
        &:nth-child(2){
            grid-area: second-select;
        }
        &:nth-child(3){
            grid-area: third-select;
        }
    }

    button{
        cursor: pointer;
        font-weight: 600;
        border-radius: 8px;
        border: none;
        background-color: ${(props) => props.theme['blue-400']};
        color: white;
    }
`