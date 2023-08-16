import React from 'react';
import Dashboard from './Dashboard';
import LogoutIcon from '@mui/icons-material/Logout';
import { Layout, Avatar, Space, Button, Typography } from 'antd';
import { useNavigate } from "react-router-dom";
const { Title } = Typography;
const { Header, Content, Sider } = Layout;

const PageLayout = ({ children, headerContent }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate("/")
    }

    return (
        <div>
            <Layout style={{ height: "100vh", overflow: "initial" }}>
                <Header style={{
                    position: 'fixed',
                    lineHeight: 'auto',
                    borderRight: "2px solid #ccc",
                    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
                    backgroundColor: "#fff",
                    width: 300,
                    height: 50,
                    paddingInline: 20,
                }}>
                    <Space align="center" size={"small"} direction="horizontal">
                        <Avatar
                            src={<img src={'https://i.pinimg.com/736x/e2/35/1d/e2351d06558a443d0d9adde551c3e0e0.jpg'} alt="avatar" />}
                            size={{
                                xs: 24,
                                sm: 32,
                                md: 40,
                                lg: 50,
                                xl: 50,
                                xxl: 100,
                            }}
                            style={{ marginTop: '-20px' }}
                        />
                        <Title level={4} style={{ marginTop: 0 }}>
                            Vũ Khắc Duy Kha
                        </Title>
                    </Space>
                </Header>
                <Sider style={{
                    overflow: "auto",
                    position: "fixed",
                    textAlign: "left",
                    lineHeight: "auto",
                    left: 0,
                    top: 50,
                    bottom: 0,
                    borderRight: "2px solid #ccc",
                    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
                }} width={300}>
                    <Dashboard />
                </Sider>
                <Layout style={{ marginLeft: 300 }}>
                    <Header style={{
                        display: "flex",
                        height: 50,
                        width: "auto",
                        backgroundColor: "#fff",
                        justifyContent: "space-between",
                        alignItems: "center",
                        borderBottom: "2px solid #ccc",
                        paddingInline: 50,
                    }}>
                        {headerContent}
                        <Button
                            type="ghost"
                            size={"large"}
                            icon={<LogoutIcon />}
                            onClick={handleLogout}
                            style={{
                                color: "#1890ff",
                                backgroundColor: "#fff",
                                borderColor: "1px solid #ccc",
                                boxShadow: "0 -2px 8px rgba(0, 0, 0, 0.15)",
                            }}
                        />
                    </Header>
                    <Content style={{
                        padding: 50,
                        textAlign: "center",
                        overflow: "initial",
                        lineHeight: "auto",
                        backgroundColor: "#fff",
                    }}>
                        {children}
                    </Content>
                </Layout>
            </Layout>
        </div>
    );
};
export default PageLayout;

