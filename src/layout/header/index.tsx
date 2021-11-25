import React from 'react';
import './header.scss';
import { Header } from 'antd/es/layout/layout';

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
