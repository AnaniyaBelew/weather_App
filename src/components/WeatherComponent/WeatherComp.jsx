import { useState } from 'react';
import '../WeatherComponent/WeatherCompStyle.css'
import {
    MDBCard,
    MDBCardBody,
    MDBCol,
    MDBContainer,
    MDBIcon,
    MDBRow,
  } from "mdb-react-ui-kit";
const Weather=({response,country})=>
{
    const [current_temp,setcurrentTemp]=useState(0);
    if(response)
    {
          const {current,forecast}=response;
          setcurrentTemp(current.temp_c);
          console.log(current,forecast);
    }
    return(
        <div className='Weather_show'>
        <section className="vh-100" style={{ backgroundColor: "#C1CFEA" }}>
      <MDBContainer className="h-100">
        <MDBRow
          className="justify-content-center align-items-center h-100"
          style={{ color: "#282828" }}
        >
          <MDBCol md="9" lg="7" xl="5">
            <MDBCard
              className="mb-4 gradient-custom"
              style={{ borderRadius: "25px" }}
            >
              <MDBCardBody className="p-4">
                <div className="d-flex justify-content-between pb-2">
                  <div>
                    <h2 className="display-2">
                      <strong>{current_temp}°C</strong>
                    </h2>
                    <p className="text-muted mb-0">{country}</p>
                  </div>
                  <div>
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-weather/ilu3.webp"
                      width="150px"
                    />
                  </div>
                </div>
              </MDBCardBody>
            </MDBCard>

            <MDBCard className="mb-4" style={{ borderRadius: "25px" }}>
              <MDBCardBody className="p-4">
                <div className="d-flex justify-content-around text-center pb-3 pt-2">
                  <div className="flex-column">
                    <p className="small">
                      <strong>°C</strong>
                    </p>
                    <MDBIcon
                      fas
                      icon="sun"
                      size="2x"
                      className="mb-3"
                      style={{ color: "#ddd" }}
                    />
                    <p className="mb-0">
                      <strong>:00</strong>
                    </p>
                  </div>
                  <div className="flex-column">
                    <p className="small">
                      <strong>°C</strong>
                    </p>
                    <MDBIcon
                      fas
                      icon="sun"
                      size="2x"
                      className="mb-3"
                      style={{ color: "#ddd" }}
                    />
                    <p className="mb-0">
                      <strong>:00</strong>
                    </p>
                  </div>
                  <div className="flex-column">
                    <p className="small">
                      <strong>°C</strong>
                    </p>
                    <MDBIcon
                      fas
                      icon="cloud"
                      size="2x"
                      className="mb-3"
                      style={{ color: "#ddd" }}
                    />
                    <p className="mb-0">
                      <strong>:00</strong>
                    </p>
                  </div>
                  <div className="flex-column">
                    <p className="small">
                      <strong>°C</strong>
                    </p>
                    <MDBIcon
                      fas
                      icon="cloud"
                      size="2x"
                      className="mb-3"
                      style={{ color: "#ddd" }}
                    />
                    <p className="mb-0">
                      <strong>:00</strong>
                    </p>
                  </div>
                  <div className="flex-column">
                    <p className="small">
                      <strong>°C</strong>
                    </p>
                    <MDBIcon
                      fas
                      icon="cloud-showers-heavy"
                      size="2x"
                      className="mb-3"
                      style={{ color: "#ddd" }}
                    />
                    <p className="mb-0">
                      <strong>:00</strong>
                    </p>
                  </div>
                </div>
              </MDBCardBody>
            </MDBCard>

            <MDBCard className="mb-4" style={{ borderRadius: "25px" }}>
              <MDBCardBody className="p-4">
                <div className="d-flex justify-content-around text-center pb-3 pt-2">
                  <div className="flex-column">
                    <p className="small">
                      <strong>21°C</strong>
                    </p>
                    <MDBIcon
                      fas
                      icon="sun"
                      size="2x"
                      className="mb-3"
                      style={{ color: "#ddd" }}
                    />
                    <p className="mb-0">
                      <strong>Mon</strong>
                    </p>
                  </div>
                  <div className="flex-column">
                    <p className="small">
                      <strong>20°C</strong>
                    </p>
                    <MDBIcon
                      fas
                      icon="sun"
                      size="2x"
                      className="mb-3"
                      style={{ color: "#ddd" }}
                    />
                    <p className="mb-0">
                      <strong>Tue</strong>
                    </p>
                  </div>
                  <div className="flex-column">
                    <p className="small">
                      <strong>16°C</strong>
                    </p>
                    <MDBIcon
                      fas
                      icon="cloud"
                      size="2x"
                      className="mb-3"
                      style={{ color: "#ddd" }}
                    />
                    <p className="mb-0">
                      <strong>Wed</strong>
                    </p>
                  </div>
                  <div className="flex-column">
                    <p className="small">
                      <strong>17°C</strong>
                    </p>
                    <MDBIcon
                      fas
                      icon="cloud"
                      size="2x"
                      className="mb-3"
                      style={{ color: "#ddd" }}
                    />
                    <p className="mb-0">
                      <strong>Thu</strong>
                    </p>
                  </div>
                  <div className="flex-column">
                    <p className="small">
                      <strong>18°C</strong>
                    </p>
                    <MDBIcon
                      fas
                      icon="cloud-showers-heavy"
                      size="2x"
                      className="mb-3"
                      style={{ color: "#ddd" }}
                    />
                    <p className="mb-0">
                      <strong>Fri</strong>
                    </p>
                  </div>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
    </div>
    )
}
export default Weather;