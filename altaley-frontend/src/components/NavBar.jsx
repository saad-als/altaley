function Navbar() {
    return (
        <>
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
        </>
    );
}

export default Navbar