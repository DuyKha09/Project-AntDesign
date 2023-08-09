import { Button, Input, Select } from "antd";
import React from "react";
const { Option } = Select;

const Filter = ({
    searchText,
    setSearchText,
    filterDepartment,
    setFilterDepartment,
    handleRefresh,
}) => {

    const handleSearchChange = (event) => {
        setSearchText(event.target.value.toLowerCase());
    };



    return (
        <div
            style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                margin: 16,
                paddingInline: 20,
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
                }}
                value={searchText}
                bordered={false}
            />
            <div>
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
            <Button variant="contained" >
                + Thêm Nhân Viên
            </Button>
        </div>
    );
};

export default Filter;
