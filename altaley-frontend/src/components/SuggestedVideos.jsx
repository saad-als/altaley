import VideoCard from "./VideoCard";
function SuggestedVideos() {
    return (
        <>
            <div className="list-group">
                <button type="button" className="list-group-item list-group-item-action"> <VideoCard /> </button>
                <button type="button" className="list-group-item list-group-item-action"> <VideoCard /> </button>
                <button type="button" className="list-group-item list-group-item-action"> <VideoCard /> </button>

            </div>
        </>
    );
}

export default SuggestedVideos