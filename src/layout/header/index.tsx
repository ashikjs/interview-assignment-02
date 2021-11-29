import React from 'react';
import { Layout } from 'antd';

import './header.scss';

const { Header } = Layout;

function AppHeader() {
    return (
        <Header>
            <div className="logo">
                <img src="/images/logo.png" className="App-logo" alt="logo" />
            </div>
        </Header>
    );
}

export default AppHeader;
