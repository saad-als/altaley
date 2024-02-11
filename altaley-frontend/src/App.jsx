import { useState, useEffect } from "react";
import axios from "axios";
function App() {


  const [links, setLinks] = useState("");

  useEffect(() => {
    axios.get('/')
      .then(response => {
        setLinks(response.data.links);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <>

      {/* navigation bar */}
      <nav className="navbar fixed-top h-10">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">شعار تالي</a>

          <div className="d-flex ">
            <div className="dropend">
              <button className="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                <span className="navbar-toggler-icon"></span>
              </button>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">المظهر الليلي</a></li>
                <li><a className="dropdown-item" target="_blank" href="https://github.com/saad-als/altaley" rel="noreferrer">Github</a></li>
              </ul>
            </div>
          </div>
        </div>

      </nav>

      {/* middle and main container */}
      <div className="main-container  container-fluid">

        <div className="d-flex justify-content container-md border">
          <p> {links}</p>
        </div>

        <div className="showing-box">




        </div>





      </div>

    </>
  )
}

export default App
