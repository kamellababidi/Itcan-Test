import React, { Component } from "react";
import MaterialTable from "material-table";
const baseUrl = "https://itcan-test.herokuapp.com/api/submission"

class Dashboard extends Component {

    constructor(props){
        super(props)
        this.state = {
            isLoaded: false
        }
        this.fetchSubmissions()
    }

    // fetch submissions
    fetchSubmissions() {
        fetch(baseUrl,
        {
            headers: {
                "Content-Type": "text/plain"
            },
        }
        )
        .then(res => res.json())
        .then(
            (result) => {
            this.setState({
                isLoaded: true,
                submissions: result
            });
            },
            (error) => {
            this.setState({
                isLoaded: true,
                error
            });
            }
        )
    }

    render() {
        if(!this.state.isLoaded){
            return(
                <div className='loader'>
                    <h1>fetching ..</h1>
                </div>
            )
        }
        return(
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
                    { title: "Tell us about you", field: "visaStatus" },
                ]}
                data={this.state.submissions.map((subnission) => {
                    return {
                        fullName: subnission.fullName,
                        gender: subnission.gender,
                        dob: subnission.dob,
                        city: subnission.city,
                        nationality: subnission.nationality,
                        martialStatus: subnission.martialStatus,
                        major: subnission.major,
                        degree: subnission.degree,
                        university: subnission.university,
                        yearsOfExperience: subnission.yearsOfExperience,
                        employmentStatus: subnission.employmentStatus,
                        expectedSalary: subnission.expectedSalary,
                        contactNumber: subnission.contactNumber,
                        email: subnission.email,
                        visaStatus: subnission.visaStatus,
                        visaStatus: subnission.visaStatus
                    }
                })}
                title="Admin Dashboard"
                />
            </div>
        )
    }
}


export default Dashboard;
