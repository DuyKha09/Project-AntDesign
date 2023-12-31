import React from "react";
import { Menu, Typography } from "antd";
import { Link, useLocation } from "react-router-dom";
import {
    HomeOutlined,
    TeamOutlined,
    UserAddOutlined,
    ClockCircleOutlined,
    MailOutlined,
    SolutionOutlined,
    CalendarOutlined,
    UserOutlined,
    FileDoneOutlined,
    AuditOutlined,
    DollarOutlined,
    ContainerOutlined,
    BookOutlined,
} from "@ant-design/icons";
const { SubMenu, Item } = Menu;
const { Title } = Typography;

export default function Dashboard() {

    const location = useLocation();


    const selectedKey =
        location.pathname === "/departments" ? "2"
            : location.pathname === "/allofstaff" ? "4"
                : location.pathname === "/stepStaff" ? "5"
                    : location.pathname === "/contractstaff" ? "14"
                        : location.pathname === "/mycontract" ? "15"
                            :
                            "1";


    return (
        <div style={{}}>
            <Menu
                selectedKeys={[selectedKey]}
                defaultOpenKeys={["sub1", "sub2", "sub3", "sub4", "sub5", "sub6", "sub7"]}
                mode="inline"
                expandIcon={() => null}
            >
                <Item key="1" icon={<HomeOutlined />}>
                    <Link to="/home">Dashboard</Link>
                </Item>
                <SubMenu key="sub1" title={<Title level={5}> <UserOutlined /> Nhân Viên</Title>}>
                    <Item key="2" icon={<TeamOutlined />}>
                        <Link to="/departments">Phòng Ban</Link>
                    </Item>
                    <Item key="3" icon={<TeamOutlined />}>Phòng Ban của tôi</Item>
                    <Item key="4" icon={<TeamOutlined />}>
                        <Link to="/allofstaff">Toàn bộ nhân viên</Link>
                    </Item>
                    <Item key="5" icon={<UserAddOutlined />}>
                        <Link to="/stepStaff"> Thêm nhân viên mới</Link>
                    </Item>
                </SubMenu>
                <SubMenu key="sub2" title={<Title level={5}> <CalendarOutlined /> Tăng Ca</Title>}>
                    <Item key="6" icon={<ClockCircleOutlined />}>Đơn Tăng Ca Nhân Viên</Item>
                    <Item key="7" icon={<ClockCircleOutlined />}>Đơn Tăng Ca Của Tôi</Item>
                </SubMenu>
                <SubMenu key="sub3" title={<Title level={5} > <SolutionOutlined /> Nghỉ Phép</Title>}>
                    <Item key="8" icon={<FileDoneOutlined />}>Đơn Nghỉ Phép Nhân Viên</Item>
                    <Item key="9" icon={<FileDoneOutlined />}>Đơn Nghỉ Phép Của Tôi</Item>
                </SubMenu>
                <SubMenu key="sub4" title={<Title level={5} > <AuditOutlined /> Đơn Khác</Title>}>
                    <Item key="10" icon={<MailOutlined />}>Danh Sách Đơn Khác</Item>
                    <Item key="11" icon={<MailOutlined />}>Đơn Khác Của Tôi</Item>
                </SubMenu>
                <SubMenu key="sub5" title={<Title level={5} > <DollarOutlined /> Quản Lí Lương</Title>}>
                    <Item key="12" icon={<TeamOutlined />}>Lương Nhân Viên</Item>
                    <Item key="13" icon={<TeamOutlined />}>Lương Của Tôi</Item>
                </SubMenu>
                <SubMenu key="sub6" title={<Title level={5} > <ContainerOutlined /> Hợp Đồng</Title>}>
                    <Item key="14" icon={<MailOutlined />}>
                        <Link to="/contractstaff">Hợp Đồng Nhân Viên</Link>
                    </Item>
                    <Item key="15" icon={<MailOutlined />}>
                        <Link to="/mycontract">Hợp Đồng Của Tôi</Link>
                    </Item>
                </SubMenu>
                <SubMenu key="sub7" title={<Title level={5} > <BookOutlined /> Tuyển Dụng</Title>}>
                    <Item key="16" icon={<TeamOutlined />}>Danh sách ứng viên</Item>
                </SubMenu>
            </Menu>
        </div>
    );
}
