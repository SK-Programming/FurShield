
import React from "react";
import {
    Box,
    Card,
    CardContent,
    Typography,
    Grid,
    Avatar,
    Button,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
} from "@mui/material";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import PetsIcon from "@mui/icons-material/Pets";
import PeopleIcon from "@mui/icons-material/People";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import HomeWorkIcon from "@mui/icons-material/HomeWork";

const adoptionData = [
    { name: "Jan", value: 200 },
    { name: "Feb", value: 250 },
    { name: "Mar", value: 220 },
    { name: "Apr", value: 120 },
    { name: "May", value: 300 },
    { name: "Jun", value: 260 },
    { name: "Jul", value: 310 },
    { name: "Aug", value: 270 },
    { name: "Sep", value: 300 },
];

const Dashboard = () => {
    return (
        <Box p={2} sx={{ background: "#FFF", minHeight: "100vh" }}>
            <Grid container spacing={2}>

                <Grid item xs={12} md={3}>
                    <Card sx={{ p: 2, borderRadius: 5, bgcolor: "#D3DCC0" }}>

                        <Card sx={{ width: "200px", p: 2, borderRadius: 5, bgcolor: "#1C1C26", color: "#fff" }}>
                            <Typography variant="p4" >
                                Adoption Graph
                            </Typography>


                            <Typography variant="h4" color="#FFF">
                                <svg width="25" height="25" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.95125 15.9375H3.86856C3.32146 15.9377 2.78622 15.778 2.3287 15.478C1.87118 15.1781 1.51133 14.7509 1.29344 14.249C1.07554 13.7472 1.0091 13.1926 1.10229 12.6535C1.19547 12.1144 1.44423 11.6143 1.81794 11.2147L2.66475 10.3062C3.07362 9.8681 3.29638 9.28831 3.28607 8.68912C3.27576 8.08992 3.03319 7.51814 2.6095 7.09431L1.77756 6.26237C1.68079 6.16218 1.62725 6.02799 1.62846 5.88869C1.62967 5.7494 1.68554 5.61616 1.78404 5.51766C1.88253 5.41916 2.01578 5.36329 2.15507 5.36208C2.29436 5.36087 2.42856 5.41442 2.52875 5.51119L3.35963 6.34312C3.97797 6.9617 4.33198 7.79619 4.34704 8.67069C4.36211 9.54519 4.03705 10.3914 3.44038 11.0309L2.59356 11.9393C2.36198 12.1879 2.20795 12.4986 2.15037 12.8334C2.09278 13.1682 2.13415 13.5126 2.26939 13.8242C2.40463 14.1359 2.62787 14.4013 2.91174 14.588C3.19561 14.7746 3.52777 14.8744 3.8675 14.875H4.40194C4.39981 14.6582 4.40088 14.3863 4.41044 14.076C4.43806 13.2685 4.52731 12.1816 4.78231 11.0861C5.03731 9.99706 5.46444 8.857 6.19544 7.97938C6.84675 7.19738 7.73181 6.63531 8.89632 6.50463V3.38513C8.89744 2.76929 9.14265 2.17901 9.57821 1.74365C10.0138 1.30828 10.6042 1.06334 11.22 1.0625C11.7598 1.0625 12.1975 1.50131 12.1975 2.04213V2.55531H13.4481C14.1493 2.55531 14.7985 2.91762 15.1683 3.51369L15.6304 4.25956C16.439 5.56537 15.5582 7.23881 14.0633 7.34613V14.2864C14.0633 15.198 13.3248 15.9375 12.4132 15.9375H11.8256V14.2864C11.8258 13.9225 11.7542 13.5622 11.6151 13.226C11.4759 12.8899 11.2719 12.5844 11.0147 12.327C10.7575 12.0697 10.4521 11.8656 10.1159 11.7263C9.77981 11.5871 9.41953 11.5154 9.05569 11.5154H8.12281C7.98192 11.5154 7.84679 11.5713 7.74716 11.671C7.64754 11.7706 7.59156 11.9057 7.59156 12.0466C7.59156 12.1875 7.64754 12.3226 7.74716 12.4223C7.84679 12.5219 7.98192 12.5779 8.12281 12.5779H9.05569C9.99813 12.5779 10.7631 13.3429 10.7631 14.2864V15.9375H4.95125Z" fill="white" />
                                </svg>
                                24
                            </Typography>
                            <ResponsiveContainer width="100%" height={150}>
                                <BarChart data={adoptionData}>
                                    <XAxis dataKey="name" stroke="#fff" />
                                    <YAxis stroke="#fff" />
                                    <Tooltip />
                                    <Bar dataKey="value" fill="#fe8756" radius={6} />
                                </BarChart>
                            </ResponsiveContainer>
                        </Card>

                        {/* Pets List */}
                        <Box mt={2}>
                            <Typography variant="h6" gutterBottom>
                                Pets
                            </Typography>
                            <Card
                                sx={{
                                    maxHeight: 400,
                                    overflowY: "auto",
                                    borderRadius: 12,
                                    bgcolor: "#1C1C26",
                                    color: "#fff",
                                }}
                            >
                                <List>
                                    {[...Array(7)].map((_, i) => (
                                        <ListItem key={i}>
                                            <ListItemAvatar>
                                                <Avatar src="https://via.placeholder.com/40" />
                                            </ListItemAvatar>
                                            <ListItemText
                                                primary="Jack"
                                                secondary="Sep 25 - 3:00pm"
                                                primaryTypographyProps={{ color: "#fff" }}
                                                secondaryTypographyProps={{ color: "#aaa" }}
                                            />
                                        </ListItem>
                                    ))}
                                </List>
                            </Card>
                        </Box>
                    </Card>
                </Grid>



                <Grid item xs={12} md={9}>
                    <Grid container spacing={2}>

                        <Grid item xs={12} sm={4} md={3}>
                            <Card sx={{ bgcolor: "#1a1a1a", color: "#fff", borderRadius: 3 }}>
                                <CardContent>
                                    <Typography>Number of pets Owners</Typography>
                                    <Typography variant="h5">2800</Typography>
                                    <PeopleIcon />
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={4} md={3}>
                            <Card sx={{ bgcolor: "#1a1a1a", color: "#fff", borderRadius: 3 }}>
                                <CardContent>
                                    <Typography>Number of Veterinarians</Typography>
                                    <Typography variant="h5">800</Typography>
                                    <MedicalServicesIcon />
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={4} md={3}>
                            <Card sx={{ bgcolor: "#1a1a1a", color: "#fff", borderRadius: 3 }}>
                                <CardContent>
                                    <Typography>Number of Animal Shelters</Typography>
                                    <Typography variant="h5">400</Typography>
                                    <HomeWorkIcon />
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>


                    <Box mt={3}>
                        <Typography variant="h6" fontWeight="bold">
                            Products Sold This Month
                        </Typography>
                        <Card sx={{ borderRadius: 3, p: 2, bgcolor: "#e8f4e7" }}>
                            <ResponsiveContainer width="100%" height={250}>
                                <BarChart data={adoptionData}>
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Bar dataKey="value" fill="#fe8756" radius={6} />
                                </BarChart>
                            </ResponsiveContainer>
                        </Card>
                    </Box>

                    {/* Top Sold */}
                    <Box mt={3}>
                        <Typography variant="h6" fontWeight="bold">
                            Top Sold This Month
                        </Typography>
                        <Grid container spacing={2} mt={1}>
                            {[...Array(4)].map((_, i) => (
                                <Grid item xs={12} sm={6} md={3} key={i}>
                                    <Card sx={{ borderRadius: 3 }}>
                                        <img
                                            src="https://via.placeholder.com/150"
                                            alt="product"
                                            style={{ width: "100%", borderRadius: "12px 12px 0 0" }}
                                        />
                                        <CardContent>
                                            <Typography>Dry Food (Kribble)</Typography>
                                            <Typography color="primary" fontWeight="bold">
                                                $40.0
                                            </Typography>
                                            <Button variant="contained" size="small" fullWidth>
                                                Buy Product
                                            </Button>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Dashboard;
