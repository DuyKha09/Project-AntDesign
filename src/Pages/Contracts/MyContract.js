import React, { useEffect, useState } from 'react';
import { Typography, Descriptions } from 'antd';
import PageLayout from '../../components/PageLayout';
const { Title } = Typography;

const MyContract = () => {
    const [APIData, setAPIData] = useState([]);

    const baseURL = 'https://64cef630ffcda80aff519341.mockapi.io/AllofStaff';

    const fetchData = async () => {
        try {
            const response = await fetch(baseURL);
            if (!response.ok) {
                throw new Error(`HTTP Status: ${response.status}`);
            }
            const data = await response.json();
            setAPIData(data);
        } catch (error) {
            console.log(error.message);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const itemWithId1 = APIData.find(item => item.id === '1');

    return (
        <PageLayout
            headerContent={
                <>
                    <Title level={3} style={{ color: "#000" }}>
                        Thông Tin Hợp Đồng
                    </Title>
                </>
            }>
            {itemWithId1 ? (
                <div style={{ background: 'white', marginLeft: 120, textAlign: 'left', marginTop: -20 }}>
                    <Descriptions title={<span style={{ fontWeight: '600', color: 'blue', fontSize: 30 }}>Thông tin người lao động</span>}>
                        <Descriptions.Item label={<span style={{ fontWeight: 'bold', color: 'black' }}>Họ và tên</span>}>{itemWithId1.Name}</Descriptions.Item>
                        <Descriptions.Item label={<span style={{ fontWeight: 'bold', color: 'black' }}>Giới tính</span>}>{itemWithId1.Sex}</Descriptions.Item>
                    </Descriptions>
                    <Descriptions>
                        <Descriptions label={<span style={{ fontWeight: 'bold', color: 'black' }}>Sinh ngày</span>}>{itemWithId1.Date}</Descriptions>
                    </Descriptions>
                    <Descriptions>
                        <Descriptions label={<span style={{ fontWeight: 'bold', color: 'black' }}>CCCD|CMND</span>}>123456789</Descriptions>
                    </Descriptions>
                    <Descriptions>
                        <Descriptions label={<span style={{ fontWeight: 'bold', color: 'black' }}>Địa chỉ</span>}>{itemWithId1.Address}</Descriptions>
                    </Descriptions>
                    <Descriptions>
                        <Descriptions label={<span style={{ fontWeight: 'bold', color: 'black' }}>Số điện thoại</span>}>{itemWithId1.Phone}</Descriptions>
                    </Descriptions>

                    <Descriptions title={<span style={{ fontWeight: '600', color: 'blue', fontSize: 30 }}>Hợp đồng lao động</span>} />

                    <Descriptions title={<span style={{ color: 'blue', fontSize: 20 }}>1. Công việc, phòng ban và thời hạn hợp đồng</span>}>
                        <Descriptions label={<span style={{ fontWeight: 'bold', color: 'black' }}>Phòng ban công tác</span>}>{itemWithId1.Department}</Descriptions>
                    </Descriptions>
                    <Descriptions>
                        <Descriptions label={<span style={{ fontWeight: 'bold', color: 'black' }}>Loại hợp đồng</span>}>Hợp đồng xác định hạn</Descriptions>
                    </Descriptions>
                    <Descriptions>
                        <Descriptions.Item label={<span style={{ fontWeight: 'bold', color: 'black' }}>Từ ngày</span>}>05.08.2023</Descriptions.Item>
                        <Descriptions.Item label={<span style={{ fontWeight: 'bold', color: 'black' }}>Đến ngày</span>}>30.11.2023</Descriptions.Item>
                    </Descriptions>

                    <Descriptions title={<span style={{ color: 'blue', fontSize: 20 }}>2. Lương, phụ cấp và các khoản bổ sung khác</span>}>
                        <Descriptions.Item label={<span style={{ fontWeight: 'bold', color: 'black' }}>Lương căn bản</span>}>90.000.000</Descriptions.Item>
                        <Descriptions.Item label={<span style={{ fontWeight: 'bold', color: 'black' }}>Lương tính thuế</span>}>80.000.000</Descriptions.Item>
                    </Descriptions>
                    <Descriptions>
                        <Descriptions label={<span style={{ fontWeight: 'bold', color: 'black' }}>Các phụ cấp (mỗi tháng)</span>}></Descriptions>
                    </Descriptions>
                    <Descriptions>
                        <Descriptions label={<span style={{ fontWeight: 'bold', color: 'black' }}>Hình thức trả lương</span>}>Chuyển khoản</Descriptions>
                    </Descriptions>
                    <Descriptions>
                        <Descriptions label={<span style={{ fontWeight: '500', color: 'black', marginLeft: 30 }}>Số TK ngân hàng</span>}>String</Descriptions>
                    </Descriptions>
                    <Descriptions>
                        <Descriptions label={<span style={{ fontWeight: '500', color: 'black', marginLeft: 30 }}>Chủ tài khoản</span>}>String</Descriptions>
                    </Descriptions>
                    <Descriptions>
                        <Descriptions label={<span style={{ fontWeight: '500', color: 'black', marginLeft: 30 }}>Ngân hàng</span>}>String</Descriptions>
                    </Descriptions>

                    <Descriptions title={<span style={{ color: 'blue', fontSize: 20 }}>3. Thời gian làm việc và ghi chú</span>}>
                        <Descriptions label={<span style={{ fontWeight: 'bold', color: 'black' }}>Số ngày làm việc 1 tuần</span>}>5</Descriptions>
                    </Descriptions>
                    <Descriptions>
                        <Descriptions label={<span style={{ fontWeight: 'bold', color: 'black' }}>Số người phụ thuộc</span>}>1</Descriptions>
                    </Descriptions>
                    <Descriptions>
                        <Descriptions label={<span style={{ fontWeight: 'bold', color: 'black' }}>Ghi chú</span>}>abc</Descriptions>
                    </Descriptions>
                </div>
            ) : (
                <p></p>
            )}
        </PageLayout>
    );
};

export default MyContract;
