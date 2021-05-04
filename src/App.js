import './App.css';
import './assets/style.css';

//import assets
import avatar from './assets/images/avatar.png'

function App() {
  return (
    <div className="parent-wrapper padding-sm-y-3 padding-md-y-3 d-sm-flex justify-sm-content-center d-md-flex align-md-items-center ">
      <div className="card padding-sm-b-3 vw-sm-100">
        <div className="row d-sm-none">
          <div className="col-md-6 items-md-center flex-column padding-3">
            <span className="jumbotron text-white">HI !</span>
            <span className="text-verified text-white text-center"> Your Account <br/> is Verified</span>
          </div>
          <div className="col-md-6 items-md-center">
            <div className="card-avatar border-left-bottom items-md-center">
              <img src={avatar} alt="avatar" className="avatar"/>
            </div>
          </div>
        </div>

        {/* device small  */}
        <div className="d-block d-md-none">
          <div className="col-12 bg-white padding-y-3 items-md-center">
            <div className="card-avatar border-left-bottom items-center">
              <img src={avatar} alt="avatar" className="avatar"/>
            </div>
          </div>
          <div className="col-md-6 items-center flex-column padding-3">
            <span className="jumbotron text-white">HI !</span>
            <span className="text-verified text-white text-center"> Your Account <br/> is Verified</span>
          </div>
        </div>
        {/* device small  */}

        <div className="row-md-6 items-md-center text-justify">
          <div className="row">
            <div className="padding-3">
              <span className="paragraph">
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of 
                classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin 
                professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, 
                consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, 
                discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus 
                Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise 
                on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem Ipsum
                line in section 1.10.32.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
