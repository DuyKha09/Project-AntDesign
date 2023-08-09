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
function AddDepartments() {
    const navigate = useNavigate();
    const baseURL = `https://64cef630ffcda80aff519341.mockapi.io/Departments`;

    const validationSchema = Yup.object().shape({
        Name: Yup.string().required("Name is required"),
        Manager: Yup.string().required("Manager is required"),
        Employees: Yup.string().required("Employees is required"),
        Phone: Yup.string().required("Phone is required"),
        Email: Yup.string().required("Email is required"),
    });

    const initialValues = {
        Name: "",
        Manager: "",
        Employees: "",
        Phone: "",
        Email: "",
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
        navigate("/departments");
    };

    const handleCancel = () => {
        navigate("/departments");
    };

    return (
        <div>
            <Container sx={{ my: 10 }}>
                <Card variant="outlined" sx={{ p: 5, my: 5 }}>
                    <form onSubmit={formik.handleSubmit}>
                        <Typography variant="h4">Thêm Phòng Ban</Typography>
                        <TextField
                            fullWidth
                            id="Name"
                            name="Name"
                            label="Tên Phòng Ban"
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
                            id="Manager"
                            name="Manager"
                            label="Quản Lí"
                            value={formik.values.Manager}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.Manager && Boolean(formik.errors.Manager)}
                            helperText={formik.touched.Manager && formik.errors.Manager}
                            sx={{ pb: 2 }}
                            InputLabelProps={{
                                sx: { fontSize: "1rem", pb: 1 },
                            }}
                        />
                        <TextField
                            fullWidth
                            id="Employees"
                            name="Employees"
                            label="Số Nhân Viên"
                            value={formik.values.Employees}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.Employees && Boolean(formik.errors.Employees)}
                            helperText={formik.touched.Employees && formik.errors.Employees}
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

export default AddDepartments;
