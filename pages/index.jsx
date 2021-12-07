import Login from "../src/components/login/Login.jsx"
import User from "../src/components/user/User.jsx"
import Weather from "../src/components/weather/Weather.jsx"
import Time from "../src/components/time/Time.jsx";
import Header from "../src/components/header/Header.jsx";
// import MuiCard from "../src/components/card/Card.jsx";



export default function Index() {

  return (
    <>
   
      <Header left={<User />}
        right={<>
          <Weather degrees={22} type={"cloudy"} />
          <Time />
          </>
        }
      />
      {/* <MuiCard  /> */}
    </>
  );
}
