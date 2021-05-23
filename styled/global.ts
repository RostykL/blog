import styled from 'styled-components';

type top = {
    top?: number
}

export const Container = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    margin-top: ${(props: top) => props.top ? `${props.top}px` : '0'};
    background-color: #eee;
`