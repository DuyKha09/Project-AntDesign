import React from 'react';
import Dashboard from './Dashboard';
import LogoutIcon from '@mui/icons-material/Logout';
import { Breadcrumb, Layout, theme, Avatar } from 'antd';

const { Header, Content, Sider, Footer } = Layout;

const PageLayout = ({ children, headerContent }) => {

    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <Layout>
            <Header
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    color: 'black',
                    backgroundColor: 'white',
                    borderBottom: '2px solid gray',
                }}
            >
                <Avatar
                    src={<img src={'https://i.pinimg.com/736x/e2/35/1d/e2351d06558a443d0d9adde551c3e0e0.jpg'} alt="avatar" />}
                    size={{
                        xs: 24,
                        sm: 32,
                        md: 40,
                        lg: 50,
                        xl: 55,
                        xxl: 100,
                    }}
                />
                <h2> Vũ Khắc Duy Kha</h2>
                <button
                    style={{
                        display: 'flex',
                        marginLeft: 'auto',
                    }}>
                    <LogoutIcon />
                </button>
            </Header>
            <Layout>
                <Sider
                    width={250}
                    style={{
                        background: colorBgContainer,
                        maxheight: 500,
                        minHeight: 300,
                    }}
                >
                    <Dashboard />
                </Sider>
                <Layout
                    style={{
                        padding: '0 24px 24px',
                    }}
                >
                    <Breadcrumb
                        style={{
                            margin: '16px 0',
                            marginTop: 0,
                        }}
                    >
                        {headerContent}
                    </Breadcrumb>
                    <Content
                        style={{
                            maxheight: 500,
                            padding: 24,
                            margin: 0,
                            minHeight: 300,
                            background: colorBgContainer,
                        }}
                    >
                        {children}
                    </Content>
                </Layout>
            </Layout>
            <Footer
                style={{
                    textAlign: 'center',
                }}
            >
                Ant Design ©2023 Created by Ant UED
            </Footer>
        </Layout>
    );
};
export default PageLayout;

