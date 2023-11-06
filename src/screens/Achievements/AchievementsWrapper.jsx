import {useRef} from 'react';

import AchievementsCard from "./achievementCard";
import "./AchievementPage.css";

import AchievementsData from "./data";

const AchievementsWrapper = () => {
    const myRef = [];
    const handleScrollClick = (id) => {
        console.log(myRef[id]);
        myRef[id].scrollIntoView({behavior: 'smooth'}); 
      };

    return (
        <div className="container my-5">
            <div>
                <h1 className="page_heading">Achievements</h1>
                <div className="underline_heading"></div>
            </div>
            <div id="timeline-wrap">
                {/* timeline */}
            <div id="timeline" />
                    <div className="marker mfirst timeline-icon one" onClick={()=>handleScrollClick(0)}>2018</div>
                    <div className="marker m2 timeline-icon two" onClick={()=>handleScrollClick(1)}>2019</div>
                    <div className="marker m3 timeline-icon three" onClick={()=>handleScrollClick(2)}>2021</div>
            </div>
            

            {AchievementsData.map((rowEntry, index) => {
                return (

                    <div key={index} class="row" id={index+2018} ref={(ref) => { myRef[index] = ref }}>

                        {rowEntry.map((entry, index) => {
                            return (
                                <div className="col-md-4">
                                    <AchievementsCard
                                        key={index}
                                        eventName={entry.eventName}
                                        image={entry.image}
                                        students={entry.students}
                                        venue={entry.venue}
                                        title={entry.title}
                                        year={entry.year}
                                        amount={entry.amount}
                                        place={entry.place}
                                        date={entry.date}
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

export default AchievementsWrapper;