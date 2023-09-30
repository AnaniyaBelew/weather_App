import '../WeatherComponent/WeatherCompStyle.css'
import { useEffect, useState } from 'react';
import axios from 'axios';
import {
    MDBCard,
    MDBCardBody,
    MDBCol,
    MDBContainer,
    MDBIcon,
    MDBRow,
    MDBTypography,
  } from "mdb-react-ui-kit";
const Weather=()=>
{
    const [temp,settemp]= useState(0);
    const [Country,setCountry]= useState("")
    const [today,setToday]=useState([]);
    const [forecast_of_today,setForecatsOfToday]=useState([])
    const [currentTime,setCurentTime]=useState(0);
    const cur= new Date();
    const fecth_api= async ()=>
    {
        const response = await axios.get("http://api.weatherapi.com/v1/forecast.json?key=6e600fe077094ef9b0d80232232709 &q=London&aqi=no&days=1");
        const {current,location,forecast}=response.data;
        setCountry(location.name+","+location.country);
        settemp(current.temp_c);
        const {forecastday}=forecast;
        setToday(forecastday);
        const {hour}=today[0];
        setForecatsOfToday(hour.slice(currentTime-1))
    }
    useEffect(()=>
    {
      
      setCurentTime(cur.getHours());
      fecth_api();
    },[currentTime])
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
                      <strong>{temp}°C</strong>
                    </h2>
                    <p className="text-muted mb-0">{Country}</p>
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
                      <strong>{forecast_of_today[0].temp_c}°C</strong>
                    </p>
                    <MDBIcon
                      fas
                      icon="sun"
                      size="2x"
                      className="mb-3"
                      style={{ color: "#ddd" }}
                    />
                    <p className="mb-0">
                      <strong>{currentTime}:00</strong>
                    </p>
                  </div>
                  <div className="flex-column">
                    <p className="small">
                      <strong>{forecast_of_today[1].temp_c}°C</strong>
                    </p>
                    <MDBIcon
                      fas
                      icon="sun"
                      size="2x"
                      className="mb-3"
                      style={{ color: "#ddd" }}
                    />
                    <p className="mb-0">
                      <strong>{currentTime+1}:00</strong>
                    </p>
                  </div>
                  <div className="flex-column">
                    <p className="small">
                      <strong>{forecast_of_today[2].temp_c}°C</strong>
                    </p>
                    <MDBIcon
                      fas
                      icon="cloud"
                      size="2x"
                      className="mb-3"
                      style={{ color: "#ddd" }}
                    />
                    <p className="mb-0">
                      <strong>{currentTime+2}:00</strong>
                    </p>
                  </div>
                  <div className="flex-column">
                    <p className="small">
                      <strong>{forecast_of_today[3].temp_c}°C</strong>
                    </p>
                    <MDBIcon
                      fas
                      icon="cloud"
                      size="2x"
                      className="mb-3"
                      style={{ color: "#ddd" }}
                    />
                    <p className="mb-0">
                      <strong>{currentTime+3}:00</strong>
                    </p>
                  </div>
                  <div className="flex-column">
                    <p className="small">
                      <strong>{forecast_of_today[4].temp_c}°C</strong>
                    </p>
                    <MDBIcon
                      fas
                      icon="cloud-showers-heavy"
                      size="2x"
                      className="mb-3"
                      style={{ color: "#ddd" }}
                    />
                    <p className="mb-0">
                      <strong>{currentTime+4}:00</strong>
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