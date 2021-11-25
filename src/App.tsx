import React from 'react';
import { Layout } from 'antd';

import './App.scss';
import Home from './pages/home';
import AppHeader from './layout/header';
import AppFooter from './layout/footer';
const { Content } = Layout;

function App() {
    return (
        <div className="App">
            <Layout className="layout">
                <AppHeader />
                <Content>
                    <div className="site-layout-content">
                        <Home />
                    </div>
                </Content>
                <AppFooter />
            </Layout>
        </div>
    );
}

export default App;
