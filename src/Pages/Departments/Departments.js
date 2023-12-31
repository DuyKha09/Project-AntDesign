import React, { useEffect, useState } from 'react';
import { Table, Space, Typography, Button, Avatar } from 'antd';
import { DashOutlined, UserOutlined, BorderlessTableOutlined, PhoneOutlined, MenuOutlined, UnorderedListOutlined } from '@ant-design/icons';
import PageLayout from '../../components/PageLayout';
import Brightness1Icon from '@mui/icons-material/Brightness1';
import { useNavigate } from 'react-router-dom';

const { Column } = Table;
const { Title } = Typography;

const Department = () => {
    const navigate = useNavigate();
    const [APIData, setAPIData] = useState([]);

    const baseURL = 'https://64cef630ffcda80aff519341.mockapi.io/Departments';

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

    const handleAddDepartments = () => {
        navigate("/adddepartments");
    }

    return (
        <PageLayout
            headerContent={
                <>
                    <Title level={3} style={{ color: "#000" }}>
                        Danh Sách Phòng Ban
                    </Title>
                </>
            }>
            <Typography align="right"
                style={{
                    width: 1138,
                    height: 60,
                    marginBottom: 16,
                    borderBottom: "2px solid #ccc",
                    backgroundColor: 'white',
                }}>
                <Button variant="contained" onClick={handleAddDepartments}
                    style={{
                        backgroundColor: 'blue',
                        color: 'white',
                        marginTop: '15px',
                        marginRight: '20px',
                    }}>
                    + Thêm Phòng Ban
                </Button>
            </Typography>
            <Table dataSource={APIData} scroll={{ x: 'max-content' }}
                style={{
                    borderColor: "1px solid #ccc",
                    boxShadow: "0 -2px 8px rgba(0, 0, 0, 0.15)",
                    background: "white",
                }}>
                <Column
                    width={10}
                    render={(_, record) => (
                        <Space >
                            <DashOutlined />
                        </Space>
                    )}
                />
                <Column
                    title={
                        <Space>
                            <UnorderedListOutlined /> Tên Phòng Ban
                        </Space>
                    }
                    dataIndex="Name"
                    key="Name"
                    ellipsis={{ showTitle: false }}
                    width={200}
                    render={(name) => (
                        <Space>
                            {name === 'Sales' && <Brightness1Icon style={{ color: "orange", fontSize: "10px" }} />}
                            {name === 'Chăm Sóc Khách Hàng' && <Brightness1Icon style={{ color: "blue", fontSize: "10px" }} />}
                            {name === 'Marketing' && <Brightness1Icon style={{ color: "green", fontSize: "10px" }} />}
                            {name === 'Design' && <Brightness1Icon style={{ color: "red", fontSize: "10px" }} />}
                            {name === 'Finance' && <Brightness1Icon style={{ color: "purple", fontSize: "10px" }} />}
                            <span>{name}</span>
                        </Space>
                    )}
                />
                <Column
                    title={
                        <Space>
                            <UserOutlined /> Quản Lí
                        </Space>
                    }
                    dataIndex="Manager"
                    key="Manager"
                    ellipsis={{ showTitle: false }}
                    width={200}
                    render={(manage) => (
                        <Space>
                            <Avatar style={{ backgroundColor: '#87d068' }}>
                                {manage.charAt(0)}
                            </Avatar>
                            {manage}
                        </Space>
                    )}
                />
                <Column
                    title={
                        <Space>
                            <BorderlessTableOutlined /> Số Nhân Viên
                        </Space>
                    }
                    dataIndex="Employees"
                    key="Employees"
                    ellipsis={{ showTitle: false }}
                    width={200}
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
                            <PhoneOutlined /> Số Điện Thoại
                        </Space>
                    }
                    dataIndex="Phone"
                    key="Phone"
                    ellipsis={{ showTitle: false }}
                    width={200}
                />
            </Table>
        </PageLayout>
    );
};

export default Department;
