import React, { useEffect, useState } from 'react';
import { Table, Tag, Space, Typography, Avatar } from 'antd';
import {
    DashOutlined,
    UserOutlined,
    MenuOutlined,
    UnorderedListOutlined,
    PhoneOutlined,
    BankOutlined,
    CarryOutOutlined,
    CompassOutlined,
    GlobalOutlined,
    DollarOutlined,
} from '@ant-design/icons';
import Filter from './Filter';
import Brightness1Icon from '@mui/icons-material/Brightness1';
import PageLayout from '../../components/PageLayout';

const { Column } = Table;
const { Title } = Typography;

const AllOfStaff = () => {
    const [APIData, setAPIData] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [filterDepartment, setFilterDepartment] = useState("");

    const handleRefresh = () => {
        setSearchText("");
        setFilterDepartment("");
    };

    const filteredData = APIData.filter((record) => {
        return (
            record.Name.toLowerCase().includes(searchText.toLowerCase()) &&
            (filterDepartment === "" || record.Department === filterDepartment)
        );
    });

    const baseURL = 'https://64cef630ffcda80aff519341.mockapi.io/AllofStaff';

    const fetchData = async () => {
        try {
            const response = await fetch(baseURL);
            if (!response.ok) {
                throw new Error(`HTTP Status: ${response.status}`);
            }
            const data = await response.json();
            data.sort((a, b) => b.id - a.id);
            setAPIData(data);
        } catch (error) {
            console.log(error.message);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <PageLayout
            headerContent={
                <>
                    <Title level={3} style={{ color: "#000", marginTop: 0 }}>
                        Danh Sách Nhân Viên
                    </Title>
                </>
            }
        >
            <div>
                <Filter
                    searchText={searchText}
                    setSearchText={setSearchText}
                    filterDepartment={filterDepartment}
                    setFilterDepartment={setFilterDepartment}
                    handleRefresh={handleRefresh}
                />
            </div>

            <Table dataSource={filteredData} scroll={{ x: 'max-content' }}>
                <Column
                    render={(_, record) => (
                        <Space >
                            <DashOutlined />
                        </Space>
                    )}
                />
                <Column
                    dataIndex="Role"
                    key="Role"
                    render={(role) => {
                        const color = role === "Manage" ? "blue" : "gray";
                        const iconStyle = {
                            color: color,
                            backgroundColor: color === "blue" ? "lightblue" : "lightgray",
                            borderRadius: "50%",
                            padding: "5px",
                        };
                        return (
                            <UserOutlined style={iconStyle} />
                        );
                    }}
                />
                <Column
                    title="ID"
                    dataIndex="id"
                    key="id"
                    render={(id, _, index) => index + 1}
                />
                <Column
                    title={
                        <Space>
                            <MenuOutlined /> Tên Nhân Viên
                        </Space>
                    }
                    dataIndex="Name"
                    key="Name"
                    ellipsis={{ showTitle: false }}
                    width={200}
                    render={(name) => (
                        <Space>
                            <Avatar style={{ backgroundColor: '#87d068' }}>
                                {name.charAt(0)}
                            </Avatar>
                            {name}
                        </Space>
                    )}
                />
                <Column
                    title={
                        <Space>
                            <UnorderedListOutlined /> Phòng Ban
                        </Space>
                    }
                    dataIndex="Department"
                    key="Department"
                    ellipsis={{ showTitle: false }}
                    width={200}
                    render={(department) => (
                        <Space>
                            {department === 'Sales' && <Brightness1Icon style={{ color: "orange", fontSize: "10px" }} />}
                            {department === 'Chăm Sóc Khách Hàng' && <Brightness1Icon style={{ color: "blue", fontSize: "10px" }} />}
                            <span>{department}</span>
                        </Space>
                    )}
                />
                <Column
                    title={
                        <Space>
                            <PhoneOutlined /> Số Điện Thoại
                        </Space>
                    }
                    dataIndex="Phone"
                    key="Phone"
                    ellipsis={{ showTitle: false }}
                    width={200}
                />
                <Column
                    title={
                        <Space>
                            <UnorderedListOutlined /> Giới Tính
                        </Space>
                    }
                    dataIndex="Sex"
                    key="Sex"
                    render={(sex) => {
                        const color = sex === 'Male' ? 'red' : 'blue';
                        return (
                            <Tag color={color}>
                                {sex}
                            </Tag>
                        );
                    }}
                />
                <Column
                    title={
                        <Space>
                            <MenuOutlined /> Email
                        </Space>
                    }
                    dataIndex="Email"
                    key="Email"
                    ellipsis={{ showTitle: false }}
                    width={200}
                />
                <Column
                    title={
                        <Space>
                            <BankOutlined /> Ngân Hàng
                        </Space>
                    }
                    dataIndex="Bank"
                    key="Bank"
                    ellipsis={{ showTitle: false }}
                    width={200}
                />
                <Column
                    title={
                        <Space>
                            <CarryOutOutlined /> Ngày Sinh
                        </Space>
                    }
                    dataIndex="Date"
                    key="Date"
                    ellipsis={{ showTitle: false }}
                    width={200}
                />
                <Column
                    title={
                        <Space>
                            <CompassOutlined /> Địa Chỉ
                        </Space>
                    }
                    dataIndex="Address"
                    key="Address"
                    ellipsis={{ showTitle: false }}
                    width={200}
                />
                <Column
                    title={
                        <Space>
                            <GlobalOutlined /> Quốc Gia
                        </Space>
                    }
                    dataIndex="Nation"
                    key="Nation"
                    ellipsis={{ showTitle: false }}
                    width={200}
                />
                <Column
                    title={
                        <Space>
                            <DollarOutlined /> TK Ngân Hàng
                        </Space>
                    }
                    dataIndex="BankAccount"
                    key="BankAccount"
                    ellipsis={{ showTitle: false }}
                    width={200}
                />
            </Table>
        </PageLayout>
    );
};

export default AllOfStaff;
