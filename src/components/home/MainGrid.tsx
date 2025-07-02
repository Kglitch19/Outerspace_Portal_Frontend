/*
import { Box, Grid, Paper, Typography } from "@mui/material";
import RequestButton from "../buttons/RequestButton";

const MainGrid = () => {



return(
    <Grid container spacing={2}>
        <Grid item xs={12} md={6} lg={4}>
        <Box sx={{display: 'flex', justifyContent: 'left', alignItems: 'left', height: '10%'}}>

            </Box>
            <Paper>
                <RequestButton />
       
            </Paper>
        </Grid>
    </Grid>

);}

export default MainGrid;

*/


import React from "react";
import { Grid, Paper, Typography, Box, Tabs, Tab} from "@mui/material";
import { Clock, CheckCircle, FileText, AlertCircle } from "lucide-react";
import { useState } from "react";


export default function MainGrid() {
    const projects = [
        {
          id: 1,
          title: "Independence Day Social Media Post",
          status: "In Progress",
          revisions: 1,
          maxRevisions: 3,
          createdAt: "2024-06-01",
          dueDate: "2024-06-10",
          amount: 150,
          paid: true
        },
        {
          id: 2,
          title: "Brand Logo Design",
          status: "Under Review",
          revisions: 0,
          maxRevisions: 3,
          createdAt: "2024-05-28",
          dueDate: "2024-06-15",
          amount: 500,
          paid: false
        },
        {
          id: 3,
          title: "Website Banner",
          status: "Completed",
          revisions: 2,
          maxRevisions: 3,
          createdAt: "2024-05-20",
          dueDate: "2024-05-30",
          amount: 300,
          paid: true
        }
      ];
     
    const [tab, setTab] = useState("projects");
  
    return (
    <Grid container spacing={3}>
      {/* Top Cards */}
      <Grid item xs={12} md={3}>
        <Paper elevation={3} sx={{ p: 2 }}>
          <Typography variant="subtitle2" color="text.secondary">Active Projects</Typography>
          <Typography variant="h5" fontWeight="bold">2</Typography>
          <Clock style={{ color: "#3f51b5", marginTop: 8 }} />
        </Paper>
      </Grid>

      <Grid item xs={12} md={3}>
        <Paper elevation={3} sx={{ p: 2 }}>
          <Typography variant="subtitle2" color="text.secondary">Completed</Typography>
          <Typography variant="h5" fontWeight="bold">1</Typography>
          <CheckCircle style={{ color: "green", marginTop: 8 }} />
        </Paper>
      </Grid>

      <Grid item xs={12} md={3}>
        <Paper elevation={3} sx={{ p: 2 }}>
          <Typography variant="subtitle2" color="text.secondary">Total Spent</Typography>
          <Typography variant="h5" fontWeight="bold">$950</Typography>
          <FileText style={{ color: "blue", marginTop: 8 }} />
        </Paper>
      </Grid>

      <Grid item xs={12} md={3}>
        <Paper elevation={3} sx={{ p: 2 }}>
          <Typography variant="subtitle2" color="text.secondary">Pending Payment</Typography>
          <Typography variant="h5" fontWeight="bold">$500</Typography>
          <AlertCircle style={{ color: "orange", marginTop: 8 }} />
        </Paper>
      </Grid>

      <Grid item xs={12}>
  <Paper elevation={3} sx={{ p: 2 }}>
    <Tabs value={tab} onChange={(_, newVal) => setTab(newVal)}>
      <Tab label="My Projects" value="projects" />
      <Tab label="Payment History" value="payments" />
    </Tabs>

    <Box sx={{ mt: 2 }}>
      {tab === "projects" && (
        <>
          {projects.map((project) => (
            <Paper key={project.id} variant="outlined" sx={{ p: 2, mb: 2 }}>
              <Typography variant="subtitle1" fontWeight="bold">
                {project.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Created: {new Date(project.createdAt).toLocaleDateString()} • Due: {new Date(project.dueDate).toLocaleDateString()}
              </Typography>
              <Box mt={1}>
                <Typography variant="body2">
                  Revisions: {project.revisions} / {project.maxRevisions} &nbsp;|&nbsp; 
                  Amount: ${project.amount} &nbsp;|&nbsp;
                  <span style={{ color: project.paid ? "green" : "red", fontWeight: "bold" }}>
                    {project.paid ? "Paid" : "Pending Payment"}
                  </span>
                </Typography>
              </Box>
            </Paper>
          ))}
        </>
      )}

      {tab === "payments" && (
        <>
          <Typography variant="subtitle1" fontWeight="bold" sx={{ mb: 2 }}>
            Payment History
          </Typography>
          {projects.filter(p => p.paid).map((project) => (
            <Paper key={project.id} variant="outlined" sx={{ p: 2, mb: 2 }}>
              <Typography variant="body1" fontWeight="bold">
                {project.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Paid on {new Date(project.createdAt).toLocaleDateString()}
              </Typography>
              <Typography variant="body2" sx={{ mt: 1 }}>
                <strong>${project.amount}</strong> — Completed
              </Typography>
            </Paper>
          ))}
        </>
      )}
    </Box>
  </Paper>
  </Grid>
  </Grid>
 );
}
