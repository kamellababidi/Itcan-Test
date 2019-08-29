import React from 'react';
import { Row, Col, Table } from 'react-bootstrap';
import MaterialTable from "material-table";


const Dashboard = () => (
    <div className='dashboard-container'>
        <MaterialTable
          columns={[
            { title: "Full Name", field: "fullName" },
            { title: "Gender", field: "gender" },
            { title: "DOB", field: "dob" },
            { title: "City", field: "city" },
            { title: "Nationality", field: "nationality" },
            { title: "Martial Status", field: "martialStatus" },
            { title: "Major", field: "major" },
            { title: "Degree", field: "degree" },
            { title: "University", field: "university" },
            { title: "Years Of Experience", field: "yearsOfExperience" },
            { title: "Employment Status", field: "employmentStatus" },
            { title: "Expected Salary", field: "expectedSalary" },
            { title: "Contact Number", field: "contactNumber" },
            { title: "Email", field: "email" },
            { title: "Visa Status", field: "visaStatus" },
            { title: "Tell us about you", field: "description" },
          ]}
          data={[
            { fullName: "Mehmet", gender: "fullName", birthYear: 1987, birthCity: 63 }
          ]}
          title="Admin Dashboard"
        />
    </div>
);

export default Dashboard;
