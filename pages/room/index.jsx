import Navigation from "../../src/components/navigation/Navigation.jsx";
import Header from "../../src/components/header/Header.jsx";
import Devices from "../../src/components/devices/Devices.jsx"
import Cameras from "../../src/components/cameras/Cameras.jsx"
import { Container, Grid, Typography } from "@mui/material";
import classNames from 'classnames';
import styles from "./Room.module.scss";

export default function Room() {
  const cameras = [
    { videoUrl: "/images/balcony.mp4" },
    { videoUrl: "/images/bathroom.mp4" },
    { videoUrl: "/images/kitchen.mp4" },
    { videoUrl: "/images/kitchen.mp4" },
    { videoUrl: "/images/living room 2.mp4" },
    { videoUrl: "/images/front-door.mp4" },
  ]

  const devices = [
    { iconUrl: '/images/bulb.svg', variant: 'ON' },
    { iconUrl: '/images/bulb.svg', variant: 'OFF' },
    { iconUrl: '/images/plug.svg', variant: 'OFF' },
    { iconUrl: '/images/plug.svg', variant: 'OFFLINE' },
    { iconUrl: '/images/plus.svg', outlined: true }
  ]

  const deviceCount = () => {
    const deviceCopy = [...devices];
    return deviceCopy.filter(device => device.variant != "OFFLINE" && device.iconUrl != "/images/plus.svg").length;
  }

  return (
    <>
      <Container maxWidth={"false"} disableGutters className={classNames(styles.container)}>
        <Header isRoom={true} left={<Typography variant="h1">Living Room</Typography>}
          right={
            <div className={classNames(styles.devices)}>
              <Typography variant="h6" color={"#7441F3"}>Devices</Typography>
              <Typography variant="h1">{deviceCount()}</Typography>
            </div>} />
        <Navigation />
        <Grid container rowSpacing={10} columnSpacing={4}>
          <Grid item>
            <Devices devices={devices} />
          </Grid>
          <Grid item>
            <div className={classNames(styles["cameras-header"])}>
              <Typography variant="h3">Cameras</Typography>
            </div>
            <Cameras cameras={cameras} hasButton={true} />
          </Grid>
        </Grid>
      </Container >
    </>
  );
}
