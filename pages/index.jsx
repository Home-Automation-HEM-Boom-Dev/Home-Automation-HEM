import Login from "../src/components/login/Login.jsx"
import User from "../src/components/user/User.jsx"
import Weather from "../src/components/weather/Weather.jsx"
import Time from "../src/components/time/Time.jsx";

export default function Index() {
  
return (
  <>
    <Weather degrees={22} type={"cloudy"}/>
    <Time />
  </>
);
}
