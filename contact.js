import React from 'react';
class contact extends React.Component{
    render(){
        return(
            <div style={{fontFamily:"Microsoft Tai Le"}}>
            
            <div style={{marginTop:'1%', paddingBottom:'1%'}}><h2 style={{color: "rgb(0,44,95)"}}><img src="car_logo.png" style={{width:"25pt", paddingRight:"5pt", paddingLeft:"10%"}}/>HYUNDAI <strong style={{color:"black", fontSize:"12pt", fontWeight:"normal", paddingLeft:"5%"}}><a href="/find_a_car" style={{textDecoration:"none", color:"black"}}>Find a Car</a></strong>
            <strong style={{color:"black", fontSize:"12pt", fontWeight:"normal", paddingLeft:"3%"}}><a href="/book" style={{textDecoration:"none", color:"black"}}>Cl!ck To Buy</a></strong><strong style={{color:"black", fontSize:"14px", fontWeight:"normal", paddingLeft:"3%"}}><a href="/del" style={{textDecoration:"none", color:"black"}}>Cancel Booking</a></strong><strong style={{color:"black", fontSize:"12pt", fontWeight:"normal", paddingLeft:"3%"}}><a href="/upd" style={{textDecoration:"none", color:"black"}}>Update Booking</a></strong><strong style={{color:"black", fontSize:"12pt", fontWeight:"normal", paddingLeft:"3%"}}><a href="/about" style={{textDecoration:"none", color:"black"}}>Hyundai Story</a></strong>
            
            <strong style={{color:"black", fontSize:"12pt", fontWeight:"normal", paddingLeft:"3%"}}><a href="/contact" style={{textDecoration:"none", color:"black"}}>Contact US</a></strong>
            <img src="signin_log.png" style={{width:"15pt",paddingLeft:"5%"}}/></h2></div>


            <div style={{backgroundColor:"#f2f3f4", fontWeight:"400",lineHeight:"1.5", paddingTop:"5%"}}>
                <img src="car_contact.png" style={{width:"90%", paddingLeft:"5%"}}/><br/>
                <center><h1 style={{fontSize:"300%"}}>A Smarter Way To Connect</h1>
                <p style={{paddingLeft:"10%", paddingRight:"10%"}}>Your complete satisfaction is of primary importance to us. should you ever have questions or comments about your Hyundai vehicle, we suggets you follow these steps so your 
                    concerns can be addressed as quickly and efficiently as possible.</p></center>
                <div style={{display:"flex", paddingLeft:"10%", paddingRight:"10%", paddingTop:"5%"}}>    
                <div style={{backgroundColor:"white", width:"100%", marginRight:"1.5%", padding:"3%"}}>
                    <center><h1>Call Us</h1>
                    <p>For a quick response, we request you to be ready with your vehicle registration number or VIN number.</p>
                    <p>Call us for enquiry / feedback at</p>
                    <p><strong>1800114645<br/>9873564645</strong></p></center>
                </div>
                <div style={{backgroundColor:"white", width:"100%",marginLeft:"1.5%",padding:"3%"}}>
                    <center><h1>Email Us</h1>
                    <p>If for any reason, you are not able to register your enquiry/ feedback</p>
                    <p>Please write to us on following email</p>
                    <p><strong>crsales@hmil.net <br/>crservice@hmil.net</strong></p></center>
                </div></div>

                <div style={{display:"flex", paddingLeft:"10%", paddingRight:"10%", paddingTop:"3%"}}>    
                <div style={{backgroundColor:"white", width:"100%", marginRight:"1.5%", padding:"3%"}}>
                    <center><h1>WhatsApp Us</h1>    
                    <p>Send “Hi” to below mentioned WhatsApp number to explore Hyundai Cars, book a test-drive, 
                        book a service, raise a complaint, find a Dealer and much more!</p>
                    <p><strong>8447228019</strong></p></center>
                </div>
                <div style={{backgroundColor:"white", width:"100%",marginLeft:"1.5%",padding:"3%"}}>
                    <center><h1>Email Us</h1>
                    <p>For any queries related to IONIQ 5, you can write to us on following email</p>
                    <p><strong>ioniq.crsales@hmil.net<br/>ioniq.crservice@hmil.net</strong></p></center>
                </div></div>
                <br/>
                <br/>
                <div style={{backgroundColor:"rgb(0,0,0)", padding:"5%", color:"white", fontWeight:"500"}}>
                     <div style={{display:"flex"}}><img src="car_logo_white.png" style={{width:"5%", height:"25pt"}}/>
                     <p style={{paddingLeft:"2%"}}>Hyundai Corporation Limited</p></div>
                </div>
            </div>
            </div>
        );
    }
}
export default contact;