import NavBar from "./components/NavBar";
// import { useState, useEffect } from "react";
// import axios from "axios";

function App() {


  // const [links, setLinks] = useState("");

  // useEffect(() => {
  //   axios.get('/')
  //     .then(response => {
  //       setLinks(response.data.links);
  //     })
  //     .catch(error => {
  //       console.error(error);
  //     });
  // }, []);

  return (
    <>

      {/* navigation bar */}
      <NavBar />

    </>
  )
}

export default App
