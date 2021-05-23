import React, { ReactNode } from 'react'
import { Title, Wrapper, Body } from './styledPost';

interface IProps {
    children: ReactNode;
    style? : any,
    onClick? : any
}

export default function Post({children, ...props} : IProps) : JSX.Element {
    return (
        <Wrapper {...props}>
            {children}
        </Wrapper>
    )
}

Post.Title = ({children, style, ...props} : IProps) => {
    return <Title {...props} style={style}>
        {children}
    </Title>;
}

Post.Body = ({children, ...props} : IProps) => {
    return <Body {...props}>
        {children}
    </Body>;
}