import {
    Alert,
    AlertTitle,
    Button,
    Card,
    Container,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    TextField,
    Typography,
} from "@mui/material";
import { useFormik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
function AddStaff() {
    const navigate = useNavigate();
    const baseURL = `https://64cef630ffcda80aff519341.mockapi.io/AllofStaff`;

    const validationSchema = Yup.object().shape({
        Name: Yup.string().required("Name is required"),
        Department: Yup.string().required("Department is required"),
        Phone: Yup.string().required("Phone is required"),
        Sex: Yup.string().required("Sex is required"),
        Email: Yup.string().required("Email is required"),
        Bank: Yup.string().required("Bank is required"),
        Date: Yup.string().required("Bank is required"),
        Address: Yup.string().required("Bank is required"),
        Nation: Yup.string().required("Nation is required"),
        BankAccount: Yup.string().required("BankAccount is required"),
        Role: Yup.string().required("Role is required"),
    });

    const initialValues = {
        Name: "",
        Department: "",
        Phone: "",
        Sex: "",
        Email: "",
        Bank: "",
        Date: "",
        Address: "",
        Nation: "",
        BankAccount: "",
        Role: "",
    };

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: (values) => {
            fetch(baseURL, {
                method: "POST",
                body: JSON.stringify(values),
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "same-origin",
            })
                .then((response) => {
                    if (!response.ok) {
                        throw new Error(`HTTP Status: ${response.status}`);
                    }
                    return response.json();
                })
                .then((data) => setOpen(true))
                .catch((error) => console.log(error.message));
        },
    });

    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    const handleDashboard = () => {
        navigate("/allofstaff");
    };

    const handleCancel = () => {
        navigate("/allofstaff");
    };

    return (
        <div>
            <Container sx={{ my: 10 }}>
                <Card variant="outlined" sx={{ p: 5, my: 5 }}>
                    <form onSubmit={formik.handleSubmit}>
                        <Typography variant="h4">Thêm Nhân Viên</Typography>
                        <TextField
                            fullWidth
                            id="Name"
                            name="Name"
                            label="Tên Nhân Viên"
                            value={formik.values.Name}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.Name && Boolean(formik.errors.Name)}
                            helperText={formik.touched.Name && formik.errors.Name}
                            sx={{ pb: 2 }}
                            InputLabelProps={{
                                sx: { fontSize: "1rem", pb: 1 },
                            }}
                        />
                        <TextField
                            fullWidth
                            id="Department"
                            name="Department"
                            label="Phòng Ban"
                            value={formik.values.Department}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.Department && Boolean(formik.errors.Department)}
                            helperText={formik.touched.Department && formik.errors.Department}
                            sx={{ pb: 2 }}
                            InputLabelProps={{
                                sx: { fontSize: "1rem", pb: 1 },
                            }}
                        />
                        <TextField
                            fullWidth
                            id="Phone"
                            name="Phone"
                            label="Số Điện Thoại"
                            value={formik.values.Phone}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.Phone && Boolean(formik.errors.Phone)}
                            helperText={formik.touched.Phone && formik.errors.Phone}
                            sx={{ pb: 2 }}
                            InputLabelProps={{
                                sx: { fontSize: "1rem", pb: 1 },
                            }}
                        />
                        <TextField
                            fullWidth
                            id="Sex"
                            name="Sex"
                            label="Giới Tính"
                            value={formik.values.Sex}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.Sex && Boolean(formik.errors.Sex)}
                            helperText={formik.touched.Sex && formik.errors.Sex}
                            sx={{ pb: 2 }}
                            InputLabelProps={{
                                sx: { fontSize: "1rem", pb: 1 },
                            }}
                        />
                        <TextField
                            fullWidth
                            id="Email"
                            name="Email"
                            label="Email"
                            value={formik.values.Email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.Email && Boolean(formik.errors.Email)}
                            helperText={formik.touched.Email && formik.errors.Email}
                            sx={{ pb: 2 }}
                            InputLabelProps={{
                                sx: { fontSize: "1rem", pb: 1 },
                            }}
                        />
                        <TextField
                            fullWidth
                            id="Bank"
                            name="Bank"
                            label="Ngân Hàng"
                            value={formik.values.Bank}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.Bank && Boolean(formik.errors.Bank)}
                            helperText={formik.touched.Bank && formik.errors.Bank}
                            sx={{ pb: 2 }}
                            InputLabelProps={{
                                sx: { fontSize: "1rem", pb: 1 },
                            }}
                        />
                        <TextField
                            fullWidth
                            id="Date"
                            name="Date"
                            label="Ngày Sinh"
                            value={formik.values.Date}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.Date && Boolean(formik.errors.Date)}
                            helperText={formik.touched.Date && formik.errors.Date}
                            sx={{ pb: 2 }}
                            InputLabelProps={{
                                sx: { fontSize: "1rem", pb: 1 },
                            }}
                        />
                        <TextField
                            fullWidth
                            id="Address"
                            name="Address"
                            label="Địa Chỉ"
                            value={formik.values.Address}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.Address && Boolean(formik.errors.Address)}
                            helperText={formik.touched.Address && formik.errors.Address}
                            sx={{ pb: 2 }}
                            InputLabelProps={{
                                sx: { fontSize: "1rem", pb: 1 },
                            }}
                        />
                        <TextField
                            fullWidth
                            id="Nation"
                            name="Nation"
                            label="Quốc Gia"
                            value={formik.values.Nation}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.Nation && Boolean(formik.errors.Nation)}
                            helperText={formik.touched.Nation && formik.errors.Nation}
                            sx={{ pb: 2 }}
                            InputLabelProps={{
                                sx: { fontSize: "1rem", pb: 1 },
                            }}
                        />
                        <TextField
                            fullWidth
                            id="BankAccount"
                            name="BankAccount"
                            label="TK Ngân Hàng"
                            value={formik.values.BankAccount}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.BankAccount && Boolean(formik.errors.BankAccount)}
                            helperText={formik.touched.BankAccount && formik.errors.BankAccount}
                            sx={{ pb: 2 }}
                            InputLabelProps={{
                                sx: { fontSize: "1rem", pb: 1 },
                            }}
                        />
                        <TextField
                            fullWidth
                            id="Role"
                            name="Role"
                            label="Role"
                            value={formik.values.Role}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.Role && Boolean(formik.errors.Role)}
                            helperText={formik.touched.Role && formik.errors.Role}
                            sx={{ pb: 2 }}
                            InputLabelProps={{
                                sx: { fontSize: "1rem", pb: 1 },
                            }}
                        />
                        <Typography align="left">
                            <Button
                                color="primary"
                                variant="contained"
                                type="submit"
                                sx={{ mt: 2 }}
                            >
                                Submit
                            </Button>
                            <Button onClick={handleCancel} sx={{ mt: 2 }} style={{ marginLeft: 900 }}>Cancel</Button>
                        </Typography>
                    </form>
                </Card>
            </Container>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Congraturation"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        <Alert severity="success">
                            <AlertTitle>Adding successful!</AlertTitle>
                        </Alert>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleDashboard}>Home</Button>
                    <Button autoFocus onClick={handleClose}>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default AddStaff;
