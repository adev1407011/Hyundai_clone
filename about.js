function about(){
    return (

        <div style={{fontFamily:"Microsoft New Tai Lue"}}>

            <div style={{marginTop:'1%', paddingBottom:'1%'}}><h2 style={{color: "rgb(0,44,95)"}}><img src="car_logo.png" style={{width:"25pt", paddingRight:"5pt", paddingLeft:"10%"}}/>HYUNDAI <strong style={{color:"black", fontSize:"12pt", fontWeight:"normal", paddingLeft:"5%"}}><a href="/find_a_car" style={{textDecoration:"none", color:"black"}}>Find a Car</a></strong>
            <strong style={{color:"black", fontSize:"12pt", fontWeight:"normal", paddingLeft:"3%"}}><a href="/book" style={{textDecoration:"none", color:"black"}}>Cl!ck To Buy</a></strong><strong style={{color:"black", fontSize:"14px", fontWeight:"normal", paddingLeft:"3%"}}><a href="/del" style={{textDecoration:"none", color:"black"}}>Cancel Booking</a></strong><strong style={{color:"black", fontSize:"12pt", fontWeight:"normal", paddingLeft:"3%"}}><a href="/upd" style={{textDecoration:"none", color:"black"}}>Update Booking</a></strong><strong style={{color:"black", fontSize:"12pt", fontWeight:"normal", paddingLeft:"3%"}}><a href="/about" style={{textDecoration:"none", color:"black"}}>Hyundai Story</a></strong>
            
            <strong style={{color:"black", fontSize:"12pt", fontWeight:"normal", paddingLeft:"3%"}}><a href="/contact" style={{textDecoration:"none", color:"black"}}>Contact US</a></strong>
            <img src="signin_log.png" style={{width:"15pt",paddingLeft:"5%"}}/></h2></div>
            

            <div style={{backgroundColor:"#f2f3f4"}}>
            <center><img src="car_about.png" style={{width:"95%",paddingTop:"6%"}}/></center></div><br/>
            <div style={{backgroundColor:"#f2f3f4",paddingLeft:"10%",paddingRight:"10%",paddingBottom:"2%",fontSize:"14px", textAlign:"justify", lineHeight:"200%",letterSpacing:"0.5pt"}}>
                <center><h1 style={{paddingTop:"3%"}}>Who We Are</h1></center><br/>
                <p>Hyundai Motor India Ltd. (HMIL), a wholly owned subsidiar
                    y of Hyundai Motor Company (HMC), is India’s first smart mobility solutions provider.
                     Hyundai’s global brand vision of ‘Progress for Humanity’ creates
                      a sustainable outlook for future generations by offering mobility solutions with industry leading 
                      technology.</p>
                      <p>HMIL presently operates with a robust network of 1 366 sales points and 1 548 service points across India. 
                        The strong model line-up consists of 13 car models across segments, Grand i10 NIOS, i20, i20 N-Line, 
                        AURA, EXTER, VENUE, VENUE N-Line, VERNA, CRETA, ALCAZAR, TUCSON, KONA Electric and all-electric SUV IONIQ 5.
                         HMIL’s fully integrated state-of-the art manufacturing plant near Chennai boasts advanced production, 
                         quality, and testing capabilities. Hyundai Motor India Ltd. also forms a critical part of HMC’s global 
                         export hub with exports spanning 88 countries across Africa, 
                        the Middle East, Latin America, Australia, and Asia Pacific.</p>
            </div><br/><br/><br/>
            <div>
                <center><h1>MD & CEO</h1></center><br/>
                <div style={{display:"flex"}}>
                <img src="car_md.png" style={{width:"32%", paddingLeft:"10%"}}/>
                <div style={{fontSize:"14px", textAlign:"justify", lineHeight:"200%",letterSpacing:"0.5pt", paddingRight:"10%",paddingLeft:"2%"}}>
                <p>Mr. Unsoo Kim is the Managing Director and Chief Executive Officer of Hyundai Motor India Limited. He joined Hyundai Motor Company, South Korea in 1991.
                His experience with Hyundai spans over a period of 30 years, 
                wherein he has worked on different assignments at Global Locations.</p>
                <p>He has a diverse experience across multiple markets in Business Planning, Strategy and Operations. Prior to his leadership role at Hyundai Motor India,
                Mr. Kim was the Executive Vice President of Global Operations at Hyundai Motor Company.</p>
                <p>In his previous stints with Hyundai Motor India, Mr. Unsoo Kim has served for a period of four years, 
                including his tenure as the Executive Director of Corporate Planning Division from 2014 ~ 2015.</p>
                </div>
                </div>
            </div>
            <br/>
            <br/>
            <div style={{backgroundColor:"#f2f3f4",letterSpacing:"0.5pt"}}>
                <center><h1 style={{paddingTop:"7%"}}>What We Do</h1></center>
                <div style={{display:"flex",paddingLeft:"15%",paddingRight:"15%", paddingTop:"2%"}}>
                <div style={{fontSize:"14px", lineHeight:"200%",width:"80%"}}>
                    <img src="car_press.png" style={{width:"100%"}}/>
                    <h1>Press Shop</h1>
                    <p>A computer controlled line that converts sheet metal to body panels with high dimensional accuracy and consistency.</p>
                </div>
                <div style={{fontSize:"14px", lineHeight:"200%",width:"80%",paddingLeft:"3%"}}>
                    <img src="car_body.png" style={{width:"100%"}}/>
                    <h1>Body Shop</h1>
                    <p>It is a hi-tech line that builds full body shells from panels. Automated robotic arms are used for 
                        intricate welding operations that ensure superior and consistent build quality</p>
                </div>
                <div style={{fontSize:"14px", lineHeight:"200%",width:"80%",paddingLeft:"3%"}}>
                    <img src="car_paint.png" style={{width:"100%"}}/>
                    <h1>Paint Shop</h1>
                    <p>It is one of the most modern paint shops in the country and uses the environment friendly water based process for superior and lasting exteriors.
                    A unique process management system followed here helps us deliver the most extensive colour range, independent of minimum batch requirements, 
                    helping customers get their preferred colour anytime.</p>
                </div>
                </div>
            </div>
        </div>
    );
}
export default about;