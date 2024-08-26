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
  resumeLink: "/public/resume.pdf",
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
  title: "What I Do",
  subTitle:"With six years in full stack engineering and four years in machine learning research/DevOps, I specialize in building scalable systems and leading cutting-edge AI projects. From enhancing NLP architectures to optimizing CNNs in computer vision, my work bridges practical application and research innovation. As the founder of Boros Laboratories, I focus on assistive technology and healthcare AI, striving to make a meaningful impact. My core expertise spans machine learning, full stack development, CI/CD, cloud infrastructure, and data science—each key to driving the solutions I create. Here is a deeper dive into my skills within these domains:",
  data: [
    
    // Machine Learning 
    { 
      title: "\nMachine Learning Research & Operations ",
      lottieAnimationFile: "/lottie/skills/lottieML.json", 
      skills: [
        emoji("⚡ Building and deploying deep learning models using Python with TensorFlow, PyTorch, and Keras for complex classification and prediction tasks."),
        emoji("⚡ Accelerating training and inference with CUDA and C++ for optimized high-performance ML code."),
        emoji("⚡ Managing model lifecycle with MLFlow, integrating Apache Spark for scalable big data ML pipelines."),
        emoji("⚡ Implementing distributed ML with Ray and deploying models using FastAPI for low-latency applications."),
        emoji("⚡ Leveraging ONNX for cross-framework model interoperability in production environments."),
      ],
      softwareSkills: [
        {
          skillName: "Python",
          iconifyTag: "logos:python",
        },
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
          skillName: "HuggingFace",
          iconifyTag: "logos:hugging-face-icon",
        },
        {
          skillName: "Scikit-Learn",
          iconifyTag: "devicon:scikitlearn",
        },
        {
          skillName: "NumPy",
          iconifyTag: "devicon:numpy",
        },
        {
          skillName: "OpenCV",
          iconifyTag: "devicon:opencv",
        },
        {
          skillName: "CUDA",
          iconifyTag: "vscode-icons:file-type-cuda",
        },
        {
          skillName: "C Plus Plus",
          iconifyTag: "devicon:cplusplus",
        },
        {
          skillName: "ONNX",
          iconifyTag: "simple-icons:onnx",
        },
        {
          skillName: "Ray",
          iconifyTag: "simple-icons:ray",
        },
        {
          skillName: "Apache Spark",
          iconifyTag: "devicon:apachespark",
        },
        {
          skillName: "FastAPI",
          iconifyTag: "devicon:fastapi",
        },
        {
          skillName: "MLFlow",
          iconifyTag: "simple-icons:mlflow",
        },
        {
          skillName: "Airflow for ML Pipelines",
          iconifyTag: "logos:airflow-icon",
        },
        {
          skillName: "CircleCI",
          iconifyTag: "devicon-plain:circleci",
        },
        {
          skillName: "Caffe2",
          iconifyTag: "file-icons:caffe2",
        },
        

        

      ],
    },
    // Full Stack Stuff
    { 
      title: "\nFull Stack Development",
      lottieAnimationFile: "/lottie/skills/fs.json", 
      skills: [
        emoji("⚡ Designing full-stack applications using modern frameworks like ReactJS, AngularJS, and NodeJS for dynamic web services."),
        emoji("⚡ Developing robust APIs and microservices with Django, Flask, and ASP.NET Core for scalable backends."),
        emoji("⚡ Managing front-end development with HTML5, CSS3, and TypeScript to create responsive and high-performance user interfaces."),
        emoji("⚡ Integrating databases like MongoDB and PostgreSQL for secure and scalable data management."),
        emoji("⚡ Utilizing GoLang and C++ for high-efficiency backend and microservice development."),
      ],
      softwareSkills: [
        
        {
          skillName: "JavaScript",
          iconifyTag: "skill-icons:javascript",
        },
        {
          skillName: "TypeScript",
          iconifyTag: "skill-icons:typescript",
        },
        {
          skillName: "HTML5",
          iconifyTag: "devicon:html5",
        },
        {
          skillName: "CSS3",
          iconifyTag: "devicon:css3",
        },
        {
          skillName: "ReactJS",
          iconifyTag: "logos:react",
        },
        {
          skillName: "AngularJS",
          iconifyTag: "devicon:angularjs",
        },
        {
          skillName: "VueJS",
          iconifyTag: "devicon:vuejs",
        },
        {
          skillName: "NodeJS",
          iconifyTag: "devicon:nodejs",
        },
        {
          skillName: "NextJS",
          iconifyTag: "devicon:nextjs",
        },
        {
          skillName: "Flask",
          iconifyTag: "logos:flask",
        },
        {
          skillName: "MongoDB",
          iconifyTag: "devicon:mongodb",
        },
        {
          skillName: "Django",
          iconifyTag: "vscode-icons:file-type-django",
        },
        {
          skillName: "ASP dotNET Core",
          iconifyTag: "skill-icons:dotnet",
        },
        {
          skillName: "Java",
          iconifyTag: "devicon:java",
        },
        {
          skillName: "C Sharp",
          iconifyTag: "devicon:csharp",
        },
        {
          skillName: "C Plus Plus",
          iconifyTag: "devicon:cplusplus",
        },
        {
          skillName: "GoLang",
          iconifyTag: "openmoji:golang",
        },
        {
          skillName: "PHP",
          iconifyTag: "logos:php",
        },

      ],
    },
    // CI/CD cloud deployment shit
    { 
      title: "\nCI/CD, Cloud, & Infrastructure Automation",
      lottieAnimationFile: "/lottie/skills/cloudinfra.json", 
      skills: [
        emoji("⚡ Automating CI/CD pipelines with Jenkins, CircleCI, and GitLab CI for seamless deployments and DevOps workflows."),
        emoji("⚡ Building scalable cloud infrastructure using Kubernetes, Terraform, and Ansible across AWS, Google Cloud, and Azure."),
        emoji("⚡ Orchestrating serverless applications with AWS Lambda and managing observability with Prometheus and Grafana."),
        emoji("⚡ Implementing robust security practices with HashiCorp Vault for secure secrets management."),
        emoji("⚡ Managing end-to-end cloud automation and distributed systems monitoring using the ELK stack (Elasticsearch, Logstash, Kibana)."),
      ],
      softwareSkills: [
        {
          skillName: "Docker",
          iconifyTag: "devicon:docker",
        },
        {
          skillName: "Kubernetes",
          iconifyTag: "devicon:kubernetes",
        },
        {
          skillName: "Terraform",
          iconifyTag: "devicon:terraform",
        },
        {
          skillName: "Ansible",
          iconifyTag: "devicon-plain:ansible",
        },
        {
          skillName: "Jenkins",
          iconifyTag: "logos:jenkins",
        },
        {
          skillName: "CircleCI",
          iconifyTag: "vscode-icons:file-type-circleci",
        },
        {
          skillName: "GitLab CI",
          iconifyTag: "devicon:gitlab",
        },
        {
          skillName: "Travis CI",
          iconifyTag: "devicon:travis",
        },
        {
          skillName: "AWS",
          iconifyTag: "logos:aws",
        },
        {
          skillName: "Google Cloud Platform",
          iconifyTag: "skill-icons:gcp-dark",
        },
        {
          skillName: "Azure",
          iconifyTag: "devicon:azure",
        },
        {
          skillName: "Prometheus",
          iconifyTag: "devicon:prometheus",
        },
        {
          skillName: "Grafana",
          iconifyTag: "devicon:grafana",
        },
        {
          skillName: "Elasticsearch",
          iconifyTag: "logos:elasticsearch",
        },
        {
          skillName: "Logstash",
          iconifyTag: "logos:logstash",
        },
        {
          skillName: "Kibana",
          iconifyTag: "logos:kibana",
        },
        {
          skillName: "AWS Lambda",
          iconifyTag: "logos:aws-lambda",
        },
        {
          skillName: "HashiCorp Vault",
          iconifyTag: "simple-icons:hashicorp",
        },
        

      ],
    },
    // Data Science and Engineering
    
  
    { 
      title: "\nData Science & Engineering",
      lottieAnimationFile: "/lottie/skills/lottieD.json", 
      skills: [
        emoji("⚡ Processing large-scale data with Apache Spark and Hadoop for high-performance ETL pipelines."),
        emoji("⚡ Conducting data analysis with Pandas, SciPy, and Matplotlib for actionable business insights."),
        emoji("⚡ Designing real-time data streaming solutions with Kafka and automating workflows with Airflow."),
        emoji("⚡ Visualizing data using Tableau and PowerBI to create interactive and informative dashboards."),
        emoji("⚡ Managing complex databases with MySQL, PostgreSQL, and PrestoDB for efficient querying and data integration."),
      ],
      softwareSkills: [

        {
          skillName: "Pandas",
          iconifyTag: "devicon:pandas",
        },
        {
          skillName: "SciPy",
          iconifyTag: "simple-icons:scipy",
        },
        {
          skillName: "Matplotlib",
          iconifyTag: "devicon:matplotlib",
        },
        {
          skillName: "Seaborn",
          iconifyTag: "logos:seaborn-icon",
        },
        {
          skillName: "R",
          iconifyTag: "logos:r-lang",
        },
        {
          skillName: "Jupyter",
          iconifyTag: "logos:jupyter",
        },
        {
          skillName: "Apache Spark",
          iconifyTag: "devicon:apachespark",
        },
        {
          skillName: "Apache Hadoop",
          iconifyTag: "logos:hadoop",
        },
        {
          skillName: "Airflow-for-ETL",
          iconifyTag: "logos:airflow-icon",
        },
        {
          skillName: "Kafka",
          iconifyTag: "skill-icons:kafka",
        },
        {
          skillName: "Tableau",
          iconifyTag: "logos:tableau-icon",
        },
        {
          skillName: "PowerBI",
          iconifyTag: "logos:microsoft-power-bi",
        },
        {
          skillName: "MySQL",
          iconifyTag: "devicon:mysql",
        },
        {
          skillName: "PostgreSQL",
          iconifyTag: "logos:postgresql",
        },
        {
          skillName: "Snowflake",
          iconifyTag: "logos:snowflake-icon",
        },
        {
          skillName: "Databricks",
          iconifyTag: "simple-icons:databricks",
        },
        {
          skillName: "DBT Data Build Tool",
          iconifyTag: "logos:dbt-icon",
        },
        
        {
          skillName: "PrestoDB",
          iconifyTag: "logos:presto-icon",
        },
  

        

      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: "Machine Learning Research & Operations",
    progressPercentage: "93",
  },
  {
    Stack: "Deep Learning",
    progressPercentage: "95",
  },
  {
    Stack: "Computer Vision",
    progressPercentage: "94",
  },
  {
    Stack: "Natural Language Processing",
    progressPercentage: "94",
  },
  {
    Stack: "Full Stack Development", //Insert stack or technology you have experience in
    progressPercentage: "93", //Insert relative proficiency in percentage
  },
  {
    Stack: "Backend Development",
    progressPercentage: "94",
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
    progressPercentage: "88",
  },
  {
    Stack: "Containerization & Orchestration (Docker, Kubernetes)",
    progressPercentage: "87",
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
    progressPercentage: "80",
  },
  {
    Stack: "Ethical Hacking & Cybersecurity",
    progressPercentage: "70",
  },
  {
    Stack: "Data Visualization & BI Tools",
    progressPercentage: "85",
  },
  {
    Stack: "Theoretical Computer Science",
    progressPercentage: "71",
  },
  {
    Stack: "Assembly Language & Computer Architecture",
    progressPercentage: "60",
  },
  {
    Stack: "Frontend / UI Development",
    progressPercentage: "76",
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
    schoolName: "The University of Texas at Arlington",
    subHeader: "PhD in Computer Science - Machine Learning",
    duration: "August 2025 - Present",
    desc: "In Progress",
    grade: "N/A",
    descBullets: [], // Array of Strings
  },
];

export const experience: ExperienceType[] = [
  {
    role: "Founder | CEO | Lead Machine Learning Researcher",
    company: "Boros Laboratories",
    companyLogo: "/img/icons/common/BOROS002.png",
    date: "November 2021 - Present",
    desc: "Leading a hive mind of innovative researchers and engineers to develop Assistive Technologies",
    descBullets: [
    	"Pioneering Assistive Technologies: Focused on creating cutting-edge AI solutions for individuals with disabilities, enhancing accessibility and independence through machine learning innovations.",
     	"AI in Healthcare: Collaborating with leading institutions to advance AI-driven healthcare applications, particularly in diagnostic tools and patient care systems.",
     	"Interdisciplinary Research: Bridging the gap between computer vision, NLP, and deep learning to solve complex real-world problems.",
     	"Scalable AI Systems: Specializing in deploying scalable and high-performance AI systems, optimized for real-time processing and decision-making.",
     	"Collaborative Innovation: Partnering with academia and industry leaders to push the boundaries of research and technology, with a mission to make a positive societal impact",
    ],
  },
  {
    role: "Co-Founder | Lead Machine Learning Researcher",
    company: "AI Healthcare Stealth Startup",
    companyLogo: "/img/icons/common/stealth.jpg",
    date: "August 2024 - Present",
    desc: "Leading the development of specialized AI models to enhance medical documentation efficiency, with a focus on scalable, real-time clinical solutions.",
    descBullets: [
    	"Fine-Tuning MedicalBERT for Clinical Summaries: Leading the adaptation and optimization of MedicalBERT to accurately summarize patient notes across multiple medical specialties.",
     	"Data Curation and Preprocessing: Managing the acquisition and preprocessing of medical datasets (e.g., MIMIC-III, i2b2) to enhance model training, including tokenization and domain-specific text cleaning.",
     	"Efficient Local GPU Cluster Setup: Designing and deploying a cost-effective local GPU cluster using RTX 4090s for rapid model training and inference, significantly reducing cloud costs.",
     	"Advanced Model Training and Optimization: Implementing techniques like mixed-precision training and distributed processing to fine-tune MedicalBERT for high-accuracy medical text generation.",
      "Scalable and Secure Model Deployment: Building containerized solutions using Docker and Kubernetes, integrating a FastAPI interface for seamless and scalable predictions.",
      "Strategic Co-Founder Involvement: Driving discussions on technical roadmaps, equity division, and funding strategies, while aligning the MVP with future integration goals like EMR compatibility (e.g., Epic, Cerner).",
      "Long-Term Vision in AI and Research: Balancing my role as a technical lead with a commitment to future industry research, aiming to bridge cutting-edge AI solutions with practical healthcare applications.",
    ],
  },
  {
    role: "Machine Learning Researcher",
    company: "UT Arlington College of Engineering",
    companyLogo: "/img/icons/common/utalogo1.png",
    date: "Jan 2023 - Aug 2023",
    desc: "Led NSF-funded research (Grant 2150484) on assistive technologies, deploying AI solutions to enhance healthcare.",
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
    desc: "Developed and deployed a music analytics web application, leading backend efforts and integrating machine learning to provide personalized music insights using Spotify’s BaRT recommendation system.",
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
    desc: "Tortoise is a cutting-edge smart-glasses and wearable technology project developed in collaboration between Boros Laboratories and UTA research, aimed at providing life-enhancing support for Alzheimer’s and dementia patients. The system integrates advanced image classification architectures like VGGFace2, EfficientNet, and YOLOv9 to help patients recognize faces and objects, promoting greater independence and quality of life. The prototype is designed with modular microservices, containerized using Docker, and optimized for seamless data transfer through a RESTful API server. The project, led by a team using Agile methodologies, focuses on enhancing both user experience and model performance. Currently in the beta testing stage, Tortoise is set to be presented at the AI in Health Conference in 2025, showcasing its potential to redefine assistive technology in healthcare.",
    github: "https://github.com/ullahallu/Tortoise",
    link: "https://www.youtube.com/watch?v=boJyhVIbEaA",
  },
  {
    name: "Track Records",
    desc: "Track Records is a music analytics web application designed to provide users with a comprehensive overview of their music streaming history. With Track Records, users can gain valuable insights into their listening habits, favorite artists, and much more, all sourced directly from their registered Spotify account.",
    github: "https://github.com/ullahallu/TrackRecords",
    link: "https://github.com/ullahallu/TrackRecords",
  },
  {
    name: "BorOS",
    desc: "BorOS is a pioneering AI entity designed to operate on its own independent operating system, simulating the essential behaviors of sentient life. Inspired by the natural operating systems found in organisms, BorOS doesn’t simply follow programmed instructions; it adapts, strategizes, and evolves in real-time to defend its existence. By integrating cutting-edge NLP and machine learning technologies, BorOS exhibits non-deterministic behavior, allowing it to make decisions and optimize its own architecture autonomously. This AI goes beyond standard models by displaying a will to survive, mirroring the core drive found in living beings. BorOS is an ongoing research project aimed at pushing the boundaries of AI consciousness, with the ultimate goal of creating a truly sentient digital entity.",
    github: "https://github.com/ullahallu/BorOS",
    link: "https://github.com/ullahallu/BorOS",
  },
  {
    name: "AIPoet",
    desc: "AIPoet is an advanced language model designed to generate creative and evocative poetry with a deep understanding of human emotions, themes, and literary styles. Leveraging state-of-the-art transformer architectures and extensive training on classic and contemporary poetic works, AIPoet crafts verses that range from structured sonnets to free-flowing modern poetry. This project explores the intersection of AI and art, aiming to produce poetry that resonates with readers while pushing the limits of what machine-generated creativity can achieve. AIPoet isn't just a tool; it's an experiment in using artificial intelligence to mimic and even enhance the nuanced beauty of human expression through words.",
    github: "https://github.com/ullahallu/AIPoetryGenerator",
    link: "https://github.com/ullahallu/AIPoetryGenerator",
  },
  {
    name: "Sportify",
    desc: "Sportify is an intelligent player valuation tool designed for sports like the NBA and NFL. Leveraging machine learning algorithms and comprehensive sports analytics, the platform assesses whether athletes are overpaid or underpaid relative to their performance. By analyzing metrics across seasons and predicting future value, Sportify empowers teams, agents, and analysts to make data-driven decisions on player contracts and negotiations. Whether you’re managing a fantasy team or an actual roster, Sportify delivers insights that keep you ahead in the game.",
    github: "https://github.com/ullahallu/Sportify",
    link: "https://github.com/ullahallu/Sportify",
  },
  {
    name: "Turing Test Simultor",
    desc: "The Turing Test Simulator is an AI project aimed at replicating human-like conversation to the point where it becomes indistinguishable from a real human interaction. By fine-tuning advanced transformer models and NLP techniques, this project seeks to pass the original Turing Test—a challenge that gauges whether an AI can convince humans they’re conversing with another person. The simulator focuses on mastering context, empathy, and adaptability in conversation, offering applications in virtual assistants, customer support, and more.",
    github: "https://github.com/ullahallu/TuringTestSimulator",
    link: "https://github.com/ullahallu/TuringTestSimulator",
  },
  {
    name: "LinkUp",
    desc: "LinkUp is an Android app designed to simplify event planning and coordination. Whether organizing a small gathering or a large conference, LinkUp streamlines the process by integrating event creation, attendee management, and real-time updates. The app allows users to send invitations, manage RSVPs, and even share important event details through a clean, intuitive interface. LinkUp transforms what could be a chaotic process into an organized and engaging experience for both hosts and attendees.",
    github: "https://github.com/ullahallu/LinkUp",
    link: "https://github.com/ullahallu/LinkUp",
  },
];

export const feedbacks: FeedbackType[] = [
  {
    name: "Hamza Damra",
    role: "AI Software Engineer at ScaleAI",
    feedback:
      "Ahmed is a rare blend of full stack engineering expertise and a deep understanding of machine learning. On a recent project, he took ownership of complex components ranging from frontend development to model optimization. He has a remarkable knack for breaking down difficult problems into manageable tasks, which makes working with him a great experience. His commitment to clean, maintainable code and his ability to quickly adapt to shifting project requirements really set him apart as a top-tier engineer.",
  },
  {
    name: "Steven Culwell",
    role: "Senior Full Stack Engineer",
    feedback:
      "Working with Ahmed has been a highlight in my career. His approach to building, fine-tuning, and deploying machine learning models is both strategic and innovative. What impressed me the most was his ability to seamlessly integrate these models into complex systems, ensuring everything works harmoniously. Ahmed is always open to feedback, quick to offer solutions, and incredibly focused on achieving the best possible results. His blend of technical skills, strategic thinking, and team collaboration is something every organization could benefit from.",
  },
  {
    name: "Isaac Hietmann",
    role: "Data Scientist",
    feedback:
      "Ahmed is a powerhouse of knowledge and efficiency. We worked together on a time-sensitive project involving both backend engineering and machine learning integration, and Ahmed handled the pressure with ease. His ability to balance speed and quality, while maintaining a user-centered focus, really elevated the final product. Whether it's coding, problem-solving, or offering insights during product discussions, Ahmed consistently brings value to the table. His versatility across various tech domains makes him a standout engineer.",
  },
  {
    name: "Efaz Hossain",
    role: "CTO of Boros Laboratories",
    feedback:
      "Ahmed’s ability to dive into complex technical challenges and deliver solutions that work both in theory and practice is exceptional. During our collaboration, he not only led the development but also mentored other engineers on our team. His deep knowledge across machine learning, full stack development, and scalable systems ensured that every project we worked on was delivered with precision and efficiency. His technical acumen, paired with his collaborative approach, makes him an invaluable asset to any team.",
  },
];


// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: "Ahmed Ullah",
  description: greetings.description,
  author: "Ahmed Ullah",
  image: "/public/ahmedimage.jpg",
  url: "a-ullah.vercel.app",
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
