import User from "../src/components/user/User.jsx";
import Weather from "../src/components/weather/Weather.jsx";
import Time from "../src/components/time/Time.jsx";
import Navigation from "../src/components/navigation/Navigation.jsx";
import Thermostat from "../src/components/thermostat/Thermostat";
import Energy from "../src/components/energy/Energy.jsx"
import Header from "../src/components/header/Header.jsx";
import Scenes from "../src/components/scenes/Scenes";
import Rooms from "../src/components/rooms/Rooms.jsx";
import Cameras from "../src/components/cameras/Cameras.jsx"
import { Container, Grid, Typography } from "@mui/material";
import classNames from 'classnames';
import styles from "./Dashboard.module.scss";



export default function Dashboard() {
  const data = [
    { temperature: 25, hour: 12 },
    { temperature: 13, hour: 13 },
    { temperature: 14, hour: 14 },
    { temperature: 15, hour: 15 },
    { temperature: 15, hour: 16 },
    { temperature: 10, hour: 17 },
  ]

  const cards = [
    { iconUrl: '../images/morning.svg', outlined: false },
    { iconUrl: '../images/alarm-clock.svg', outlined: false },
    { iconUrl: '../images/shower.svg', outlined: false },
    { iconUrl: '../images/tea-cup.svg', outlined: false },
    { iconUrl: '../images/rock.svg', outlined: false },
    { iconUrl: '../images/plus.svg', outlined: true },
  ]

  const cameras = [
    { videoUrl: "/images/balcony.mp4" },
    { videoUrl: "/images/bathroom.mp4" },
    { videoUrl: "/images/front-door.mp4" },
    { videoUrl: "/images/living room 2.mp4" },
    { videoUrl: "/images/garden.mp4" },
    { videoUrl: "/images/kitchen.mp4" },
  ]

  let rooms = [
    { iconUrl: '/images/bed.svg', title: 'Living room' },
    { iconUrl: '/images/bed.svg', title: 'Bedroom' },
    { iconUrl: '/images/bed.svg', title: 'Bathroom' },
    { iconUrl: '/images/bed.svg', title: 'Toilet' },
    { iconUrl: '/images/bed.svg', title: 'Patio' },
    { iconUrl: '/images/plus.svg', title: 'Add room', outlined: true },
  ];

  return (
    <>
      {/* <Cameras cameras={cameras} /> */}
      <Container maxWidth={"false"} disableGutters className={classNames(styles.container)}>
        <Header left={<User name={"John Doe"} avatar={"/images/avatar.png"} size={114} headingSize={"h1"} hasWelcome={true} />} right={<><Weather degrees={22} type={"cloudy"} /><Time /></>} />
        <Navigation />
        <Grid container rowSpacing={10} columnSpacing={4}>
          <Grid item>
            <div className={classNames(styles["thermostat-header"])}>
              <Typography variant="h3">Thermostat</Typography>
            </div>
            <Thermostat data={data} />
          </Grid>
          <Grid item>
            <Scenes cards={cards} />
          </Grid>
          <Grid item>
            <div className={classNames(styles["thermostat-header"])}>
              <Typography variant="h3">Thermostat</Typography>
            </div>
            <Thermostat data={data} />
          </Grid>
          <Grid item>
            <Energy data={data} />
          </Grid>
        </Grid>
        <Rooms rooms={rooms} />
      </Container >
    </>
  );
}
