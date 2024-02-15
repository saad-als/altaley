import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import Categories from "./components/Categories";
// import SuggestedVideos from "./components/SuggestedVideos";
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
      <div className="container d-block p-2">
        <NavBar />

        <div className="container">
          <p>أهلا بك في (تالي) اختر التصنيفات التي تعجبك وتالي يرشح لك فيدوهات ممتعة لتشاهدها.</p>

          <div className="main-section container p-4">
            <SearchBar />
            {/* <SuggestedVideos /> */}


          </div>

          <div className="categories-section container p-4">
            <Categories />

          </div>


        </div>

      </div>

    </>
  )
}

export default App
