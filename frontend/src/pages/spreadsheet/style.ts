import styled from "styled-components";

export const Filter = styled.div`
    margin-top: 5rem;
    margin-bottom: 1rem;

    display: flex;
    justify-content: flex-end;
    align-items: center;

    select{
        margin-left: 1rem;
        border: none;
    }
`

export const Nav = styled.nav`

    ul{ 
        display: flex;
        gap: 1rem;

        li{
            list-style: none;
            width: 12rem;
            height: 5rem;

            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 1rem;
            padding-left: 1rem;
            border-radius: 8px;

            &:first-child, &:last-child{
                color: ${props => props.theme['ice-100']};
                background-color: ${props => props.theme['blue-400']};
            };

            &:nth-child(2), &:nth-child(3){
                border: 1px solid ${props => props.theme['grey-200']};
            };

            div{
                display: flex;
                flex-direction: column;
            }

            span{
                font-size: 0.75rem;
            }
        }
    }
`

export const Main = styled.main`
    margin-top: 2rem;

    table{
        width: 50rem;

        thead{
            tr{
                th{
                    height: 2rem;

                    text-align: start;

                    &:first-child{
                        width: 12rem;
                    };

                    &:nth-child(4){
                        width: 12rem;
                    }

                    &:last-child{
                        width: 7.8rem;
                    }
                } 
            }
        }

        tbody{
            tr{
                td{
                    height: 2rem;
                }
            }
        }
    }

`