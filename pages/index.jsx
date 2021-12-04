import User from "../src/components/user/User.jsx"
import Weather from "../src/components/weather/Weather.jsx"
import Time from "../src/components/time/Time.jsx";
import Navigation from "../src/components/navigation/Navigation.jsx"
import Header from "../src/components/header/Header.jsx";


export default function Index() {

  return (
    <>
      <Header left={<User name={"John Doe"} avatar={"/images/avatar.png"} size={114} headingSize={"h1"} hasWelcome={true}/>}
        right={<>
          <Weather degrees={22} type={"cloudy"} />
          <Time />
          </>
        }
      />
      <Navigation />
    </>
  );
}
