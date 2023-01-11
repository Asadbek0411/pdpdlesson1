import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">

        <div className="nav">

          <a href="#">Company name</a>

          <div className="nav-link">
            <a href="#">Features</a>
            <a href="#">Enterprise</a>
            <a href="#">Support</a>
            <a href="#">Pricing</a>


            <a href="#" className="btn">Sign Up</a>

          </div>


        </div>


        <div className="container">


            <div className="home">
                <h2>Pricing</h2>
                <p>Quickly build an effective pricing table for your potential customers with this Bootstrap example. It's built with default Bootstrap components and utilities with little customization.</p>
            </div>

            <div className="cards">

                <div className="card">
                    <div className="card-header">
                        <h4>Free</h4>
                    </div>
                    <div className="card-body ">
                        <h1>$0 <small>/ month</small></h1>

                        <ul>
                            <li>10 users included</li>
                            <li>2 GB of storage</li>
                            <li>Email support</li>
                            <li>Help center access</li>
                        </ul>

                        <div className="button">
                            <button >
                                Sign Up For Free
                            </button>
                        </div>
                    </div>
                </div>
                <div className="card">


                    <div className="card-header">
                        <h4>Pro</h4>
                    </div>
                    <div className="card-body ">
                        <h1>$15 <small>/ month</small></h1>
                        <ul>
                            <li>20 users included</li>
                            <li>10 GB of storage</li>
                            <li>Priority email support</li>
                            <li>Help center access</li>
                        </ul>

                        <div className="button2">
                            <button>
                                Sign Up For Free
                            </button>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">
                        <h4>Enterprise</h4>
                    </div>
                    <div className="card-body">
                        <h1>$29 <small>/ month</small></h1>
                        <ul>
                            <li>30 users included</li>
                            <li>15 GB of storage</li>
                            <li>Phone and email support</li>
                            <li>Help center access</li>
                        </ul>

                        <div className="button2">
                            <button tyoe="submit">
                                Sign Up For Free
                            </button>
                        </div>
                    </div>
                </div>

            </div>
            <hr/>

            <footer>

                <div className="footer-col">
                    <img src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" alt=""/>
                    <p>© 2017-2018</p>
                </div>
                <div className="footer-col">
                    <h2>Features</h2>
                    <p>Cool stuff</p>
                    <p>Random feature</p>
                    <p>Team feature</p>
                    <p>Stuff for developers</p>
                    <p>Another one</p>
                    <p>Last time</p>
                </div>
                <div className="footer-col">
                    <h2>Resources</h2>
                    <p>Resource</p>
                    <p>Resource name</p>
                    <p>Another resource</p>
                    <p>Final resource</p>
                </div>
                <div className="footer-col">
                    <h2>About</h2>
                    <p>Team</p>
                    <p>Locations</p>
                    <p>Privacy</p>
                    <p>Terms</p>
                </div>

            </footer>




        </div>
      </div>



  );
}

export default App;
