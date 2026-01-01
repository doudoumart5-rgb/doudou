import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/fotter";        // Attention ici aussi : "fotter" → "footer" ?
import Home from "./pages/home";
import Evenements from "./pages/Evenements";
import Signup from "./pages/sign up";             // Attention : espace dans le nom !
import Login from "./pages/Login";  
import Participant from "./pages/particpant";    // ← CORRIGÉ !
import ScrollToTop from "./components/ScrollToTop";

import Event from "./components/event";
import eventsData from "./eventsData.json"
//import img from "/images/myevent.jpg"


function App() {  
  return (
    <Router>
      <ScrollToTop/>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/evenements" element={<Evenements />} />
        
        {
          //for each event in eventsData.json ==> create a page
          eventsData.map((event,index)=>{
            return <Route
              path={`/event${index}`}
              element={
              <Event
                key={event.id}
                image={event.image}
                title={event.title}
                location={event.location}
                date={event.date}
                time={event.time}
                organiser={event.organiser}
                heroDesc={event.heroDesc}
                mainDesc={event.mainDesc}
                whyJoinDesc={event.whyJoinDesc}
              />
             }
            />
          })
        }
        
        {
          /*
          
          <Route  path="/event0" element={<Event 
        key={1}
        image={eventImg}
        title={"Science & Tech Events"}
        location={"Université Constantine 2 — Faculté NTIC"}
        date={"March 22, 2025"}
        time={"09:00 — 17:30"}
        organiser={"Innovation & Research Department"}
        heroDesc={"Discover the latest breakthroughs in science, technology, innovation, and research. Join workshops, seminars, and networking sessions."}
        mainDesc={"The platform for managing scientific things at <strong>Université Constantine 2</strong> is kind of made to handle… well, almost everything related to events, but not always in the same order. Sometimes it starts with submissions, other times participants register first, or maybe the organizers set up the committees before anything else. 🎓 It covers congresses, workshops, seminars, and a lot of stuff that gets mixed depending on who’s using it."}
        whyJoinDesc={"Well, participants usually find something interesting—research, networking, unexpected workshops, or just meeting people from random institutions. It’s all about discovering things and sometimes figuring out how the program fits together."}
         />
        }/>

          */ 

        }
        
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/participant" element={<Participant />} /> 
         {/* Maintenant ça marche ! */}
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;