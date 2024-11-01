import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table'; // Import Table from react-bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './find_car.css'; // Assuming you have a CSS file named 'find_car.css' for additional styling


function Find() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:5500/find');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const jsonData = await response.json();
            setData(jsonData); // Assuming jsonData is an array of objects like [{ _id: '123', m_name: 'Example' }, ...]
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div>
            <div style={{marginTop:'1%', paddingBottom:'1%'}}><h2 style={{color: "rgb(0,44,95)"}}><img src="car_logo.png" style={{width:"25pt", paddingRight:"5pt", paddingLeft:"10%"}}/>HYUNDAI <strong style={{color:"black", fontSize:"12pt", fontWeight:"normal", paddingLeft:"5%"}}><a href="/find_a_car" style={{textDecoration:"none", color:"black"}}>Find a Car</a></strong>
            <strong style={{color:"black", fontSize:"12pt", fontWeight:"normal", paddingLeft:"3%"}}><a href="/book" style={{textDecoration:"none", color:"black"}}>Cl!ck To Buy</a></strong><strong style={{color:"black", fontSize:"14px", fontWeight:"normal", paddingLeft:"3%"}}><a href="/del" style={{textDecoration:"none", color:"black"}}>Cancel Booking</a></strong><strong style={{color:"black", fontSize:"12pt", fontWeight:"normal", paddingLeft:"3%"}}><a href="/upd" style={{textDecoration:"none", color:"black"}}>Update Booking</a></strong><strong style={{color:"black", fontSize:"12pt", fontWeight:"normal", paddingLeft:"3%"}}><a href="/about" style={{textDecoration:"none", color:"black"}}>Hyundai Story</a></strong>
            
            <strong style={{color:"black", fontSize:"12pt", fontWeight:"normal", paddingLeft:"3%"}}><a href="/contact" style={{textDecoration:"none", color:"black"}}>Contact US</a></strong>
            <img src="signin_log.png" style={{width:"15pt",paddingLeft:"5%"}}/></h2></div>
                        <div style={{backgroundColor:"#f2f3f4"}}>
            <strong><br/><h3 style={{ paddingLeft: '197px', paddingRight: '880px' }}>Hyundai Creta N Line.</h3><br /></strong>
            <em><p style={{ paddingLeft: '197px', paddingRight: '190px' }}>
                Designed for thrill-seekers, the powerful track-inspired Hyundai CRETA N Line, is all set to get the hearts racing. The Hyundai
                CRETA N Line will propel you to Live unleashed, liberating oneself from the mundane and ordinary way of life. Based on WRC-inspired
                design, the Hyundai CRETA N Line, offers a commanding N Line specific sporty front grille with N Line emblem and new front bumper
                design with red inserts.
            </p></em><br />

            <strong><h3 style={{ paddingLeft: '197px', paddingRight: '880px' }}>The all-new Hyundai Verna.</h3><br /></strong>
            <em><p style={{ paddingLeft: '197px', paddingRight: '190px' }}>
                Hyundai VERNA has mesmerising mystical magnetism and sensuous sportiness in its futuristic design that is truly tantalising.
                Complimented with a chiselled aerodynamic frame that gives it a furiously fast look. It can best be described in two words.
            </p></em><br />

            <div style={{ marginLeft:'20%', marginTop: '-130px', marginBottom: '-80px' }}>
                <div className="wrapper">
                    <div className="container">
                        <input type="radio" name="slide" id="c1" defaultChecked style={{ display: 'none' }} />
                        <label htmlFor="c1" className="card">
                            <div className="row">
                                <div className="icon">1</div>
                                <div className="description" style={{ marginTop: '5px' }}>
                                    <h4>Exter</h4>
                                    {/*<p>Help people all over the world</p>*/}
                                </div>
                            </div>
                        </label>

                        <input type="radio" name="slide" id="c2" style={{ display: 'none' }} />
                        <label htmlFor="c2" className="card">
                            <div className="row">
                                <div className="icon">2</div>
                                <div className="description" style={{ marginTop: '5px' }}>
                                    <h4>Creta-n-line</h4>
                                    {/*<p>Help people all over the world</p>*/}
                                </div>
                            </div>
                        </label>

                        <input type="radio" name="slide" id="c3" style={{ display: 'none' }} />
                        <label htmlFor="c3" className="card">
                            <div className="row">
                                <div className="icon">3</div>
                                <div className="description" style={{ marginTop: '5px' }}>
                                    <h4>Alcazar</h4>
                                    {/*<p>Help people all over the world</p>*/}
                                </div>
                            </div>
                        </label>

                        <input type="radio" name="slide" id="c4" style={{ display: 'none' }} />
                        <label htmlFor="c4" className="card">
                            <div className="row">
                                <div className="icon">4</div>
                                <div className="description" style={{ marginTop: '5px' }}>
                                    <h4>Verna</h4>
                                    {/*<p>Help people all over the world</p>*/}
                                </div>
                            </div>
                        </label>
                    </div>
                </div>
            </div>
            <Table striped bordered hover className="text-center" style={{width:'50%', marginLeft:'27%'}}>
                <thead>
                    <tr>
                        <th className="align-middle">Model</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td className="align-middle">{item.m_name}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            <strong><h3 style={{ paddingLeft: '197px', paddingRight: '880px' }}>Hyundai Exter</h3><br /></strong>
            <em><p style={{ paddingLeft: '197px', paddingRight: '190px' }}>
                Hyundai EXTER symbolizes outdoor, travel and leisure. This all-new SUV draws inspiration from the natural world around it and reflects
                an identity that is external and focused on the outside. Hyundai EXTER has been designed to present a modern take on the Hyundai SUV life.
            </p></em><br />

            <strong><h3 style={{ paddingLeft: '197px', paddingRight: '880px' }}>Hyundai Alcazar</h3><br /></strong>
            <em><p style={{ paddingLeft: '197px', paddingRight: '190px' }}>
                For those with a passion for the refined things in life and those who want to explore for themselves, presenting to you the new Hyundai ALCAZAR.
                For those who dare to be different, who want finer experiences and never compromise on quality, the Hyundai ALCAZAR ushers in a new dimension
                of driving sophistication.
            </p></em><br />
        </div>
        </div>
    );
}

export default Find;
