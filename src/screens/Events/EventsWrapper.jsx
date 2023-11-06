import {useRef} from 'react';

import EventsCard from "./EventsCard";
import "./EventsPage.css";

import EventsData from "./eventdata";

const EventsWrapper = () => {
    const myRef = [];
    const handleScrollClick = (id) => {
        console.log(myRef[id]);
        myRef[id].scrollIntoView({behavior: 'smooth'}); 
      };

    return (
        <div className="container my-5">
            <div>
                <h1 className="page_heading">Events</h1>
                <div className="underline_heading"></div>
            </div>
         
            


            {EventsData.map((rowEntry, index) => {
                return (

                    <div key={index} class="row" id={index+2022} ref={(ref) => { myRef[index] = ref }}>

                        {rowEntry.map((entry, index) => {
                            return (
                                <div className="col-md-4">
                                    <EventsCard
                                        key={index}
                                        eventName={entry.eventName}
                                        image={entry.image}
                                        dept={entry.dept}
                                        firstprice={entry.firstprice}
                                        secondprice={entry.secondprice}
                                        thirdprice={entry.thirdprice}
                                        sponseredby={entry.sponseredby}
                                        date={entry.date}
                                        year={entry.year}
                                    />
                                </div>
                            );
                        })}
                    </div>
                );
            })}
        {/* <div id="hi" ref={(ref) => { myRef[0] = ref }}>hiiiiiiiiiiiiiiiii</div>
        <div id="hi2" ref={(ref) => { myRef[1] = ref }}>hiiiiiiiiiiiiiiiii</div>
 */}
        </div>
    );
}

export default EventsWrapper;