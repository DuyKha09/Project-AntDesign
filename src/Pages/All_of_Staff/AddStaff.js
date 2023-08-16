import React from 'react';
import {
    DatePicker,
    Form,
    Input,
    Radio,
    Select,
} from 'antd';

const AddStaff = () => {

    const layout = {
        marginLeft: 80,
    };
    const label1 = {
        marginLeft: 20,
        marginTop: 10,
        fontWeight: 'bold'
    }
    const input = {
        width: 270,
        height: 40,
    }
    const label2 = {
        marginLeft: 60,
        marginTop: 10,
        fontWeight: 'bold'
    }

    return (
        <>
            <Form layout="vertical" >
                <Form layout="inline" style={layout}>
                    <Form.Item label="Họ" style={label1}>
                        <Input placeholder="Nhập Họ" style={input} />
                    </Form.Item>
                    <Form.Item label="Tên" style={label2}>
                        <Input placeholder="Nhập Tên" style={input} />
                    </Form.Item>
                </Form>
                <Form layout="inline" style={layout}>
                    <Form.Item label="Giới Tính" style={label1}>
                        <Radio.Group>
                            <Radio value="apple"> Nam </Radio>
                            <Radio value="pear"> Nữ </Radio>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item label="Quốc Tịch" style={{ marginLeft: 200, marginTop: 10 }}>
                        <Input placeholder="Nhập Quốc Tịch" style={input} />
                    </Form.Item>
                </Form>
                <Form layout="inline" style={layout}>
                    <Form.Item label="Số Điện Thoại" style={label1}>
                        <Input placeholder="Nhập Số Điện Thoại" style={input} />
                    </Form.Item>
                    <Form.Item label="Ngày Sinh" style={label2}>
                        <DatePicker style={input} />
                    </Form.Item>
                </Form>
                <Form layout="inline" style={layout}>
                    <Form.Item label="Địa Chỉ" style={label1}>
                        <Input placeholder="Nhập Địa Chỉ" style={{ width: 615, height: 40 }} />
                    </Form.Item>
                    <Form.Item style={{ width: 0 }}>
                    </Form.Item>
                </Form>
                <Form layout="inline" style={layout}>
                    <Form.Item label="Phòng Ban" style={{ width: 270, marginLeft: 20, marginTop: 10, fontWeight: 'bold' }}>
                        <Select>
                            <Select.Option value="Sales">Sales</Select.Option>
                            <Select.Option value="Chăm Sóc Khách Hàng">Chăm Sóc Khách Hàng</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item label="CCCD|CMND" style={label2}>
                        <Input placeholder="Nhập CCCD|CMND" style={input} />
                    </Form.Item>
                </Form>
                <Form layout="inline" style={layout}>
                    <Form.Item label="Tên Tài Khoản Ngân Hàng" style={label1}>
                        <Input placeholder="Nhập Tên Tài Khoản Ngân Hàng" style={input} />
                    </Form.Item>
                    <Form.Item label="Số Tài Khoản Ngân Hàng" style={label2}>
                        <Input placeholder="Nhập Số Tài Khoản Ngân Hàng" style={input} />
                    </Form.Item>
                </Form>
                <Form layout="inline" style={layout}>
                    <Form.Item label="Ngân Hàng" style={label1}>
                        <Input placeholder="Nhập Ngân Hàng" style={{ width: 615, height: 40, marginBottom: 15 }} />
                    </Form.Item>
                    <Form.Item >
                    </Form.Item>
                </Form>
            </Form>
        </>
    );
};
export default AddStaff;