function home(){
    return(
        <div style={{fontFamily:"Microsoft Tai Le"}}>
            
            <div style={{marginTop:'1%', paddingBottom:'1%'}}><h2 style={{color: "rgb(0,44,95)"}}><img src="car_logo.png" style={{width:"25pt", paddingRight:"5pt", paddingLeft:"10%"}}/>HYUNDAI <strong style={{color:"black", fontSize:"12pt", fontWeight:"normal", paddingLeft:"5%"}}><a href="/find_a_car" style={{textDecoration:"none", color:"black"}}>Find a Car</a></strong>
            <strong style={{color:"black", fontSize:"12pt", fontWeight:"normal", paddingLeft:"3%"}}><a href="/book" style={{textDecoration:"none", color:"black"}}>Cl!ck To Buy</a></strong><strong style={{color:"black", fontSize:"14px", fontWeight:"normal", paddingLeft:"3%"}}><a href="/del" style={{textDecoration:"none", color:"black"}}>Cancel Booking</a></strong><strong style={{color:"black", fontSize:"12pt", fontWeight:"normal", paddingLeft:"3%"}}><a href="/upd" style={{textDecoration:"none", color:"black"}}>Update Booking</a></strong><strong style={{color:"black", fontSize:"12pt", fontWeight:"normal", paddingLeft:"3%"}}><a href="/about" style={{textDecoration:"none", color:"black"}}>Hyundai Story</a></strong>
            
            <strong style={{color:"black", fontSize:"12pt", fontWeight:"normal", paddingLeft:"3%"}}><a href="/contact" style={{textDecoration:"none", color:"black"}}>Contact US</a></strong>
            <img src="signin_log.png" style={{width:"15pt",paddingLeft:"5%"}}/></h2></div>
            <div style={{backgroundColor: "#f2f3f4" }}>
            <div style={{padding:"3%",paddingTop:"5%"}}>
            <img style={{width:"100%"}} src="https://www.hyundai.com/content/dam/hyundai/in/en/data/find-a-car/ioniq/revised/ioniq-5-Home_orignal_pc-1.jpg"/>
            </div>

            <div style={{backgroundColor:"rgb(0,44,95)",color:"white",height:"150pt"}}><h4 style={{paddingTop:"20pt", paddingLeft:"50pt"}}>What's new</h4><h2 style={{paddingLeft:"50pt"}}>See What's happening</h2>
            <br/><br/>
            </div>

            <div style={{padding:"5%"}}> <center><h1>News</h1></center>
        <center><p>
            <i>"Hyundai Motors and Plus Anounces Collabaration to<br/>
            Demonstrate First Level 1 Autonomous Fuel Cell 
            <br/> Fuel Truck"</i>
        </p></center></div>

        <div style={{backgroundColor:"rgb(0,0,0)", padding:"5%", color:"white", fontWeight:"500"}}>
                     <div style={{display:"flex"}}><img src="car_logo_white.png" style={{width:"4%", height:"30pt"}}/>
                     <p style={{paddingLeft:"2%"}}>Hyundai Corporation Limited</p></div>
                </div>
            </div>
</div>
    );
}

export default home;