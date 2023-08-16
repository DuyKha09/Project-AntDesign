import { Button, Input, Select } from "antd";
import { useNavigate } from "react-router-dom";
import React from "react";
const { Option } = Select;

const Filter = ({
    searchText,
    setSearchText,
    filterDepartment,
    setFilterDepartment,
    handleRefresh,
}) => {
    const navigate = useNavigate();
    const handleSearchChange = (event) => {
        setSearchText(event.target.value.toLowerCase());
    };

    const handleAddStaff = () => {
        navigate("/addstaff")
    }

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "16px",
                background: 'white',
                width: 1138,
                height: 60,
                borderColor: "1px solid #ccc",
                boxShadow: "0 -2px 8px rgba(0, 0, 0, 0.15)",
            }}
        >
            <Input
                placeholder="Tìm kiếm"
                onChange={handleSearchChange}
                style={{
                    width: 200,
                    border: "none",
                    borderBottom: "1px solid #d9d9d9",
                    borderRadius: 0,
                    marginLeft: '20px'
                }}
                value={searchText}
                bordered={false}
            />
            {/* <div>
                <Select
                    defaultValue=""
                    onChange={(value) => setFilterDepartment(value)}
                    value={filterDepartment}
                    bordered={false}
                >
                    <Option value="">Tất Cả Phòng Ban</Option>
                    <Option value="Sales">Phòng Ban Bán Hàng</Option>
                    <Option value="Chăm Sóc Khách Hàng">Chăm Sóc Khách Hàng</Option>
                </Select>
                <Button
                    style={{
                        color: "#00FF00",
                        borderColor: "#00FF00",
                    }}
                    onClick={handleRefresh}
                >
                    Làm mới
                </Button>
            </div>
            <Button variant="contained" onClick={handleAddStaff} style={{ backgroundColor: 'blue', color: 'white', marginRight: '20px' }}>
                + Thêm Nhân Viên
            </Button> */}
        </div>
    );
};

export default Filter;
