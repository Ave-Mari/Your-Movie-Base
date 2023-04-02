import styled from 'styled-components';

export const Wrapper = styled.li`

  
        background: #CFBC97;
        border-radius: 25px;
        list-style: none;
        position: relative;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 22px;

        padding: 22px;

        .title {
            margin: 0 0 12px 0;
            text-aligh: center;
            font-weight: 600;
            font-size: 16px;

            width: 13.9vw;
            text-align: center;
        }

        .date {
            margin: 0;
            text-aligh: center;
            font-weight: 300;
            font-size: 15px;
        }

        h2 {
            font-size: 22px;
        }
        img {
            width: 220px;
            margin-bottom: 13px;
        }

        button {
            border: none;
            background: none;
            font-size: 37px;            
            -webkit-text-stroke: 2px #3b0215;
            position: absolute;
            bottom: 1%;
            right: 3%;

           

        }

        .like {
            color: rgb(213, 28, 62);
       
            &:hover {
                color: rgb(127, 13, 34);
            }

        }
        .no-like {
            color: rgb(234, 224, 239);
       
            &:hover {
                color: rgb(239, 178, 227);
                cursor: pointer;
            }

        }
    
`;