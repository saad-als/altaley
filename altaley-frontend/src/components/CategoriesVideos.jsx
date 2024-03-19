import Video from "./Video";
function CategoriesVideos() {
    return (
        <>
            <div className="videosList">
                <h3 className="text-light text-decoration-underline">التصنيف</h3>
                <div className="vidoes d-flex ">
                    <Video />
                    <Video />
                    <Video />
                    <Video />
                </div>
            </div>
        </>
    );

}

export default CategoriesVideos