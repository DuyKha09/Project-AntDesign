import React from 'react';
import {
    Form,
    Input
} from 'antd';

const AddAccount = () => {

    const layout = {
        marginLeft: 80,
    };
    const label1 = {
        marginLeft: 20,
        marginTop: 10,
        fontWeight: 'bold',
    }

    return (
        <>
            <Form layout="vertical" >
                <Form layout="inline" style={layout}>
                    <Form.Item
                        label="Tên Đăng Nhập"
                        name="Tên Đăng Nhập"
                        style={label1}
                    // rules={[
                    //     {
                    //         required: true,
                    //         message: 'Hãy nhập tên đăng nhập!',
                    //     },
                    // ]}
                    >
                        <Input placeholder="Nhập Tên Đăng Nhập" style={{ width: 615, height: 40 }} />
                    </Form.Item>
                    <Form.Item style={{ width: 0 }}>
                    </Form.Item>
                </Form>
                <Form layout="inline" style={layout}>
                    <Form.Item
                        label="Email"
                        name="Email"
                        style={label1}
                    // rules={[
                    //     {
                    //         required: true,
                    //         message: 'Hãy nhập Email!',
                    //     },
                    // ]}
                    >
                        <Input placeholder="Nhập Email" style={{ width: 615, height: 40 }} />
                    </Form.Item>
                    <Form.Item style={{ width: 0 }}>
                    </Form.Item>
                </Form>
                <Form layout="inline" style={layout}>
                    <Form.Item
                        label="Mật Khẩu"
                        name="Mật Khẩu"
                        style={label1}
                    // rules={[
                    //     {
                    //         required: true,
                    //         message: 'Nhập mật khẩu của bạn!',
                    //     },
                    // ]}
                    >
                        <Input.Password placeholder="Nhập Mật Khẩu" style={{ width: 615, height: 40 }} />
                        <p style={{
                            textAlign: 'left',
                            opacity: 0.2,
                            fontSize: 13,
                            display: 'table-cell'
                        }}> Mật khẩu cần ít nhất 1 kí tư đặt biệt, 1 chữ in hoa và 1 số </p>
                    </Form.Item>
                    <Form.Item style={{ width: 0 }}>
                    </Form.Item>
                </Form>
                <Form layout="inline" style={layout}>
                    <Form.Item
                        label="Xác Nhận Mật Khẩu"
                        name="Xác Nhận Mật Khẩu"
                        style={label1}
                    // rules={[
                    //     {
                    //         required: true,
                    //         message: 'Nhập lại mật khẩu của bạn!',
                    //     },
                    // ]}
                    >
                        <Input.Password placeholder="Nhập Lại Mật Khẩu" style={{ width: 615, height: 40 }} />
                    </Form.Item>
                    <Form.Item style={{ width: 0 }}>
                    </Form.Item>
                </Form>
            </Form>
        </>
    );
};
export default AddAccount;