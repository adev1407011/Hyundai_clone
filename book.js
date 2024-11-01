import React, { useState } from 'react';
import Table from 'react-bootstrap/Table'; // Import Table from react-bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

const BookingForm = () => {
  // State variables for form inputs
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [carModel, setCarModel] = useState('');
  const [carPrice, setCarPrice] = useState('');

  // Dummy data for car models and prices (can be fetched from an API or database in a real application)
  const carModels = ['Sedan', 'SUV', 'Convertible', 'Hatchback'];
  const carPrices = ['6 Lakh', '7 Lakh', '8 Lakh', '9 Lakh'];

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can implement logic to submit the form data
    console.log('Booking submitted:', { name, email, phone, carModel, carPrice });
    // Example: You can send a POST request to a backend server to handle booking
    //fetch('http://localhost:5500/book_car', {
      // method: 'POST',
      // body: { name, email, phone, carModel, carPrice },
      // headers: {
      //   'Content-Type': 'application/json'
      // },
     //})
     //.then(response => response.json())
     //.then(data => console.log('Success:', data))
     //.catch(error => console.error('Error:', error));
 };

  return (
    <div>
        <div style={{marginTop:'1%', paddingBottom:'1%'}}><h2 style={{color: "rgb(0,44,95)"}}><img src="car_logo.png" style={{width:"25pt", paddingRight:"5pt", paddingLeft:"10%"}}/>HYUNDAI <strong style={{color:"black", fontSize:"12pt", fontWeight:"normal", paddingLeft:"5%"}}><a href="/find_a_car" style={{textDecoration:"none", color:"black"}}>Find a Car</a></strong>
            <strong style={{color:"black", fontSize:"12pt", fontWeight:"normal", paddingLeft:"3%"}}><a href="/book" style={{textDecoration:"none", color:"black"}}>Cl!ck To Buy</a></strong><strong style={{color:"black", fontSize:"14px", fontWeight:"normal", paddingLeft:"3%"}}><a href="/del" style={{textDecoration:"none", color:"black"}}>Cancel Booking</a></strong><strong style={{color:"black", fontSize:"12pt", fontWeight:"normal", paddingLeft:"3%"}}><a href="/upd" style={{textDecoration:"none", color:"black"}}>Update Booking</a></strong><strong style={{color:"black", fontSize:"12pt", fontWeight:"normal", paddingLeft:"3%"}}><a href="/about" style={{textDecoration:"none", color:"black"}}>Hyundai Story</a></strong>
            
            <strong style={{color:"black", fontSize:"12pt", fontWeight:"normal", paddingLeft:"3%"}}><a href="/contact" style={{textDecoration:"none", color:"black"}}>Contact US</a></strong>
            <img src="signin_log.png" style={{width:"15pt",paddingLeft:"5%"}}/></h2></div>
    <div style={{backgroundColor:"#f2f3f4",height:'500pt'}}><br/>
       <center><h1>Experience Advanced Technology Like Never Before</h1></center> 
    <form action="http://localhost:5500/book_car" method="post" style={{width:'100%',paddingTop:'3%',paddingLeft:'15%', paddingRight:'15%', fontSize:'large'}}>
                        <div className="form-group">
                            <label>Name:</label>
                            <input
                                type="text"
                                className="form-control"
                                value={name}
                                pattern="[a-z]{1-20}"
                                name="user_name"
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                        <br/>
                        <div className="form-group">
                            <label>Email:</label>
                            <input
                                type="email"
                                className="form-control"
                                value={email}
                                name="user_mail"
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <br/>
                        <div className="form-group">
                            <label>Phone:</label>
                            <input
                                type="text"
                                className="form-control"
                                value={phone}
                                pattern="[0-9]{10}"
                                name="user_ph"
                                onChange={(e) => setPhone(e.target.value)}
                                required
                            />
                        </div>
                        <br/>
                        <div className="form-group">
                            <label>Car Model:</label>
                            <select
                                className="form-control"
                                value={carModel}
                                name="model"
                                onChange={(e) => setCarModel(e.target.value)}
                                required
                            >
                                <option value="">Select Car Model</option>
                                {carModels.map((model, index) => (
                                    <option key={index} value={model}>{model}</option>
                                ))}
                            </select>
                        </div>
                        <br/>
                        <div className="form-group">
                            <label>Car Price:</label>
                            <select
                                className="form-control"
                                value={carPrice}
                                name="price"
                                onChange={(e) => setCarPrice(e.target.value)}
                                required
                            >
                                <option value="">Select Car Price</option>
                                {carPrices.map((price, index) => (
                                    <option key={index} value={price}>{price}</option>
                                ))}
                            </select>
                        </div><br/>
                        <input type="submit" className="btn btn-dark"/>
                    </form>
    </div>
    </div>
  );
};

export default BookingForm;
