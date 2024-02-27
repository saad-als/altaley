function VideoCard() {
    return (
        <>
            <div className="card" >
                <img src="./image.png" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">some text is written here to show </p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </>
    );
}

export default VideoCard