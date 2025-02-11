const projects = [
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
        imageURI: "Muuvit",
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
    }
];

export default projects;
