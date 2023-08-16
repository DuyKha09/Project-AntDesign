import React, { useState } from 'react';
import { Button, message, Steps, Typography } from 'antd';
import AddStaff from './AddStaff';
import AddAccount from './AddAccount';
import PageLayout from '../../components/PageLayout';
import { useNavigate } from "react-router-dom";
const { Title } = Typography;

const steps = [
    {
        title: 'Tạo Tài Khoản',
        content: <AddAccount />,
    },
    {
        title: 'Thông Tin Cá Nhân',
        content: <AddStaff />,
    },
];
const StepsStaff = () => {
    const navigate = useNavigate();
    const [current, setCurrent] = useState(0);

    const next = () => {
        setCurrent(current + 1);
    };
    const cancle = () => {
        navigate("/allofstaff")
    }
    const prev = () => {
        setCurrent(current - 1);
    };
    const items = steps.map((item) => ({
        key: item.title,
        title: item.title,
    }));

    return (
        <PageLayout
            headerContent={
                <>
                    <Title level={3} style={{ color: "#000" }}>
                        Thêm Nhân Viên
                    </Title>
                </>
            }>
            <Steps current={current} items={items} style={{ width: 800, marginBottom: 20, marginLeft: 150, marginTop: -40 }} />
            <div
                style={{
                    backgroundColor: 'white',
                    width: 800,
                    marginLeft: 150,
                    borderColor: "2px solid #ccc",
                    boxShadow: "0 -5px 10px rgba(0, 0, 0, 0.15)",
                }}>
                {steps[current].content}

                <div>
                    {current < steps.length - 1 && (
                        <Button
                            onClick={cancle}
                            style={{
                                margin: 15,
                            }}>
                            Quay Về
                        </Button>
                    )}
                    {current < steps.length - 1 && (
                        <Button type="primary" onClick={() => next()} style={{ margin: 15, marginLeft: 460, width: 90 }}>
                            Tiếp
                        </Button>
                    )}
                    {current > 0 && (
                        <Button
                            style={{
                                margin: '0 8px',
                                marginBottom: 15,
                            }}
                            onClick={() => prev()}

                        >
                            Quay Về
                        </Button>
                    )}
                    {current === steps.length - 1 && (
                        <Button type="primary" onClick={() => message.success('Thêm Nhân Viên Mới Thành Công')} style={{ marginBottom: 15, marginLeft: 460 }}>
                            Hoàn Thành
                        </Button>
                    )}
                </div>
            </div>
        </PageLayout>
    );
};
export default StepsStaff;