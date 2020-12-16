import react, { Component } from 'react'
import { object } from 'yup';
import '../Home/Home.css'
import DatePicker from "react-datepicker";
import ControlPanel from '../Control_panel/ControlPanel';
import Footer from '../Footer/Footer';
const apiUrl1='https://localhost:44346/DistinctSource';

const apiUrl2='https://localhost:44346/DistinctDest';

 class Home extends Component{
   constructor(props){
     super(props);

     this.state={
      values1:[],
      values2:[]
  }
 
   }

componentDidMount() {
  function reloadPage() {
    // The last "domLoading" Time //
    var currentDocumentTimestamp =
    new Date(performance.timing.domLoading).getTime();
    // Current Time //
    var now = Date.now();
    // Ten Seconds //
    var tenSec = 10 * 1000;
    // Plus Ten Seconds //
    var plusTenSec = currentDocumentTimestamp + tenSec;
    if (now > plusTenSec) {
    window.location.reload();
    } else {}
    }
    reloadPage();
    console.log('reloaded')
  if((localStorage.myData!=='null' && localStorage.myData!=='undefined')){
    document.getElementById('nav').style.display="none"
    document.getElementById('nav2').style.display="block"
  }
  if((localStorage.AdminData!=='null' && localStorage.AdminData!=='undefined')){
    document.getElementById('nav').style.display="none"
        document.getElementById('nav3').style.display="block"
  }


    fetch(apiUrl1)
         .then(function(res) {
             return res.json();
         }).then((json)=> {
           console.log(json);
             this.setState({
                values1: json
                
             })
         })
         fetch(apiUrl2)
         .then(function(res) {
             return res.json();
         }).then((json)=> {
           console.log(json);
             this.setState({
                values2: json
                
             })
         })
 }

    render(){

        return(

//             <div className="cards">
              

// <div class="card mb-3">
                
//   <div class="row">
//     <div class="col-md-4">
//       <img style={{height:'300px',width:'400px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfSFrtQ-clsct7_BKJ3YoVj2623lqYaICGAQ&usqp=CAU" class="card-img" alt="Plane_img"/>
//     </div>
//     <div class="col-md-8">
//     <div class="body2">

//       <div class="card-body">
//       <div class="card-title">
//          </div>

//       </div>
//       </div>
//     </div>
//   </div>

// </div>
// <Footer/>

//             </div>
<div>

<div id="carouselExampleFade" class="carousel slide carousel-fade" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://img.happyeasygo.com/img/1607422979063.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img height='300px'  src="https://www.goair.in/media/5714/ga_maldiv-banner-1920x680.png" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://img.happyeasygo.com/img/1607422979063.jpg" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
<div class="card mb-3">
                
                <div class="row">
                  <div class="col-md-4">
                    <img style={{height:'220px',width:'280px',marginTop:'20px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYs8uQeniVuC072UA6mN1HoWxsZ3ptp7MQpQ&usqp=CAU" class="card-img" alt="Plane_img"/>
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                       <div class="card-title">
                           <h3>Rwenzori Airlines</h3>
                       </div>
                      <p class="card-text">Rwenzori Airline is the flag carrier airline of India, headquartered at New Delhi. It is owned by Air India Limited, a government-owned enterprise, and operates a fleet of Airbus and Boeing aircraft serving 102 domestic and international destinations.</p>
                          
                          <button className="btn btn-primary" data-toggle="modal" data-target="#exampleModal" type="button">Read more</button>
              
                          <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">Rwenzori Airline</h5>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">
                    <p>Rwenzori Airline is the flag carrier airline of India, headquartered at New Delhi. It is owned by Air India Limited, a government-owned enterprise, and operates a fleet of Airbus and Boeing aircraft serving 102 domestic and international destinations.</p>
                    <br/>
                    <p>The airline launched its first domestic flight from Bombay to Trivandrum with a six-seater Miles Merlin. In 1938, it was re-christened as Tata Air Services and later as Tata Airlines. Colombo in Ceylon (now Sri Lanka) and Delhi were added to the destinations in 1938. During the Second World War, the airline helped the Royal Air Force with troop movements, shipping of supplies, rescue of refugees and maintenance of aircraft.</p>
                    </div>
                    <div class="modal-footer" >
                      <button type="button" class="btn btn-secondary" style={{marginRight:'200px'}}  data-dismiss="modal">Close</button>
                    </div>
                  </div>
                </div>
              </div>
                    </div>
                  </div>
                </div>
              
              </div>
              <Footer/>
</div>

        )
    }
}
export default Home