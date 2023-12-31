import { a, b, c, d, e, f, g,h,i, ssn, health, amet } from "./index";

const AchievementsData = [
    [
        {
            eventName: "Ideathon 2018",
            image: a,
            students: [
                "Amrish Krishnan",
                "GuruSakthi",
                "Hari Haran",
                "Manoj Sand",
                "Raghu Nandhan",
            ],
            title: "Tencor – Advertisement using Facial Recognition",
            venue: "Bangalore",
            year: " IV & CSE",
            amount: "Rs. 20,000",
            place: "III",
            date: "25.08.2018 and 26.08.2018",
        },
        {
            eventName: "Nokia Chennai Technology Day 2018 ",
            image: b,
            students: [
                "Amrish Krishnan",
                "Raghu Nandhan",
                "Vigneswaran R ",
                "Hariharan S",
            ],
            title: "MyProbuddy – AIGuidance",
            venue: " Nokia Factory, Oragadam",
            year: " IV & CSE ",
            amount: "Rs. 12,000",
            place: "III",
            date: "25.08.2018 and 26.08.2018.",
        },
        {
            eventName: "Nokia Chennai Technology Day 2018",
            image: c,
            students: ["Kamal Kumar L S", "Kishore Vigneshwar R"],
            title: "Smart Wearables for Fall Preventionat High Tower Area",
            venue: "Nokia Factory, Oragadam",
            year: " II & CSE ",
            amount: "Rs. 8,000",
            place: "Special Award",
            date: " 25.08.2018 and 26.08.2018.",
        },
    ],
    [
        {
            eventName: "SMART INDIA HACKATHON 2019",
            image: d,
            students: [
                "Dhanoosh Lakshman S",
                "George Joseph",
                "GokulPrakash P",
                " Jamuna Devi G",
                "Devadharshini M",
                "Dhushyanth Chowdary E",
            ],
            title: "Mobile Application for Bike E-Catalogue using Augmented Reality",
            venue: "JSS Academy of technical Education, Noida, UP",
            year: "II & CSE ",
            amount: "Rs. 1,00,000",
            place: "I",
            date: "2.3.2019 and 3.3.2019",
        },
        {
            eventName: "SMART INDIA HACKATHON 2019",
            image: e,
            students: [
                "Alvis F",
                "AnuradhaKrishnarathinam",
                " Aiswariya R",
                "AshutoshPatole",
                "AgashChandar",
                " Daniel David",
            ],
            title: "Presenting Way points Navigation Aids, ATS routes on Google Earth",
            venue: "Sathyabama Instiute of Science and Technology, Chennai",
            year: " II & CSE ",
            amount: "Rs. 1,00,000",
            place: "I",
            date: " 2.3.2019 and 3.3.2019",
        },
        {
            eventName: "SMART INDIA HACKATHON 2019",
            image: f,
            students: [
                "Anusha S",
                "Ajitha M",
                " Aarthy Lakshmi R",
                "ChettyJayasruthiP",
                "Andria Janet Evangeline",
                "AdithyaAbhishek",
            ],
            title: "Automatic Production Planning and Scheduling of size",
            venue: "RajkumarGoel Institute of Technology, Ghaziabad, UP",
            year: "II & CSE ",
            amount: "Rs. 10,000",
            place: "I",
            date: "2.3.2019 and 3.3.2019",
        },
    ],
    [
        {
            eventName: "MANTHAN 2021",
            image: g,
            students: [
                "Ishita G",
                "Vedha Sankar",
                "Harene M",
                "Jayasree P",
                "Divyasree G",
            ],
            title: "Identification of online fake content",
            venue: "AICTE & MoE's INNOVATION CELL",
            year: "II & CSE",
            amount: "Top among the National Level",
            place: "Certificate of merit",
            date: "2021",
        },
        {
            eventName: "HACKSALVATION",
            image: g,
            students: ["Krishna Ram", "Manikandaprabhu C", "Rishikaran M"],
            title: "Amulance Recognition",
            venue: "Sri Sai Ram Engineering College",
            year: "III & CSE",
            amount: "Rs. 4000",
            place: "II",
            date: "2021",
        },
        {
            eventName: "HACKERFLOW",
            image: h,
            students: ["Ajay Kumar S N", "Abrar Hasan S", "Aadhavan M","Jagadeesh D"],
            title: "Project Manager for Developer",
            venue: "SurveySparrow (online)",
            year: "III & CSE",
            amount: "Rs. 25000",
            place: "III",
            date: "18.03.2021 - 21.03.2021",
        },
        {
            eventName: "Paper Presentation - REPOWIS2K21",
            image: i,
            students: ["Sangeethanesan  R", "Shreyan Kumar S"],
            title: "Smart Surveillance System",
            venue: "Kongu Business School",
            year: "II & CSE",
            amount: "-",
            place: "Best Presenter",
            date: "26.03.2021",
        },

        {
            eventName: "HACK AND TACKLE",
            image: g,
            students: [
                "Gayathri G",
                "Vidhyalakshmi R G",
                "Sylviya J",
                "Sanjana V",
                "Sowmya M",
            ],
            title: "Panoramic E-commerce",
            venue: "SSN College of Engineering",
            year: "III & CSE",
            amount: "Rs. 10,000",
            place: "I",
            date: "10.3.2022 and 11.3.2022",
        },

        {
            eventName: "HACK AND TACKLE",
            image: g,
            students: ["Ishwarya B", "Aarthi S"],
            title: "CARENT",
            venue: "SSN College of Engineering",
            year: "IV & CSE",
            amount: "Rs. 7,000",
            place: "II",
            date: "10.3.2022 and 11.3.2022",
        },

        {
            eventName: "HACK AND TACKLE",
            image: g,
            students: ["Ishita G", "Harene M", "Varsha C B", "Vedha Sankar"],
            title: "Fake Online Content Detection",
            venue: "SSN College of Engineering",
            year: "II & CSE",
            amount: "Rs. 3,000",
            place: "III",
            date: "10.3.2022 and 11.3.2022",
        },

        {
            eventName: "INNOVATION GRANT PROGRAM 2021-22",
            image: g,
            students: ["S. Revanth", "S. Venkat"],
            title: "Artificial Intelligence Based Integrated and Distributed System for Preventing Covid-19 Spread using Deep Learning",
            venue: "IISc, Bangalore",
            year: " III & CSE ",
            amount: "₹ 3,50,000",
            place: "Project Grant",
            date: "-",
        },

        {
            eventName: "HACKINFINITY 2021-22",
            image: g,
            students: ["M. Harene"],
            title: "Health Care",
            venue: "SSN College of Engineering",
            year: " III & CSE ",
            amount: "₹ 12,000",
            place: "I",
            date: "-",
        },

        {
            eventName: "HACKINFINITY 2021-22",
            image: g,
            students: ["R. Sangeetha Nesan", "A.M.Tony"],
            title: "Bringing Few Advanced Technological Enhancements in the Field of HealthCare and Digitalizing HealthCare",
            venue: "SSN College of Engineering",
            year: " III & CSE ",
            amount: "₹ 8,000",
            place: "II",
            date: "-",
        },

        {
            eventName: "USER  CENTRIC  HACKATHON 2021",
            image: g,
            students: ["Vedha Sankar"],
            title: "Evaluation of Design Solutions",
            venue: "NanoGiants GmbH, Germany",
            year: " II & CSE ",
            amount: "€ 1,000 (85963.34 INR)",
            place: "I",
            date: "-",
        },

        {
            eventName: "INAE CONCLAVE 2021",
            image: g,
            students: [
                "Dharane Manne",
                "Marika Mahalakshmi",
                "Bhuvana Rajputana",
            ],
            title: "Teaching and Learning in Pandemic",
            venue: "Indian National Academy of Engineering",
            year: " II & CSE ",
            amount: "₹ 30,000",
            place: "I",
            date: "-",
        },

        {
            eventName: "INAE CONCLAVE 2021",
            image: g,
            students: ["R. Sri Roopa", "B.Srikesh Ram", "S.Sreyan Kumar"],
            title: "Engineering Intervention to fight against COVID-19 and Healthcare Management",
            venue: "Indian National Academy of Engineering",
            year: " II & CSE ",
            amount: "₹ 24,000",
            place: "II",
            date: "-",
        },
    ],
    [
        {
            eventName: "Computer Society of India",
            image: g,
            students: [
                "Ashwin M",
                "Naveen M K",
                "Adlin Felica D",
                "Harishitha S",
                "Ashmitha M",
            ],
            title: "National level coding competition",
            venue: "Loyola - ICAM College of Engineering and Technology",
            year: "II & CSE",
            amount: "Rs. 1000",
            place: "III",
            date: "26.02.2023",
        },
        {
            eventName: "Computer Society of India",
            image: g,
            students: [
                "Ashwin M",
                "Naveen M K",
                "Adlin Felica D",
                "Harishitha S",
                "Ashmitha M",
            ],
            title: "National level One day product development hackathon",
            venue: "Loyola - ICAM College of Engineering and Technology",
            year: "II & CSE",
            amount: "Rs. 1000",
            place: "III",
            date: "26.02.2023",
        },

        {
            eventName: "Advik",
            image: g,
            students: [
                "Dhanush Kumar R",
                "Harisudhan S",
                "Santhosh Kannan S P",
                "Ashfaq Ahamed",
                "Thamizazhagan B",
            ],
            title: "Solve 4 planet Hackathon",
            venue: "Central University of Haryana",
            year: "II & ADS",
            amount: "Rs. 1000",
            place: "II",
            date: "27.02.2023",
        },

        {
            eventName: "Abhigyan ‘23",
            image: g,
            students: ["Jeevitha M"],
            title: "Paper Presentation",
            venue: "SRM University, Vadapalanai Campus",
            year: "IV & CSE",
            amount: "Rs. 3,000",
            place: "I",
            date: "22.02.2023 & 23.2.23",
        },

        {
            eventName: "Hindusthan Innovation Contest (HIC)",
            image: g,
            students: [
                "Suresh Kumar K", 
                "Rahul S",
                "Shrinivas V N",
                "Ambrish B"
            ],
            title: "two days hackathon,",
            venue: "Hindusthan Institute of Technology",
            year: "II & CSE",
            amount: "Rs. 3,000",
            place: "II",
            date: "22.2.2022 and 23.2.2022",
        },

        {
            eventName: "IC HACK ’22",
            image: ssn,
            students: ["Mohamed Shameer E", "Monish V","Mohan Raj L", "Kiruthika S"],
            title: "AI-Calorie Tracker",
            venue: "B.M.S College of Engineering, Bangalore",
            year: " IV & CSE ",
            amount: "100 Dollars",
            place: "II",
            date: "03.07.2022 and 04.07.2022",
        },

        {
            eventName: "Healthathon-Datathon",
            image: health,
            students: ["Snekha S", "Meghana C", "Meghana M"],
            title: "Web Scrapping and Data Collection",
            venue: "Hack2Skill and String Ventures, USA",
            year: " II & ADS ",
            amount: "500 USD",
            place: "I",
            date: "18.11.22 to 14.12.2022",
        },

        {
            eventName: "EXPOTHON",
            image: g,
            students: ["Kishore Harshan Kumar", "Sanjiv S","Sanjana S","Snekha S"],
            title: "AIRO 2.0",
            venue: "Sri Sai Ram Engineering College.",
            year: " II & CSE ",
            amount: "₹ 3,000",
            place: "I",
            date: "03.02.2023",
        },
        {
            eventName: "Ideathon 2023",
            image: amet,
            students: ["Kishore Harshan Kumar", "Sanjiv S","Sanjana M","Snekha S"],
            title: "AMET CEII IDEATHON 2023",
            venue: "AMET Centre for Entrepreneurship, Innovation and Incubation",
            year: " II & ADS ",
            amount: "₹ 5,000",
            place: "I",
            date: "28.2.23",
        },

        {
            eventName: "Eureka",
            image: g,
            students: ["Ishita Gopalakrishnan","Harene M","Varsha C B"],
            title: "Paper Presentation",
            venue: "Kshity 2023 IIT, KHARAGPUR",
            year: " III & CSE ",
            amount: "Rs. 6,000",
            place: "II",
            date: "20.01.23 to 22.01.23",
        },
        {
            eventName: "BPLAN",
            image: g,
            students: ["Ishita Gopalakrishnan","Harene M","Varsha C B"],
            title: "BPLAN",
            venue: "Kshity 2023 IIT, KHARAGPUR",
            year: " III & CSE ",
            amount: "-",
            place: "Top 10",
            date: "20.01.23 to 22.01.23",
        },

        {
            eventName: "VIVID 6.0 – National Level Project Competition",
            image: g,
            students: [
                "Snekha S",     
            ],
            title: "Prediction of Depression using DTI-MRI Images",
            venue: "SSN College of Engineering",
            year: "II & ADS ",
            amount: "Rs. 10,000",
            place: "III",
            date: "30.07.2022",
        },

    ],
    // {
    //     eventName : "",
    //     image : "",
    //     students : [],
    //     title : "",
    //     venue : "",
    //     year : " ",
    //     amount : "",
    //     place : "",
    //     date : ""
    // },
    // {
    //     eventName : "",
    //     image : "",
    //     students : [],
    //     title : "",
    //     venue : "",
    //     year : " ",
    //     amount : "",
    //     place : "",
    //     date : ""
    // },
];

export default AchievementsData;
