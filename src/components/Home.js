import React from "react";
import { Typography } from "antd";
import PageLayout from "./PageLayout";
import HomePage from "../Pages/HomePage/HomePage";
const { Title } = Typography;

const Home = () => {
    return (
        <PageLayout
            headerContent={
                <>
                    <Title level={3} style={{ color: "#000" }}>
                        Home
                    </Title>
                </>
            }
        >
            <HomePage />
        </PageLayout>
    );
};

export default Home;
