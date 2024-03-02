import axios from 'axios';
import NavBar from "../components/NavBar";
import { useState, useEffect } from 'react';
function HomePage() {

    const [data, setData] = useState(null)


    const getData = async () => {
        const data = await axios.get("http://localhost:5000");
        setData(data)
    };
    return (
        <>
            <NavBar />
            <button type="button" className="btn btn-info" onClick={getData}>ارسال</button>


        </>
    );
}

export default HomePage