import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Col, Row, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { MDBDataTable, MDBIcon, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBBtn } from 'mdbreact';
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import swal from "sweetalert";
import commonConstants from '../../../util/common.constants'
import notificationAlertUtil from '../../../util/notificationManager';

class Surveys extends Component {

  constructor(props) {
    super(props)

    this.state = {
      patients: [],
      data: [],
      rows: [],
      columns: [
        {
          label: 'Hospital Name',
          field: 'name',
        },
        {
          label: 'Local Patient Count',
          field: 'cumulative_local'
        },
        {
          label: 'Local Patients Treatment Count',
          field: 'treatment_local'
        },
        {
          label: 'Foreign Patient Count',
          field: 'cumulative_foreign'
        },
        {
          label: 'Foreign Patients Treatment Count',
          field: 'treatment_foreign'
        },
        {
          label: 'Total Patient Count',
          field: 'cumulative_total'
        },
        {
          label: 'Total Treatment Count',
          field: 'treatment_total'
        },
        
      ]
    }

  }

  componentDidMount() {
    this.getPatients()
  }

  getPatients() {
    let options = {
      responseType: "application/json"
    };
  
    axios.get(`${commonConstants.API_URL}/`, options).then(res => {
      var hospitals = res.data.data.hospital_data;
      var allFiledHospitals = [];
      for (let hospital of hospitals) {
        allFiledHospitals.push({
          name: hospital.hospital.name || '',
          cumulative_local: parseInt(hospital.cumulative_local) || 0,
          treatment_local: parseInt(hospital.treatment_local) || 0,
          cumulative_foreign: parseInt(hospital.cumulative_foreign)|| 0,   
          treatment_foreign: parseInt(hospital.treatment_foreign) || 0,
          cumulative_total: parseInt(hospital.cumulative_total) || 0,   
          treatment_total: parseInt(hospital.treatment_total) || 0,        
        });
      }
      this.setState({

        rows: allFiledHospitals,
      });
      this.setState({
        data: {
          columns: this.state.columns,
          rows: this.state.rows
        }
      });
    }).catch(error => {
      notificationAlertUtil.errorAlert(error)
    });
  }

  render() {
    return (
      <div className="animated fadeIn">

            <Row>
              <Col xs="12">
                <Card>
                  <CardHeader>
                    <strong>Hospital Patient Summary</strong>
                  </CardHeader>
                  <CardBody>
                    
                    <MDBDataTable
                      striped
                      bordered
                      autoWidth={true}
                      hover
                      data={this.state.data}
                    />
                  </CardBody>
                </Card>
              </Col>
            </Row>
      </div>

    );
  }
}

export default Surveys;
