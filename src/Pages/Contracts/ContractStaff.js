import React, { useEffect, useState } from 'react';
import { Table, Tag, Space, Typography, Avatar } from 'antd';
import {
    DashOutlined,
    UserOutlined,
    MenuOutlined,
    BarsOutlined,
    NumberOutlined,
    ScheduleOutlined,
} from '@ant-design/icons';
import Filter from './Filter';
import Brightness1Icon from '@mui/icons-material/Brightness1';
import PageLayout from '../../components/PageLayout';

const { Column } = Table;
const { Title } = Typography;

const ContractStaff = () => {
    const [APIData, setAPIData] = useState([]);
    const [searchText, setSearchText] = useState("");

    const handleRefresh = () => {
        setSearchText("");
    };

    const filteredData = APIData.filter((record) => {
        return (
            record.CreateBy.toLowerCase().includes(searchText)
        );
    });

    const baseURL = 'https://64d5fc1b754d3e0f136169e1.mockapi.io/Unify';

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
                    <Title level={3} style={{ color: "#000" }}>
                        Hợp Đồng Nhân Viên
                    </Title>
                </>
            }
        >
            <div>
                <Filter
                    searchText={searchText}
                    setSearchText={setSearchText}
                    handleRefresh={handleRefresh}
                />
            </div>

            <Table dataSource={filteredData} scroll={{ x: 'max-content' }}
                style={{
                    borderColor: "1px solid #ccc",
                    boxShadow: "0 -2px 8px rgba(0, 0, 0, 0.15)",
                    background: "white",
                }}>
                <Column
                    render={(_, record) => (
                        <Space >
                            <DashOutlined />
                        </Space>
                    )}
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
                            <UserOutlined /> Tạo Bởi
                        </Space>
                    }
                    dataIndex="CreateBy"
                    key="CreateBy"
                    ellipsis={{ showTitle: false }}
                    width={200}
                    render={(CreateBy) => (
                        <Space>
                            <Avatar style={{ backgroundColor: 'purple' }}>
                                {CreateBy.charAt(0)}
                            </Avatar>
                            {CreateBy}
                        </Space>
                    )}
                />
                <Column
                    title={
                        <Space>
                            <BarsOutlined /> Loại Hợp Đồng
                        </Space>
                    }
                    dataIndex="Type"
                    key="Type"
                    ellipsis={{ showTitle: false }}
                    width={200}
                    render={(Type) => (
                        <Space>
                            {Type === 'Hợp đồng xác định hạn' && <Brightness1Icon style={{ color: "orange", fontSize: "10px" }} />}
                            <span>{Type}</span>
                        </Space>
                    )}
                />
                <Column
                    title={
                        <Space>
                            <BarsOutlined /> Trạng Thái
                        </Space>
                    }
                    dataIndex="Status"
                    key="Status"
                    ellipsis={{ showTitle: false }}
                    width={200}
                    render={(status) => {
                        const color = status === 'Hiệu lực' ? 'purple' : 'blue';
                        return (
                            <Tag color={color}>
                                {status}
                            </Tag>
                        );
                    }}
                />
                <Column
                    title={
                        <Space>
                            <BarsOutlined /> Loại Lương
                        </Space>
                    }
                    dataIndex="SalaryType"
                    key="SalaryType"
                    render={(type) => {
                        const color = type === 'Gross To Next' ? 'blue' : 'red';
                        return (
                            <Tag color={color}>
                                {type}
                            </Tag>
                        );
                    }}
                />
                <Column
                    title={
                        <Space>
                            <NumberOutlined /> Người Phụ Thuộc
                        </Space>
                    }
                    dataIndex="Human"
                    key="Human"
                    ellipsis={{ showTitle: false }}
                    width={200}
                />
                <Column
                    title={
                        <Space>
                            <ScheduleOutlined /> Ngày Bắt Đầu
                        </Space>
                    }
                    dataIndex="StartDate"
                    key="StartDate"
                    ellipsis={{ showTitle: false }}
                    width={200}
                />
                <Column
                    title={
                        <Space>
                            <ScheduleOutlined /> Ngày Kết Thúc
                        </Space>
                    }
                    dataIndex="EndDate"
                    key="EndDate"
                    ellipsis={{ showTitle: false }}
                    width={200}
                />
                <Column
                    title={
                        <Space>
                            <NumberOutlined /> Lương Thỏa Thuận
                        </Space>
                    }
                    dataIndex="WageAgreement"
                    key="WageAgreement"
                    ellipsis={{ showTitle: false }}
                    width={200}
                />
                <Column
                    title={
                        <Space>
                            <NumberOutlined /> Lương Đóng Thuế
                        </Space>
                    }
                    dataIndex="TaxableSalary"
                    key="TaxableSalary"
                    ellipsis={{ showTitle: false }}
                    width={200}
                />
                <Column
                    title={
                        <Space>
                            <NumberOutlined /> Tổng Phụ Cấp
                        </Space>
                    }
                    dataIndex="SumAllowance"
                    key="SumAllowance"
                    ellipsis={{ showTitle: false }}
                    width={200}
                />
                <Column
                    title={
                        <Space>
                            <MenuOutlined /> Ghi Chú
                        </Space>
                    }
                    dataIndex="Note"
                    key="Note"
                    ellipsis={{ showTitle: false }}
                    width={200}
                    render={(Note) => (
                        <Space style={{ opacity: 0.5, fontStyle: 'italic' }}>
                            {Note}
                        </Space>
                    )}
                />
                <Column
                    title={
                        <Space>
                            <ScheduleOutlined /> Thời Gian Tạo
                        </Space>
                    }
                    dataIndex="CreateTime"
                    key="CreateTime"
                    ellipsis={{ showTitle: false }}
                    width={200}
                />
                <Column
                    title={
                        <Space>
                            <ScheduleOutlined /> Thời Gian Thay Đổi
                        </Space>
                    }
                    dataIndex="ChangeTime"
                    key="ChangeTime"
                    ellipsis={{ showTitle: false }}
                    width={200}
                />
            </Table>
        </PageLayout>
    );
};

export default ContractStaff;
