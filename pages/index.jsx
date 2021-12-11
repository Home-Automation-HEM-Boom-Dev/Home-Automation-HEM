import User from "../src/components/user/User.jsx";
import Weather from "../src/components/weather/Weather.jsx";
import Time from "../src/components/time/Time.jsx";
import Navigation from "../src/components/navigation/Navigation.jsx";
import Thermostat from "../src/components/thermostat/Thermostat";
import Energy from "../src/components/energy/Energy.jsx"
import Header from "../src/components/header/Header.jsx";
// import MuiCard from "../src/components/card/Card.jsx";



export default function Index() {
  const data = [
    { temperature: 25, hour: 12 },
    { temperature: 13, hour: 13 },
    { temperature: 14, hour: 14 },
    { temperature: 15, hour: 15 },
    { temperature: 15, hour: 16 },
    { temperature: 10, hour: 17 },
  ]

  const edata = [
    { temperature: 1, hour: 12 },
    { temperature: 25, hour: 13 },
    { temperature: 1, hour: 14 },
    { temperature: 15, hour: 15 },
    { temperature: 1, hour: 16 },
    { temperature: 10, hour: 17 },
    { temperature: 1, hour: 18 },
    { temperature: 1, hour: 19 }
  ]

  return (
    <>
      <Header left={<User name={"John Doe"} avatar={"/images/avatar.png"} size={114} headingSize={"h1"} hasWelcome={true} />}
        right={<>
          <Weather degrees={22} type={"cloudy"} />
          <Time />
        </>
        }
      />
      <Navigation />
      <Thermostat data={data} />
      <Energy data={edata}/>
      {/* <MuiCard  /> */}
    </>
  );
}
