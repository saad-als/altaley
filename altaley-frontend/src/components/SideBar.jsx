import ListOfCategories from "./ListOfCategories";
function SideBar() {


    return (
        <>
            <div className="d-flex flex-column align-items-stretch flex-shrink-0 bg-body-tertiary">
                <div className="list-group list-group-flush border-bottom scrollarea">]
                    <ListOfCategories />
                </div>
            </div>

        </>
    );
}


export default SideBar