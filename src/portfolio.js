/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Mohit Om Goyal's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Mohit Om Goyal's Portfolio",
    type: "website",
    url: "http://ashutoshhathidara.com/",
  },
};

//Home Page
const greeting = {
  title: "Mohit Kumar Goyal",
  logo_name: "Mohit Om Goyal",
  nickname: "Web Developer/ WebApp Designer",
  subTitle:
    "I worked on Frontend projects with HTML5, CSS, Bootstrap, JavaScript, and ReactJS. Now, I’m growing as a MERN stack developer to handle backend work. I also have skills in Figma, Google Cloud, and UI development, helping me build seamless, user-friendly applications.",
  resumeLink:
    "https://drive.google.com/file/d/1VpVoFnTtPN_Iftt22tjaQpoB6tarQnav/view?usp=sharing",
  portfolio_repository: "https://github.com/KnowMohit/masterPortfolio",
  githubProfile: "https://github.com/KnowMohit",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/KnowMohit",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/KnowMohit",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/mohit-goyal-5887a4226/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  // {
  //   name: "YouTube",
  //   link: "https://youtube.com/c/DevSense19",
  //   fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
  //   backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  // },
  {
    name: "Gmail",
    link: "mailto:mkg251412@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  // {
  //   name: "X-Twitter",
  //   link: "https://twitter.com/ashutosh_1919",
  //   fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
  //   backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  // },
  // {
  //   name: "Facebook",
  //   link: "https://www.facebook.com/laymanbrother.19/",
  //   fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
  //   backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  // },
  {
    name: "Instagram",
    link: "https://www.instagram.com/_mohitgoyall_/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    // {
    //   title: "Data Science & AI",
    //   fileName: "DataScienceImg",
    //   skills: [
    //     "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
    //     "⚡ Experience of working with Computer Vision and NLP projects",
    //     "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "Tensorflow",
    //       fontAwesomeClassname: "logos-tensorflow",
    //       style: {
    //         backgroundColor: "transparent",
    //       },
    //     },
    //     {
    //       skillName: "Keras",
    //       fontAwesomeClassname: "simple-icons:keras",
    //       style: {
    //         backgroundColor: "white",
    //         color: "#D00000",
    //       },
    //     },
    //     {
    //       skillName: "PyTorch",
    //       fontAwesomeClassname: "logos-pytorch",
    //       style: {
    //         backgroundColor: "transparent",
    //       },
    //     },
    //     {
    //       skillName: "Python",
    //       fontAwesomeClassname: "ion-logo-python",
    //       style: {
    //         backgroundColor: "transparent",
    //         color: "#3776AB",
    //       },
    //     },
    //     {
    //       skillName: "Deeplearning",
    //       imageSrc: "deeplearning_ai_logo.png",
    //     },
    //   ],
    // },
    {
      title: "Web Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React-Redux",
        "⚡ Developing mobile applications using Flutter, React Native and solo android apps using Kotlin",
        "⚡ Creating application backend in Node, Express & Flask",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Bootstrap",
          fontAwesomeClassname: "simple-icons:bootstrap",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        // {
        //   skillName: "Yarn",
        //   fontAwesomeClassname: "simple-icons:yarn",
        //   style: {
        //     color: "#2C8EBB",
        //   },
        // },
        // // {
        //   skillName: "Gatsby",
        //   fontAwesomeClassname: "simple-icons:gatsby",
        //   style: {
        //     color: "#663399",
        //   },
        // },
        // {
        //   skillName: "Flutter",
        //   fontAwesomeClassname: "simple-icons:flutter",
        //   style: {
        //     color: "#02569B",
        //   },
        // },
      ],
    },
    // {
    //   title: "Cloud Infra-Architecture",
    //   fileName: "CloudInfraImg",
    //   skills: [
    //     "⚡ Experience working on multiple cloud platforms",
    //     "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
    //     "⚡ Deploying deep learning models on cloud to use on mobile devices",
    //     "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "GCP",
    //       fontAwesomeClassname: "simple-icons:googlecloud",
    //       style: {
    //         color: "#4285F4",
    //       },
    //     },
    //     {
    //       skillName: "AWS",
    //       fontAwesomeClassname: "simple-icons:amazonaws",
    //       style: {
    //         color: "#FF9900",
    //       },
    //     },
    //     {
    //       skillName: "Azure",
    //       fontAwesomeClassname: "simple-icons:microsoftazure",
    //       style: {
    //         color: "#0089D6",
    //       },
    //     },
    //     {
    //       skillName: "Firebase",
    //       fontAwesomeClassname: "simple-icons:firebase",
    //       style: {
    //         color: "#FFCA28",
    //       },
    //     },
    //     {
    //       skillName: "PostgreSQL",
    //       fontAwesomeClassname: "simple-icons:postgresql",
    //       style: {
    //         color: "#336791",
    //       },
    //     },
    //     {
    //       skillName: "MongoDB",
    //       fontAwesomeClassname: "simple-icons:mongodb",
    //       style: {
    //         color: "#47A248",
    //       },
    //     },
    //     {
    //       skillName: "Docker",
    //       fontAwesomeClassname: "simple-icons:docker",
    //       style: {
    //         color: "#1488C6",
    //       },
    //     },
    //     {
    //       skillName: "Kubernetes",
    //       fontAwesomeClassname: "simple-icons:kubernetes",
    //       style: {
    //         color: "#326CE5",
    //       },
    //     },
    //   ],
    // },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Canva",
          fontAwesomeClassname: "simple-icons:canva",
          style: {
            color: "#000000",
          },
        },
      ],
    },
  ],
};

// Education Page
// const competitiveSites = {
//   competitiveSites: [
//     // {
//     //   siteName: "LeetCode",
//     //   iconifyClassname: "simple-icons:leetcode",
//     //   style: {
//     //     color: "#F79F1B",
//     //   },
//     //   profileLink: "https://leetcode.com/layman_brother/",
//     // },
//     // {
//     //   siteName: "HackerRank",
//     //   iconifyClassname: "simple-icons:hackerrank",
//     //   style: {
//     //     color: "#2EC866",
//     //   },
//     //   profileLink: "https://www.hackerrank.com/layman_brother",
//     // },
//     // {
//     //   siteName: "Codechef",
//     //   iconifyClassname: "simple-icons:codechef",
//     //   style: {
//     //     color: "#5B4638",
//     //   },
//     //   profileLink: "https://www.codechef.com/users/ashutosh_1919",
//     // },
//     // {
//     //   siteName: "Codeforces",
//     //   iconifyClassname: "simple-icons:codeforces",
//     //   style: {
//     //     color: "#1F8ACB",
//     //   },
//     //   profileLink: "http://codeforces.com/profile/layman_brother",
//     // },
//     // {
//     //   siteName: "Hackerearth",
//     //   iconifyClassname: "simple-icons:hackerearth",
//     //   style: {
//     //     color: "#323754",
//     //   },
//     //   profileLink: "https://www.hackerearth.com/@ashutosh391",
//     // },
//     // {
//     //   siteName: "Kaggle",
//     //   iconifyClassname: "simple-icons:kaggle",
//     //   style: {
//     //     color: "#20BEFF",
//     //   },
//     //   profileLink: "https://www.kaggle.com/laymanbrother",
//     // },
//   ],
// };

const degrees = {
  degrees: [
    {
      title: "Maharishi Markandeshwar Deemed To Be University",
      subtitle: "B.Tech. in Computer Science and Engineering",
      logo_path: "MMU-AMBALA-LOGO-removebg-preview.png",
      alt_name: "IIITDM Kurnool",
      duration: "2021 - 2025",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
        "⚡ I was selected for Merit cum Means Scholarship which is given to top 10% of students in college. I have received award from respected director for consistently best performance in academics.",
      ],
    },
    {
      title: "Tagore International School, Bhadra",
      subtitle: "12th CBSE",
      logo_path: "school.png",
      alt_name: "Indiana University Bloomington",
      duration: "2020 - 2021",
      descriptions: [
        "⚡ I have taken varity of courses related to Artificial Intelligence which correspond to Explainable AI, Graph Machine Learning, Computer Vision etc.",
        "⚡ Apart from this, I have also done research assistantship. As part of it, I have worked on creating new algorithms in Graph ML and Network Science.",
        "⚡ During my time at university, I was also associated with multimedia department. As part of it, I have worked on some documentry films and interviews.",
      ],
    },
    {
      title: "Tagore International School, Bhadra",
      subtitle: "10th CBSE",
      logo_path: "school.png",
      alt_name: "Indiana University Bloomington",
      duration: "2018 - 2019",
      descriptions: [
        "⚡ I have taken varity of courses related to Artificial Intelligence which correspond to Explainable AI, Graph Machine Learning, Computer Vision etc.",
        "⚡ Apart from this, I have also done research assistantship. As part of it, I have worked on creating new algorithms in Graph ML and Network Science.",
        "⚡ During my time at university, I was also associated with multimedia department. As part of it, I have worked on some documentry films and interviews.",
      ],
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Google Cloud",
      logo_path: "google_cloud.png",
      certificate_link:
        "https://drive.google.com/file/d/1feEFuwFvjxojbcu41SQoj9z1qNU8X8se/view?usp=sharing",
      alt_name: "Stanford University",
      color_code: "#FFF",
    },
    {
      title: "NextQuantumm",
      logo_path: "unnamed.png",
      certificate_link:
        "https://drive.google.com/file/d/1KWaYBCyxG0ngShtr0g2suxKUOZmHMlCI/view?usp=sharing",
      alt_name: "deeplearning.ai",
      color_code: "#ffffff",
    },
    {
      title: "Invictus",
      logo_path: "dtu.jpg",
      certificate_link:
        "https://drive.google.com/file/d/1C8I2sQTHletTOUurmewT0u4YCGgcy9du/view?usp=sharing",
      alt_name: "Google",
      color_code: "#fff",
    },
    {
      title: "Vihaan 6.O",

      logo_path: "dtu.jpg",
      certificate_link:
        "https://drive.google.com/file/d/1mhbu7s2LPz_haUReVEg7w5_042X6wexZ/view?usp=sharing",
      alt_name: "IBM",
      color_code: "#FFF",
    },
    {
      title: "CodeCrunchML",

      logo_path: "dtu.jpg",
      certificate_link:
        "https://drive.google.com/file/d/1dp3N1mMIsEGMtYhe-eE7fDDJEwABAriV/view?usp=sharing",
      alt_name: "Microsoft",
      color_code: "#fff",
    },
    {
      title: "HackaVersuMM'22",

      logo_path: "MMU-AMBALA-LOGO-removebg-preview.png",
      certificate_link:
        "https://drive.google.com/file/d/1iD7sfyPSAy1TI3YxGOLWfZwrsIxpLNWX/view?usp=sharing",
      alt_name: "IBM",
      color_code: "#fff",
    },
    {
      title: "HackaVerse 1.O",

      logo_path: "MMU-AMBALA-LOGO-removebg-preview.png",
      certificate_link:
        "https://drive.google.com/file/d/1phAphGD2IYvAq5ytCaK_-6VY-GVsUr3Q/view?usp=sharing",
      alt_name: "Google",
      color_code: "#fff",
    },
    {
      title: "Kotlin Course",

      logo_path: "kotlin.png",
      certificate_link:
        "https://drive.google.com/file/d/153kFoh62I7QiddbfAE0gix867wUv0Y-q/view?usp=sharing",
      alt_name: "deeplearning.ai",
      color_code: "#fff",
    },
    {
      title: "AIU23",

      logo_path: "MMU-AMBALA-LOGO-removebg-preview.png",
      certificate_link: "",
      alt_name: "Coursera",
      color_code: "#FFF",
    },
    // {
    //   title: "Kuberenetes on GCP",
    //   subtitle: "- Qwiklabs",
    //   logo_path: "gcp_logo.png",
    //   certificate_link:
    //     "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
    //   alt_name: "GCP",
    //   color_code: "#4285F499",
    // },
    // {
    //   title: "Cryptography",
    //   subtitle: "- Saurabh Mukhopadhyay",
    //   logo_path: "nptel_logo.png",
    //   certificate_link:
    //     "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
    //   alt_name: "NPTEL",
    //   color_code: "#FFBB0099",
    // },
    // {
    //   title: "Cloud Architecture",
    //   subtitle: "- Qwiklabs",
    //   logo_path: "gcp_logo.png",
    //   certificate_link:
    //     "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
    //   alt_name: "GCP",
    //   color_code: "#4285F499",
    // },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Internship and Volunteership",
  description:
    "I have worked with many evolving startups as ML and DL Developer, Designer and Software Architect. I have also worked with some well-established companies mostly as AI Developer. I love organizing events, and that is why I am also involved with many open-source communities as a representative.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Internships",
      experiences: [
        {
          title: "Junior Developer Intern",
          company: "Prince Construction",
          logo_path: "pc.png",
          duration: "Apr 2024 - July 2024",
          location: "Jaipur, India",
          description:
            "As a junior developer, I recently worked on the landing page for our company, which is set to be hosted soon. This project provided a valuable opportunity for me to apply and enhance my skills in Frontend Development while making a contribution to the company.",
          color: "#000000",
        },
        {
          title: "UI Designer Intern",
          company: "VordRob",
          company_url:
            "https://www.vordrob.in/?srsltid=AfmBOopGHiwf22_87n5xTEZykqIMZfL9DB8GmLwZzdn5U1-pdk6W7RZ9&v=13b5bfe96f3e",
          logo_path: "Vordrob.png",
          duration: "July 2024 - Sept 2024",
          location: "Work From Home",
          description:
            "As a UI Designer, it was a freelancing project where I wireframed and structured both the website and app, then designed the UI using Figma, which helped me enhance my design skills.",
          color: "#ee3c26",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "E-Cell",
          company: "Maharishi Markandeshwar Deemed to be University",
          logo_path: "MMU-AMBALA-LOGO-removebg-preview.png",
          duration: "Jun 2022 - Aug 2023",
          location: "Mullana, Ambala",
          description:
            "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build open-source projects under this program.",
          color: "#4285F4",
        },
        {
          title: "HackaVersuMM'22",
          company: "Maharishi Markandeshwar Deemed to be University",
          logo_path: "MMU-AMBALA-LOGO-removebg-preview.png",
          duration: "Aug 2022 - Sep 2022",
          location: "Mullana, Ambala",
          description:
            "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud, especially Azure tools, in the development of their projects and startups. Under this program, I have organized hands-on workshops and seminars to teach Cloud Computing concepts to students.",
          color: "#D83B01",
        },
        {
          title: "AIU'23",
          company: "Maharishi Markandeshwar Deemed to be University",
          logo_path: "MMU-AMBALA-LOGO-removebg-preview.png",
          duration: "Mar 2023 - May 2023",
          location: "Mullana, Ambala",
          description:
            "My responsibility for this program was to create an open-source environment in college and in the city. We organized multiple hackathons based on problems collected by ordinary people from Kurnool city. We built an open-source community in our college, available at dsc_iiitdmk on GitHub.",
          color: "#000000",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

// const publicationsHeader = {
//   title: "Publications",
//   description: "Some of my published Articles, Blogs and Research.",
//   avatar_image_path: "projects_image.svg",
// };

// const publications = {
//   data: [
//     {
//       id: "neuro-symbolic-sudoku-solver",
//       name: "Neuro-Symbolic Sudoku Solver",
//       createdAt: "2023-07-02T00:00:00Z",
//       description: "Paper published in KDD KiML 2023",
//       url: "https://arxiv.org/abs/2307.00653",
//     },
//     {
//       id: "mdp-diffusion",
//       name: "MDP-Diffusion",
//       createdAt: "2023-09-19T00:00:00Z",
//       description: "Blog published in Paperspace",
//       url: "https://blog.paperspace.com/mdp-diffusion/",
//     },
//     {
//       id: "consistency-models",
//       name: "Consistency Models",
//       createdAt: "2023-10-12T00:00:00Z",
//       description: "Blog published in Paperspace",
//       url: "https://blog.paperspace.com/consistency-models/",
//     },
//   ],
// };

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_ashutosh.png",
    description:
      "I am available on almost every Platform. You can message me, I will reply within 24 hours. I can help you with Web Deevelopment as well as UI/UX Designing.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "https://blogs.ashutoshhathidara.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "MM Continental, Mullana, Ambala, Haryana, India, 133207",
    locality: "Ambala",
    country: "India",
    region: "North-India",
    postalCode: "133027",
    streetAddress: "Sunil PG",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/idk8tHLRvcoaGkHy8",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  // competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
};
