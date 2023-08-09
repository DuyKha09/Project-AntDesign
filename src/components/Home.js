import React from "react";
import { Typography } from "antd";
import PageLayout from "./PageLayout";
const { Title } = Typography;

const Home = () => {
    return (
        <>
            <PageLayout
                headerContent={
                    <>
                        <Title level={3} style={{ color: "#000", marginTop: 0 }}>
                            Dashboard
                        </Title>
                    </>
                }
            >
            </PageLayout>
        </>
    );
};

export default Home;
