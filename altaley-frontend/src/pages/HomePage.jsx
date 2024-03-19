import NavBar from "../components/NavBar";
import ListOfCategories from "../components/ListOfCategories";
import CategoriesVideos from "../components/CategoriesVideos";
function HomePage() {

    return (
        <>
            <div className="bg-dark">
                <div className="navigation">
                    <NavBar />
                </div>


                <div className="d-flex ">

                    <ListOfCategories />

                    <div className="d-flex justify-content-center mt-4 overflow-auto " style={{ height: 600 + 'px', width: 70 + '%' }}>

                        <div className="container-md">
                            <CategoriesVideos />
                            <CategoriesVideos />
                            <CategoriesVideos />
                            <CategoriesVideos />
                            <CategoriesVideos />
                            <CategoriesVideos />
                            <CategoriesVideos />
                        </div>
                    </div>
                </div>


                <footer className=' w-100 p-4 text-center text-body-tertiary font-small'>@ 2024 Copyright: Saad Alsayed</footer>
            </div>
        </>
    )
}

export default HomePage