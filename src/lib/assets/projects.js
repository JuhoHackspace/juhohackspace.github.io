
const projects = [
    {
        group: "Group Projects",
        projects: [
            {
                name: "Project Theremin2.0",
                description: "A digital version of the classic instrument Theremin. \
                            This instrument was created as a group project in the beginning of the first year of ICT \
                            engineering studies at Oulu University of Applied Sciences.\
                            It was programmed on an Arduino microcontroller using HC-SR04 distance sensors.",
                videoURI: "https://www.youtube.com/embed/YLMdSNze4F4",
                availableOn: [
                    {
                        name: "GitHub",
                        url: "https://github.com/JuhoHackspace/MyProjects/tree/main/2023-Q2-Projekti%20Theremin%202.0"
                    }
                ]
            },
            {
                name: "Project Bankki",
                description: "This project was developed as a group effort towards the end of the first year of ICT \
                            engineering studies at Oulu University of Applied Sciences. \
                            It is a bank ATM simulation programmed in C++ using the Qt framework. \
                            The user interface (UI) is integrated with a Node.js Express REST API, which interacts with a MySQL database.",
                videoURI: "https://www.youtube.com/embed/Lp9dV-Fh-a4",
                availableOn: [
                    {
                        name: "GitHub",
                        url: "https://github.com/JuhoHackspace/MyProjects/tree/main/2023-Q4-ATM-pankkiautomaatti"
                    }
                ]
            },
            {
                name: "Project Muuvit",
                description: "Muuvit is a web application developed as a group project in the second year of ICT studies at Oulu University of Applied Sciences. \
                            This full-stack app allows users to search for movies and TV shows, create groups, post content, and share favorite lists. \
                            Users can also find and post movie screenings from Finnish cinemas. The UI was built with React, and the backend with Java Springboot. \
                            The database uses PostgreSQL with an ORM model.",
                imageURI: ["Muuvit"],
                availableOn: [
                    {
                        name: "GitHub",
                        url: "https://github.com/JuhoHackspace/MyProjects/tree/main/2024-Q2-Muuvit"
                    },
                    {
                        name: "Web",
                        url: "https://muuvit-dbml.onrender.com/"
                    }
                ]
            },
            {
                name: "Project Huiputinpaivakirja",
                description: "Huiputinpaivakirja is a mobile application that we built as the last group application project in the end of the \
                            second year of ICT studies at Oulu University of Applied Sciences. It is a bouldering journal and a tracking tool tailored \
                            for climbers. This demo version was built for the old bouldering hall at OKK (Oulu Climbing Centre). The application relies \
                            on user managed content. Users create and photograph new routes, vote for grades, and ultimately for the deletion of old routes. \
                            The app keeps track of climbed routes and grades. The app was created with React Native and Firebase.",
                imageURI: ["Huiputin1", "Huiputin2", "Huiputin3", "Huiputin4", "Huiputin5"],
                availableOn: [
                    {
                        name: "GitHub",
                        url: "https://github.com/JuhoHackspace/MyProjects/tree/main/2025-Q4-HuiputinPaivakirja"
                    }
                ]
            }
        ]
    },
    {
        group: "Personal Projects",
        projects: [
            {
                name: "Learning JavaScript",
                description: "This is a personal project that I created as a final project for an intro course to web-development in the beginning \
                              of the second year of my studies. This comperehensive web-site is created using only HTML, CSS and vanilla JavaScript \
                              without any frameworks. In this site users can browse online JavaScript tutorial providers, hone their skills by completing interactive quizes \
                              and execute JavaScript code in a built in JavaScript coderunner. The site has a responsive design ensuring a good user experience on all devices. \
                              The site is hosted on Firebase Hosting and the backend service responsible for executing JavaScript code in a sandbox, is hosted as a Firebase Function.",
                imageURI: ["LearningJavaScript"],
                availableOn: [
                    {
                        name: "GitHub",
                        url: "https://github.com/JuhoHackspace/MyProjects/tree/main/Final-Project-Basics-of-Web-Development"
                    },
                    {
                        name: "Web",
                        url: "https://learningjavascript-1288a.web.app"
                    }
                ]
            },
            {
                name: "Movie Search",
                description: "This is a personal project that I created as a final project for a mobile development course in the second year \
                            of my studies. The application was created using Kotlin with Jetpack Compose in Android Studio. \
                            The application allows users to search for movies from The Movie Database with the movie title. \
                            The app displays the movie title, release year and poster image. More specific information is made available \
                            on a separate screen by clicking on the movie. The app uses the TMDB API to fetch movie data.",
                videoURI: "https://youtube.com/embed/ic-bXwX5EIw",
                availableOn: [
                    {
                        name: "GitHub",
                        url: "https://github.com/JuhoHackspace/MyProjects/tree/main/Final-Project-Mobile-Programming-With-Native-Technologies"
                    }
                ]
            },
            {
                name: "GeoNotes",
                description: "GeoNotes is a personal project, that I created to demonstrate my skills in creating a Progressive Web Application (PWA). \
                            The app is a simple map application, that allows users to add and remove locations on the map.\
                            The user places a marker on the map and provides a description for the location. The locations are stored in a Firestore database. \
                            The beauty of the application is that is works seamlessly in online and offline modes. It is platform independent and can be installed on \
                            any device that has a modern web browser. The app utilizes a service worker and uses cache to store map images and queue user interactions in offline mode. \
                            The architecrure has three layers, a React frontend and a Node.js Express REST API both hosted on Render.com, and a Google Firestore database.",
                imageURI: ["PWA_1", "PWA_2", "PWA_3", "PWA_4", "PWA_5"],
                availableOn: [
                    {
                        name: "GitHub",
                        url: "https://github.com/JuhoHackspace/PWADemo.git"
                    },
                    {
                        name: "Web",
                        url: "https://geonotes.onrender.com"
                    }
                ]
            }
        ]
    }
];

export default projects;
