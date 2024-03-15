import NavBar from "../components/NavBar";
import ListOfCategories from "../components/ListOfCategories";
function HomePage() {

    return (
        <>
            <div className="navigation">
                <NavBar />
            </div>


            <div className="d-flex ">

                <ListOfCategories />

                <div className="position-relative d-flex align-items-center border justify-content-center mt-4" style={{ height: '600px', width: '70%' }}>
                    <div className="position-absolute top-0 p-4 "><p className="fs-3 text-body-secondary">اختر التصنيفات اللي تعجبك، وتالي يرشح لك فيديوهات للمشاهدة</p></div>
                </div>
            </div>
        </>
    )
}

export default HomePage