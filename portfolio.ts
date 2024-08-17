import emoji from "react-easy-emoji";
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from "./types/sections";

export const greetings: GreetingsType = {
  name: "Ahmed Ullah",
  title: "Hi I'm Ahmed :)",
  description:
    "A passionate software engineer and researcher with an unwavering commitment to creating sustainable and scalable solutions in machine learning and full stack development. I strive to continually learn and grow, aiming to contribute meaningfully to the machine learning community.",
  resumeLink: "#",
};

export const openSource = {
  githubUserName: "ullahallu",
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  email: "ullahallu.a.u@gmail.com",
  linkedin: "https://www.linkedin.com/in/ahmed-ullah-bb26021b8/",
  github: "https://github.com/ullahallu",
  instagram: "https://www.instagram.com/ahmedoolah",
};

export const skillsSection: SkillsSectionType = {
  title: "About Me :D",
  subTitle:"With six years of full stack engineering experience and four years dedicated to machine learning DevOps and research, I've spent the last three years leading cutting-edge projects. My expertise in machine learning spans a wide range of algorithms and applications. In natural language processing, I've led NLPOps teams to build end-to-end applications, optimize transformer architectures, and manage deployments, striving to create innovative architectures beyond transformers. In computer vision, I've led projects and published research on CNN optimization and applied computer vision applications, aiming to push the boundaries of this field. Additionally, my experience in parallel processing includes writing CUDA kernels to optimize machine learning training and deployment across clusters of GPUs. My full stack development skills make me an elite programmer, capable of handling complex DevOps projects and contributing to open-source initiatives, all within agile frameworks.  As the founder of Boros Laboratories, I focus on assistive technologies for people with disabilities, collaborating with UT Arlington on AI in healthcare. My background in full stack development makes me proficient in every language and codebase I've taken on. This journey fuels my passion for creating impactful, scalable solutions in tech. Let's explore the skills and technologies that form the backbone of my expertise in machine learning, full stack development, and data science and engineering. ",
  data: [
    // INIT SECTION JUST FOR RENDER OF LOTTIE
    {
      title: null,
      lottieAnimationFile: null, // Path of Lottie Animation JSON File
      skills: [],
      softwareSkills: []

    },
    // Machine Learning Shit
    { 
      title: "\nMachine Learning Operations ",
      lottieAnimationFile: "/lottie/skills/lottieML.json", 
      skills: [
        emoji("⚡ Building machine learning models in Python using ML libraries such as NumPy and Scikit-Learn"),
        emoji("⚡ Building and training supervised learning models for prediction and classification tasks"),
        emoji("⚡ Building, training, and implementing efficient neural networks with TensorFlow for multi-class classification"),
        emoji("⚡ Building and using decision trees and tree ensemble methods"),
        emoji("⚡ Building deep reinforcement learning models"),
        emoji("⚡ Building, training, and applying convolutional neural networks for visual detection and recognition tasks"),
        emoji("⚡ building, training, and applying recurrent neural networks for character-level language modeling, solving various tasks in the scope of natural language processing"),
      ],
      softwareSkills: [
        {
          skillName: "TensorFlow",
          iconifyTag: "devicon:tensorflow",
        },
        {
          skillName: "Keras",
          iconifyTag: "devicon:keras",
        },
        {
          skillName: "PyTorch",
          iconifyTag: "devicon:pytorch",
        },
        {
          skillName: "NumPy",
          iconifyTag: "devicon:numpy",
        },
        {
          skillName: "Pandas",
          iconifyTag: "devicon:pandas",
        },
        {
          skillName: "Scikit-Learn",
          iconifyTag: "devicon:scikitlearn",
        },
        {
          skillName: "Docker",
          iconifyTag: "logos:docker-icon",
        },
        {
          skillName: "Kubernetes",
          iconifyTag: "devicon:kubernetes",
        },
        {
          skillName: "MLFlow",
          iconifyTag: "simple-icons:mlflow",
        },
        {
          skillName: "AirFlow",
          iconifyTag: "logos:airflow-icon",
        },
        {
          skillName: "OpenCV",
          iconifyTag: "devicon:opencv",
        },
        {
          skillName: "Jenkins",
          iconifyTag: "devicon:jenkins",
        },
        {
          skillName: "Terraform",
          iconifyTag: "devicon:terraform",
        },
        {
          skillName: "Travis CI",
          iconifyTag: "logos:travis-ci",
        },
        {
          skillName: "CircleCI",
          iconifyTag: "devicon-plain:circleci",
        },
        {
          skillName: "CUDA",
          iconifyTag: "vscode-icons:file-type-cuda",
        },
        {
          skillName: "HuggingFace",
          iconifyTag: "logos:hugging-face-icon",
        },
        {
          skillName: "Caffe",
          iconifyTag: "file-icons:caffe",
        },
        

      ],
    },
    // Full Stack Stuff 
    { 
      title: "Full Stack Development ",
      lottieAnimationFile: "/lottie/skills/lottie001.json", 
      skills: [
        emoji("⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js"),
        emoji("⚡ Building responsive static websites using Next.js"),
        emoji("⚡ Building RESTful APIs in Django & Django REST Framework"),
        emoji("⚡ Building RESTful APIs in Django & Django REST Framework"),
        emoji("⚡ Building RESTful APIs in Django & Django REST Framework"),
        emoji("⚡ Building RESTful APIs in Django & Django REST Framework"),
        emoji("⚡ Building RESTful APIs in Django & Django REST Framework"),
        emoji("⚡ Building RESTful APIs in Django & Django REST Framework"),
        emoji("⚡ GETTING TEN DOLLARS (PAY UP)"),
        emoji("⚡ Building RESTful APIs in Django & Django REST Framework"),
        emoji("⚡ Building RESTful APIs in Django & Django REST Framework"),
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          iconifyTag: "typcn:html5",
        },
        {
          skillName: "CSS3",
          iconifyTag: "devicon:css3",
        },
        {
          skillName: "JavaScript",
          iconifyTag: "logos:javascript",
        },
        {
          skillName: "TypeScript",
          iconifyTag: "skill-icons:typescript",
        },
        {
          skillName: "Reactjs",
          iconifyTag: "vscode-icons:file-type-reactjs",
        },
        {
          skillName: "Nextjs",
          iconifyTag: "logos:nextjs-icon",
        },
        {
          skillName: "Vuejs",
          iconifyTag: "devicon:vuejs",
        },
        {
          skillName: "Angular",
          iconifyTag: "devicon:angularjs",
        },
        {
          skillName: "Bootstrap",
          iconifyTag: "logos:bootstrap",
        },
        {
          skillName: "TailwindCSS",
          iconifyTag: "devicon:tailwindcss",
        },
        {
          skillName: "jQuery",
          iconifyTag: "devicon:jquery",
        },
        {
          skillName: "NodeJS",
          iconifyTag: "devicon:nodejs",
        },
        {
          skillName: "CSharp",
          iconifyTag: "devicon:csharp",
        },
        {
          skillName: "Ruby",
          iconifyTag: "logos:ruby",
        },
        {
          skillName: "GraphQL",
          iconifyTag: "logos:graphql",
        },
        {
          skillName: "PHP",
          iconifyTag: "logos:php",
        },
        {
          skillName: "FastAPI",
          iconifyTag: "devicon:fastapi",
        },
        {
          skillName: "GoLang",
          iconifyTag: "skill-icons:golang",
        },
        {
          skillName: "Java",
          iconifyTag: "skill-icons:java-dark",
        },
        {
          skillName: "MySQL",
          iconifyTag: "logos:mysql",
        },
        {
          skillName: "PostgreSQL",
          iconifyTag: "logos:postgresql",
        },
        {
          skillName: "MongoDB",
          iconifyTag: "devicon:mongodb",
        },
        {
          skillName: "SQLite",
          iconifyTag: "devicon:sqlite",
        },
        {
          skillName: "Cassandra",
          iconifyTag: "logos:cassandra",
        },
        {
          skillName: "Firebase",
          iconifyTag: "logos:firebase",
        },
        {
          skillName: "AWS",
          iconifyTag: "logos:aws",
        },
        {
          skillName: "Oracle",
          iconifyTag: "devicon:oracle",
        },
        {
          skillName: "Google Cloud Platform",
          iconifyTag: "skill-icon:gcp-light",
        },
        {
          skillName: "Terraform",
          iconifyTag: "devicon:terraform",
        },
        {
          skillName: "Prometheus",
          iconifyTag: "devicon:prometheus",
        },
        {
          skillName: "Apache",
          iconifyTag: "logos:apache",
        },
        {
          skillName: "OAuth",
          iconifyTag: "logos:oauth",
        },
        {
          skillName: "Azure",
          iconifyTag: "devicon:azure",
        },
        {
          skillName: "Heroku",
          iconifyTag: "skill-icons:heroku",
        },
        {
          skillName: "AWSLambda",
          iconifyTag: "simple-icons:awslambda",
        },
        {
          skillName: "Django",
          iconifyTag: "vscode-icons:file-type-django",
        },
      ],
    },
    // Machine Learning Shit
    { 
      title: "Data Science & Data Engineering ",
      lottieAnimationFile: "/lottie/skills/lottieD.json", 
      skills: [
        emoji("⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js"),
        emoji("⚡ Building responsive static websites using Next.js"),
        emoji("⚡ Building RESTful APIs in Django & Django REST Framework"),
        emoji("⚡ Building RESTful APIs in Django & Django REST Framework"),
        emoji("⚡ Building RESTful APIs in Django & Django REST Framework"),
        emoji("⚡ Building RESTful APIs in Django & Django REST Framework"),
        emoji("⚡ Building RESTful APIs in Django & Django REST Framework"),
        emoji("⚡ Building RESTful APIs in Django & Django REST Framework"),
        emoji("⚡ GETTING TEN DOLLARS (PAY UP)"),
        emoji("⚡ Building RESTful APIs in Django & Django REST Framework"),
        emoji("⚡ Building RESTful APIs in Django & Django REST Framework"),
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          iconifyTag: "typcn:html5",
        },
        {
          skillName: "CSS3",
          iconifyTag: "devicon:css3",
        },
        {
          skillName: "JavaScript",
          iconifyTag: "logos:javascript",
        },
        {
          skillName: "Reactjs",
          iconifyTag: "vscode-icons:file-type-reactjs",
        },
        {
          skillName: "Nextjs",
          iconifyTag: "vscode-icons:file-type-light-next",
        },
        {
          skillName: "AWS",
          iconifyTag: "logos:aws",
        },
        {
          skillName: "Heroku",
          iconifyTag: "logos:heroku-icon",
        },
        {
          skillName: "Github",
          iconifyTag: "akar-icons:github-fill",
        },
        {
          skillName: "Docker",
          iconifyTag: "logos:docker-icon",
        },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: "Machine Learning Research & Operations",
    progressPercentage: "95",
  },
  {
    Stack: "Deep Learning",
    progressPercentage: "97",
  },
  {
    Stack: "Computer Vision",
    progressPercentage: "96",
  },
  {
    Stack: "Natural Language Processing",
    progressPercentage: "96",
  },
  {
    Stack: "Full Stack Development", //Insert stack or technology you have experience in
    progressPercentage: "97", //Insert relative proficiency in percentage
  },
  {
    Stack: "Backend Development",
    progressPercentage: "91",
  },
  {
    Stack: "Data Science & Data Engineering",
    progressPercentage: "87",
  },
  {
    Stack: "CUDA & GPU Optimization",
    progressPercentage: "85",
  },
  {
    Stack: "Cloud Services (AWS, Azure, GCP)",
    progressPercentage: "94",
  },
  {
    Stack: "Containerization & Orchestration (Docker, Kubernetes)",
    progressPercentage: "94",
  },
  {
    Stack: "DevOps & CI/CD Practices",
    progressPercentage: "90",
  },
  {
    Stack: "Computer Networking & Security",
    progressPercentage: "80",
  },
  {
    Stack: "Agile Methodologies & Project Management",
    progressPercentage: "90",
  },
  {
    Stack: "Ethical Hacking & Cybersecurity",
    progressPercentage: "80",
  },
  {
    Stack: "Data Visualization & BI Tools",
    progressPercentage: "80",
  },
  {
    Stack: "Theoretical Computer Science",
    progressPercentage: "77",
  },
  {
    Stack: "Assembly Language & Computer Architecture",
    progressPercentage: "65",
  },
  {
    Stack: "Frontend / UI Development",
    progressPercentage: "72",
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: "The University of Texas at Arlington",
    subHeader: "Bachelor of Science in Computer Science",
    duration: "August 2020 - May 2024",
    desc: "Machine Learning Researcher, Presidential Honors Scholar, Dean's List",
    grade: "3.72",
    descBullets: [], // Array of Strings
  },
  {
    schoolName: "University of Michigan - Ann Arbor",
    subHeader: "Masters in Machine Learning",
    duration: "August 2025 - Present",
    desc: "Machine Learning Researcher",
    grade: "N/A",
    descBullets: [], // Array of Strings
  },
];

export const experience: ExperienceType[] = [
  {
    role: "Founder | CEO | Machine Learning Researcher",
    company: "Boros Laboratories",
    companyLogo: "/img/icons/common/BOROS002.png",
    date: "November 2023 - Present",
    desc: "(In Development)",
  },
  {
    role: "Co-Founder | CTO | Machine Learning Researcher",
    company: "EMR-BERT",
    companyLogo: "/img/icons/common/lebron.png",
    date: "August 2024 - Present",
    desc: "(In Development)",
  },
  {
    role: "Machine Learning Researcher",
    company: "UT Arlington College of Engineering",
    companyLogo: "/img/icons/common/utalogo1.png",
    date: "Jan 2023 - Aug 2023",
    desc: "NSF Funded Research Experiences for Undergraduates Program",
    descBullets: [
    	"Created an assistive smart glasses prototype for memory loss patients to independently manage grocery needs from home.",
     	"Developed a back-end administration platform, allowing users to take control of prototype features at macro and micro levels.",
     	"Trained and deployed YOLOv7/v8 CNNs for grocery item recognition, achieving 93.2% & 82.6% mAP scores on the Freiburg dataset.",
     	"Researched state-of-the-art methods, providing a solid basis for the prototype, cutting 25% of development time and costs",
     	"Utilized a Raspberry Pi 4B+ and a Raspberry Pi Camera Module v2 for processing and data collection, ensuring seamless UX.",
     	"Conducted hyperparameter optimization for CNN architectures, increasing mAP scores by nearly 60%.",
     	"Led, collaborated with, and directed a team of graduate and undergraduate researchers in an Agile/Scrum environment.",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "Track Records",
    companyLogo: "/img/icons/common/trackrecords.png",
    date: "Sep 2023 - May 2024",
    desc: "YEET",
    descBullets: [
     	"Collaborated with a team of engineers in empowering users to understand their music streaming habits.",
     	"Developed a unique machine learning music recommendation system via Spotify's BaRT recommendation system architecture.",
     	"Led backend development efforts, enhancing database infrastructure, and implementing data mining techniques.",
     	"Utilized APIs from music streaming services and managed API rate limits to ensure a smooth user experience.",
     	"Assisted the team in developing front-end (website) UX/UI features using React.js, CSS, and HTML. ",
     	"Managed version control and collaboration using Git and GitHub, following Agile methodologies for project management.",
     	"Deployed the application utilizing AWS, ensuring scalable and reliable cloud infrastructure.",
    ],
  },
];

export const projects: ProjectType[] = [
  {
    name: "Tortoise: An Assistive Smart Glasses System for People with Memory Loss Conditions",
    desc: "• Pitched a new smart-glasses and watch technology project; awarded a grant to lead and develop the prototype to help Alzheimer’s and dementia patients. • Led the training, optimization, and deployment of image classification architectures, including VGGFace2, EfficientNet, & YOLOv9. • Directed engineers in designing and developing the system prototype, streamlining progress with Agile methodologies. • Developed a RESTful API server to handle data transfer between system components with efficiency.• Implemented and managed backend services using Python, C# and ASP.Net Core, integrated with SQL for efficient data handling• Utilized Docker for orchestration and containerization of microservices, ensuring efficient deployment.• Applied cutting-edge machine learning techniques to significantly enhance model performance and user experience. • Leading beta prototype testing stages, aiming to present advancements of Tortoise at the AI in Health Conference in 2025.",
    github: "https://github.com/1hanzla100/developer-portfolio",
    link: "https://developer-portfolio-1hanzla100.vercel.app/",
  },
  {
    name: "BOROS",
    desc: "A sentient creature, able to defend for its life and existence. True Life.",
    github: "https://github.com/1hanzla100/developer-portfolio",
    link: "https://gibeo.io/",
  },
  {
    name: "O Mejor Oferta",
    desc: "O Mejor Oferta is a mobile marketplace for buying and selling items nearby, helping users find deals on things they want and make money from items they no longer need.",
    link: "https://play.google.com/store/apps/details?id=com.duseca.mejor_oferta",
  },
  {
    name: "Hooligan Culture",
    desc: "A Ecommerce Platform, where shopping meets the future! With HandCash BitcoinSV integration, you can authenticate and purchase products with ease and confidence.",
    link: "https://hooliganculture.com/",
  },
];

export const feedbacks: FeedbackType[] = [
  {
    name: "Your Mom",
    role: "Frontend Developer at Meganos Software",
    feedback:
      "You were a wonderful addition to our team, alhumdulillah. I'm quite impressed with your abilities and professional practices. You approach problems from a unique perspective and always ask the right question. Finding a good teammate like Hanzla is extremely difficult. He has contributed to the growth of our organization and continues to do so. May Allah bless you with everything you desire.",
  },
  {
    name: "Your Papa",
    role: "CEO at Duseca Software",
    feedback:
      "Hanzla has a deep understanding of web development technologies and is adept at using them to build scalable, robust, and secure web applications. He has worked on various projects, ranging from small-scale to large-scale, and has shown his ability to work collaboratively with others while maintaining a high level of productivity and quality. Hanzla is a pleasure to work with, and I have no doubt that he will be an asset to any team or organization. I highly recommend Hanzla for any Full Stack Django, React.js, or Blockchain development projects, and I wish him all the best in his future endeavors.",
  },
  {
    name: "Your Brother",
    role: "CEO at ZR Technologies",
    feedback:
      "Very skilled at what he does and has an in depth knowledge of Django and he's always ready to handle any challenges thrown at him. He's been a valuable member of my team and i look forward to working with him in the years to come",
  },
];

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: "Ahmed Ullah",
  description: greetings.description,
  author: "Ahmed Ullah",
  image: "https://avatars.githubusercontent.com/u/59178380?v=4",
  url: "https://ullahallu.github.io",
  keywords: [
    "Ahmed",
    "Ahmed Ullah",
    "ullahallu",
    "ullahallu",
    "Ahmed Ullah Portfolio",
    "Ahmed Portfolio ",
    "Ahmed Ullah's Portfolio",
  ],
};
