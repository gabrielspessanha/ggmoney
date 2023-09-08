import  styled  from "styled-components";

export const Content = styled.div`
    margin-top: 4rem;

    table{
        width: 100%;
        border-spacing: 0 .5rem;


        th{
            color: var(--text-body);
            font-weight: 400;
            padding: 1rem 2rem;
            text-align: left;
            line-height: 1.5rem;
        }

        td{
            padding: 1rem 2rem;
            border: 0;
            background: var(--shape);
            color: var(--text-body);
            border-radius: 0.25rem;

            &:first-child{
                color: var(--text-title)
            }

            &.deposit{
                color: var(--green);
            }

            &.withdraw{
                color: var(--red);
            }
        }
    }
@media (max-width: 600px){
    &{
        margin: 0 2rem;
    }
    table{
        width: 100%;

        th{
            padding: 1rem 1rem;
            text-align: left;
            line-height: 1.5rem;
        }

        td{
            padding: .5rem 1rem;
            border-radius: 0.25rem;
        }
    }
}

@media (max-width: 516px){
    &{
        margin: 0 0;
    }
    table{
        width: 100%;

        th{
            padding: 1rem .1rem;
            text-align: left;
            line-height: 1.5rem;
        }

        td{
            padding: .5rem .2rem;
            border-radius: 0.25rem;
            font-size: .7rem;
        }
    }
}

`