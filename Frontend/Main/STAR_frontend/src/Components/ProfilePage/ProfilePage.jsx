

import React from 'react';

import { Table } from 'reactstrap';
import {
  MDBCol,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
} from 'mdb-react-ui-kit';


export default function ProfilePage({Resdata,fetchData}) {
  
    
  return ( <div style={{}}>
         <div style={{width:'90rem'}}>
          {/* <MDBRow> */}
          <MDBCol lg="10">
            <MDBCard className="mb-4">
              <MDBCardBody>
                <MDBRow>
                <MDBCol>
                  <MDBRow sm="4">
                    <MDBCardText>Full Name</MDBCardText>
                  </MDBRow>
                  <MDBRow sm="6">
                    <MDBCardText className="text-muted">{Resdata.name}</MDBCardText>
                 </MDBRow>
                 </MDBCol>
                 <MDBCol>
                 <MDBRow sm="4">
                    <MDBCardText>Email</MDBCardText>
                  </MDBRow>
                  <MDBRow sm="8">
                    <MDBCardText className="text-muted">{Resdata.email}</MDBCardText>
                  </MDBRow>
                  </MDBCol>
                  <MDBCol>
                  <MDBRow sm="4">
                    <MDBCardText>Id</MDBCardText>
                  </MDBRow>
                  <MDBRow sm="8">
                    <MDBCardText className="text-muted">{Resdata.userId}</MDBCardText>
                  </MDBRow>
                </MDBCol>
                </MDBRow>
                </MDBCardBody>
            </MDBCard>
          </MDBCol>
{/* 
          <MDBCol lg="20">
            <MDBCard className="mb-4">
              <MDBCardBody>
                <MDBCol>
                  <MDBRow sm="4">
                    <MDBCardText>Email</MDBCardText>
                  </MDBRow>
                  <MDBRow sm="8">
                    <MDBCardText className="text-muted">{Resdata.email}</MDBCardText>
                  </MDBRow>
                </MDBCol>
                </MDBCardBody>
            </MDBCard>
          </MDBCol>

                <MDBCol lg="8">
            <MDBCard className="mb-4">
              <MDBCardBody>
              
           </MDBCardBody>
            </MDBCard>
          </MDBCol>
          </MDBRow> */}
          </div>
          <div style = {{marginTop:'4rem', width:'75rem'}}>
        
          <Table hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Project Name</th>
            <th>Vertical</th>
            <th>Horizontal</th>
            <th>SubHorizontal</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
            <td>@mdo</td>
          </tr>
        
        </tbody>
      </Table>
          </div>
        
         
    </div>
  );
}