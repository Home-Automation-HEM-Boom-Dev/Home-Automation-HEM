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
import { useContext, useEffect } from "react";
import { AppContext } from "../src/components/common/AppProvider";

export default function Dashboard() {
  const dashboard = useContext(AppContext);

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
    { videoUrl: "/images/kitchen.mp4" },
    { videoUrl: "/images/kitchen.mp4" },
    { videoUrl: "/images/living room 2.mp4" },
    { videoUrl: "/images/front-door.mp4" },
  ]

  let rooms = [
    { iconUrl: '/images/bed.svg', title: 'Living room' },
    { iconUrl: '/images/bed.svg', title: 'Bedroom' },
    { iconUrl: '/images/bed.svg', title: 'Bathroom' },
    { iconUrl: '/images/bed.svg', title: 'Toilet' },
    { iconUrl: '/images/bed.svg', title: 'Patio' },
    { iconUrl: '/images/outlined-plus.svg', title: 'Add room', outlined: true },
  ];

  useEffect(() => {
    dashboard.refresh()
  }, [])

  return (
    <>
      <Container maxWidth={"false"} disableGutters className={classNames(styles.container)}>
        <Header left={<User name={"John Doe"} avatar={"/images/avatar.png"} size={114} headingSize={"h1"} hasWelcome={true} />} right={<><Weather degrees={22} type={"cloudy"} /><Time /></>} />
        <Navigation />
        <Grid container rowSpacing={10} columnSpacing={4}>
          <Grid item>
            <div className={classNames(styles["title"])}>
              <Typography variant="h3">Thermostat</Typography>
            </div>
            <Thermostat data={data} />
          </Grid>
          <Grid item>
            <div className={classNames(styles["title"])}>
              <Typography variant="h3">Scenes</Typography>
            </div>
            <Scenes cards={cards} />
          </Grid>
          <Grid item>
            <div className={classNames(styles["title"])}>
              <Typography variant="h3">Cameras</Typography>
            </div>
            <Cameras cameras={cameras} hasButton={true} />
          </Grid>
          <Grid item>
            <Energy data={data} />
          </Grid>
          <Grid item xs={12}>
            <Rooms rooms={rooms} />
          </Grid>
        </Grid>
      </Container >
    </>
  );
}
