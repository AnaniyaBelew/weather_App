import { useEffect, useState } from 'react';
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
    const weekDays=["SUN","MON","TUE","WED","THU","FRI","SAT"];
    const [current_temp,setcurrentTemp]=useState(0);
    const [time,setTime]=useState(null);
    const [today,setToday]=useState(null);
    const [five_days,setfiveDays]=useState(null);
    const clock= new Date();

   useEffect(()=>
   {
    setTime(clock.getHours());
    if(response!==null)
    {
      const {current,forecast}=response;
      const {forecastday}=forecast;
      setfiveDays(forecastday);
      const {hour}=forecastday[0];
      setToday(hour.slice(time));
      setcurrentTemp(current.temp_c);
    }},[response,country])
    return(
        <div className='Weather_show'>
          {response &&
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
                      <strong>{today&&today[0].temp_c}°C</strong>
                    </p>
                    <MDBIcon
                      fas
                      icon="sun"
                      size="2x"
                      className="mb-3"
                      style={{ color: "#ddd" }}
                    />
                    <p className="mb-0">
                      <strong>{time}:00</strong>
                    </p>
                  </div>
                  <div className="flex-column">
                    <p className="small">
                      <strong>{today&&today[1].temp_c}°C</strong>
                    </p>
                    <MDBIcon
                      fas
                      icon="sun"
                      size="2x"
                      className="mb-3"
                      style={{ color: "#ddd" }}
                    />
                    <p className="mb-0">
                      <strong>{time+1}:00</strong>
                    </p>
                  </div>
                  <div className="flex-column">
                    <p className="small">
                      <strong>{today&&today[2].temp_c}°C</strong>
                    </p>
                    <MDBIcon
                      fas
                      icon="cloud"
                      size="2x"
                      className="mb-3"
                      style={{ color: "#ddd" }}
                    />
                    <p className="mb-0">
                      <strong>{time+2}:00</strong>
                    </p>
                  </div>
                  <div className="flex-column">
                    <p className="small">
                      <strong>{today&&today[3].temp_c}°C</strong>
                    </p>
                    <MDBIcon
                      fas
                      icon="cloud"
                      size="2x"
                      className="mb-3"
                      style={{ color: "#ddd" }}
                    />
                    <p className="mb-0">
                      <strong>{time+3}:00</strong>
                    </p>
                  </div>
                  <div className="flex-column">
                    <p className="small">
                      <strong>{today&&today[4].temp_c}°C</strong>
                    </p>
                    <MDBIcon
                      fas
                      icon="cloud-showers-heavy"
                      size="2x"
                      className="mb-3"
                      style={{ color: "#ddd" }}
                    />
                    <p className="mb-0">
                      <strong>{time+4}:00</strong>
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
                      <strong>{five_days&&five_days[0].day.maxtemp_c}°C</strong>
                    </p>
                    <MDBIcon
                      fas
                      icon="sun"
                      size="2x"
                      className="mb-3"
                      style={{ color: "#ddd" }}
                    />
                    <p className="mb-0">
                      <strong>{weekDays[clock.getDay()]}</strong>
                    </p>
                  </div>
                  <div className="flex-column">
                    <p className="small">
                      <strong>{five_days&&five_days[1].day.maxtemp_c}°C</strong>
                    </p>
                    <MDBIcon
                      fas
                      icon="sun"
                      size="2x"
                      className="mb-3"
                      style={{ color: "#ddd" }}
                    />
                    <p className="mb-0">
                      <strong>{weekDays[clock.getDay()+1]}</strong>
                    </p>
                  </div>
                  <div className="flex-column">
                    <p className="small">
                      <strong>{five_days&&five_days[2].day.maxtemp_c}°C</strong>
                    </p>
                    <MDBIcon
                      fas
                      icon="cloud"
                      size="2x"
                      className="mb-3"
                      style={{ color: "#ddd" }}
                    />
                    <p className="mb-0">
                      <strong>{weekDays[clock.getDay()+2]}</strong>
                    </p>
                  </div>
                  <div className="flex-column">
                    <p className="small">
                      <strong>{five_days&&five_days[3].day.maxtemp_c}°C</strong>
                    </p>
                    <MDBIcon
                      fas
                      icon="cloud"
                      size="2x"
                      className="mb-3"
                      style={{ color: "#ddd" }}
                    />
                    <p className="mb-0">
                      <strong>{weekDays[clock.getDay()+3]}</strong>
                    </p>
                  </div>
                  <div className="flex-column">
                    <p className="small">
                      <strong>{five_days&&five_days[4].day.maxtemp_c}°C</strong>
                    </p>
                    <MDBIcon
                      fas
                      icon="cloud-showers-heavy"
                      size="2x"
                      className="mb-3"
                      style={{ color: "#ddd" }}
                    />
                    <p className="mb-0">
                      <strong>{weekDays[clock.getDay()+4]}</strong>
                    </p>
                  </div>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
    }
    </div>
    )
}
export default Weather;