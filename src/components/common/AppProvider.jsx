import { createContext, useState } from "react";

export const AppContext = createContext({ refresh: () => { }, rooms: [], devices: [], thermostats: [], properties: [], scenes: [] });

export default function AppProvider({ children }) {
    const [rooms, setRooms] = useState([]);
    const [properties, setProperties] = useState([]);
    const [devices, setDevices] = useState([]);
    const [scenes, setScenes] = useState([]);
    const [thermostats, setThermostats] = useState([]);

    async function refresh() {
        const fetchRooms = fetch('https://hem-api.herokuapp.com/rooms', { headers: { Authorization: `Bearer ${localStorage.getItem('accessToken')}` } }).catch((error) => console.log(error))
        const fetchProperties = fetch('https://hem-api.herokuapp.com/properties', { headers: { Authorization: `Bearer ${localStorage.getItem('accessToken')}` } }).catch((error) => console.log(error))
        const fetchDevices = fetch('https://hem-api.herokuapp.com/devices', { headers: { Authorization: `Bearer ${localStorage.getItem('accessToken')}` } }).catch((error) => console.log(error))
        const fetchScenes = fetch('https://hem-api.herokuapp.com/scenes', { headers: { Authorization: `Bearer ${localStorage.getItem('accessToken')}` } }).catch((error) => console.log(error))
        const fetchThermostats = fetch('https://hem-api.herokuapp.com/thermostats', { headers: { Authorization: `Bearer ${localStorage.getItem('accessToken')}` } }).catch((error) => console.log(error))

        Promise.all([fetchRooms, fetchProperties, fetchDevices, fetchScenes, fetchThermostats])
            .then(res => res.map(element => element.json()))
            .then(data => data.forEach((element, index) => {
                if (index === 0) {
                    setRooms(element)
                } else if (index === 1) {
                    setProperties(element)
                } else if (index === 2) {
                    setDevices(element)
                } else if (index === 3) {
                    setScenes(element)
                } else if (index === 4) {
                    setThermostats(element.thermostats)
                }
            }))
    }

    return (
        <AppContext.Provider value={{ refresh, rooms, devices, thermostats, properties, scenes }}>
            {children}
        </AppContext.Provider>
    )

}

