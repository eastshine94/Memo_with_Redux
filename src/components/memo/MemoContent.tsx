import React from 'react';
import styled from 'styled-components';
import { Button } from '../base'
const Wrapper = styled.section`
    & div {
        white-space: pre;
    }
`;

interface Props {
    createdAt: number;
    content: string;
    onDelete(): void;
}

const MemoContent: React.FC<Props> = ({createdAt, content, onDelete}) => {
    const createdAtToDate = new Date(createdAt).toLocaleString();
    return(
        <React.Fragment>
            <Button onClick={onDelete}>삭제</Button>
            <Wrapper>
                <div>{createdAtToDate}</div>
                <div>{content}</div>
            </Wrapper>
        </React.Fragment>
    )
}

export default MemoContent;