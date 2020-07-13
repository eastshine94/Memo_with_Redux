import React from 'react';
import { Layout, Container } from '../styles/BaseStyle';
import { MemoMain, MemoSide } from '../components/memo';

const Memo: React.FC = () => {
    return(
        <Layout>
            <Container>
                <MemoSide/>
                <MemoMain/>
            </Container>
        </Layout>
    );
}

export default Memo;