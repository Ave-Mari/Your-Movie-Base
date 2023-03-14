import styled from 'styled-components';

export const Wrapper = styled.section`

    ul {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        width: 96%;
        padding-left: 0px;
        margin: 0 auto;
    }

    li {
        background: #CFBC97;
        border-radius: 25px;
        list-style: none;

        display: flex;
        flex-direction: column;
        align-items: center;

        padding: 22px;

        .title {
            margin: 0 0 12px 0;
            text-aligh: center;
            font-weight: 600;
            font-size: 16px;
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
    }
`;