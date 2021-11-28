import User from "../src/components/user/User.jsx"
import Weather from "../src/components/weather/Weather.jsx"
import Time from "../src/components/time/Time.jsx";
import Header from "../src/components/header/Header.jsx";


export default function Index() {

  return (
    <>
      <Header left={<User name={"John Doe"} avatar={"/images/avatar.png"} size={90}/>}
        right={<>
          <Weather degrees={22} type={"cloudy"} />
          <Time />
          </>
        }
      />
    </>
  );
}
