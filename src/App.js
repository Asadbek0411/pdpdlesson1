import './App.scss';

function App() {
    return (
        <div className="App">


            <div className="navbar ">

                <div className="container">
                    <div className="logo">
                        <h2>Start Bootstrap</h2>
                    </div>

                    <ul className="a-links d-flex justify-content-between align-items-center">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Blog</a></li>
                    </ul>
                </div>
            </div>


            <div className="home d-flex justify-content-between align-items-center">


                <div className="main">
                    <h2>Welcome to Blog Home!</h2>
                    <p>A Bootstrap 5 starter layout for your next blog homepage</p>
                </div>

            </div>


            <div className="about container d-flex">

                <div className="card-section">
                    <div className="cards">
                        <div className="card-header">
                            <img src="https://dummyimage.com/850x350/dee2e6/6c757d.jpg" alt=""/>
                        </div>

                        <div className="card-body">
                            <p>January 1, 2022</p>
                            <h1>Featured Post Title</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque,
                                nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero
                                voluptate voluptatibus possimus, veniam magni quis!</p>

                            <button className="btn btn-primary">Read me</button>
                        </div>


                    </div>

                    <br/>
                    <div className="mini-cards d-flex justify-content-between">

                        <div className="minicard-1">
                            <div className="card-header">
                                <img src="https://dummyimage.com/700x350/dee2e6/6c757d.jpg" alt=""/>
                            </div>

                            <div className="card-body">
                                <p>January 1, 2022</p>
                                <h2>Post Title</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla,</p>
                                <button className="btn btn-primary">Read me</button>
                            </div>

                        </div>
                        <div className="minicard-2">
                            <div className="card-header">
                                <img src="https://dummyimage.com/700x350/dee2e6/6c757d.jpg" alt=""/>
                            </div>

                            <div className="card-body">
                                <p>January 1, 2022</p>
                                <h2>Post Title</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla,</p>
                                <button className="btn btn-primary">Read me</button>
                            </div>

                        </div>


                    </div>
                    <br/>
                    <div className="mini-cards d-flex justify-content-between">

                        <div className="minicard-1">
                            <div className="card-header">
                                <img src="https://dummyimage.com/700x350/dee2e6/6c757d.jpg" alt=""/>
                            </div>

                            <div className="card-body">
                                <p>January 1, 2022</p>
                                <h2>Post Title</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla,</p>
                                <button className="btn btn-primary">Read me</button>
                            </div>

                        </div>
                        <div className="minicard-2">
                            <div className="card-header">
                                <img src="https://dummyimage.com/700x350/dee2e6/6c757d.jpg" alt=""/>
                            </div>

                            <div className="card-body">
                                <p>January 1, 2022</p>
                                <h2>Post Title</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla,</p>
                                <button className="btn btn-primary">Read me</button>
                            </div>

                        </div>


                    </div>
                    <br/>


                    <div className="nav d-flex justify-content-center">
                        <ul className="pagination">
                            <li className="page-item"><a href="#" className="page-link">Newer</a></li>
                            <li className="page-item active"><a href="#" className="page-link">1</a></li>
                            <li className="page-item"><a href="#" className="page-link">2</a></li>
                            <li className="page-item"><a href="#" className="page-link">3</a></li>
                            <li className="page-item"><a href="#" className="page-link">...</a></li>
                            <li className="page-item"><a href="#" className="page-link">15</a></li>
                            <li className="page-item"><a href="#" className="page-link">Next</a></li>
                        </ul>
                    </div>



                </div>


                <div className="regist-section">

                    <div className="card">
                        <div className="card-header">
                            <h6>Search</h6>
                        </div>

                        <form action="">
                            <div className="card-body d-flex justify-content-between align-items-center">
                                <input type="text" className="form-control" placeholder="Enter Search Term..."/>
                                <button className="btn rounded btn-primary">Go!</button>

                            </div>
                        </form>


                    </div>
                    <div className="card">
                        <div className="card-header">
                            <h6>Categories</h6>
                        </div>

                        <div className="card-body d-flex">

                            <div className="col-md-6 d-grid">
                                <a href="#">Web Design</a>
                                <a href="#">HTML</a>
                                <a href="#">Freebies</a>
                            </div>
                            <div className="col-md-6 d-grid ">
                                <a href="#">JavaScript</a>
                                <a href="#">CSS</a>
                                <a href="#">Tutorials</a>

                            </div>
                        </div>


                    </div>
                    <div className="card">
                        <div className="card-header">
                            <h6>Side Widget</h6>
                        </div>


                        <div className="card-body d-flex justify-content-between align-items-center">
                            <p>You can put anything you want inside of these side widgets. They are easy to use, and
                                feature the Bootstrap 5 card component!</p>
                        </div>



                    </div>


                </div>

            </div>


            <footer className="py-5 d-flex justify-content-center">
                <p>Copyright © Your Website 2022</p>
            </footer>

        </div>
    );
}

export default App;
