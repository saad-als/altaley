function NavBar() {


    return (
        <>
            <nav className="navbar p-3 bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand fs-4 d-flex" href="#">
                        <img src="../assets/images/512-logo.png" alt="Logo" width="40" height="40" className="d-inline-block align-text-top" />
                        <h4 className="me-2 fs-4">التالي</h4>
                    </a>
                    <div className="d-flex">

                        <a href="https://github.com/saad-als/altaley">
                            <img src="../assets/images/github-mark.png" width="30" height="30" alt="a github logo" />
                        </a>
                    </div>
                </div>
            </nav>
        </>
    );
}


export default NavBar