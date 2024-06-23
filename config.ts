export interface IProjects {
  id: number;
  name: string;
  url: string;
  tech: string[];
  description: string;
  thumb: string;
  repoUrl?: string | undefined;
  achievements?: string[];
  details?: string;
  key_features?: string[];
  supporting_images?: string[];
}

export const AppConfig = {
  FULL_NAME: "Sonu Gupta",
  RESUME_URL:
    "https://drive.google.com/file/d/1GgcW5eXUNfsSVqbSA9MSP9OYhpj3B9vm/view?usp=sharing",
  POSITION: "Full Stack Developer",
  INTRO_SECTION: `I'm a Creative / Full Stack Developer from India. Over the years I developed a skill set in a range of technologies like Javascript and frameworks, including React, Angular and Tailwind. Where I really value clean and readable code. Also I'm very passionate about UX / UI. And last but not least,  I enjoy writing about tricks on saving money while Online shopping and I'm a little bit of a geek now and then.`,
  LOCATION: "Gangapur City, INDIA",
  EMAIL: "sonugpc@gmail.com",
  PHONE: "+91 8503022627",
  SOCIAL_CHANNELS: {
    LINKEDIN: "",
    website: "",
  },
};

export const Translations = {
  DOWNLOAD_CV: "Download CV",
};

export const AppProjects: IProjects[] = [
  {
    id: 1,
    name: "Bigtricks Website",
    url: "https://wwww.bigtricks.in/",
    tech: ["Angular", "Wordpress", "HTML", "CSS", "Javascript"],
    description:
      "BigTricks.in (August 2015) is a platform for sharing the latest offers and coupons, helping users save money on online shopping and bill payments. Built with HTML, CSS, JavaScript, PHP, and MySQL, it features a robust backend for user-specific cashback. During IPL 2018, it handled 8,000 real-time users.",
    thumb: "/assets/img/projects/bigtricks-screenshot.png",
    repoUrl: "#",
    details: `Launched in August 2015, BigTricks.in is a comprehensive platform designed to help users save money on online shopping and bill payments by providing the latest offers and coupons. Initially conceived to share deals, it has evolved into a sophisticated system with a robust backend that facilitates user-specific cashback.`,
    achievements: [
      "Successfully served millions of users since its inception.",
      "Managed high volumes of traffic without compromising on performance, showcasing its robust infrastructure.",
      "Built a dependable backend system to handle user-specific cashback, ensuring a seamless user experience.",
    ],
    key_features: [
      "Real-time Offers and Coupons: Continuously updated to provide users with the latest deals available on the market.",
      "User-specific Cashback System: A complex backend mechanism to allocate and manage cashback for each user, enhancing user engagement and retention.",
      "Scalability: Demonstrated the ability to handle significant traffic, particularly during high-demand events such as the IPL 2018, where it managed 8,000 real-time users simultaneously.",
      "High User Engagement: Efficiently designed to support and retain a large user base with reliable and quick service.",
    ],
    supporting_images: [
      "/assets/img/projects/bigtricks-screenshot.png",
      "/assets/img/projects/bt_redeem.png",
      "/assets/img/projects/bt_blog.png",
      "/assets/img/projects/bt-deals.png",
    ],
  },
  {
    id: 2,
    name: "Bigtricks App",
    url: "https://www.apkmonk.com/app/in.bigtricks/",
    tech: [
      "Angular",
      "Wordpress",
      "HTML",
      "CSS",
      "Javascript",
      "Ionic",
      "Android",
      "Java",
      "Traffic Management",
    ],
    description:
      "After Success of the Bigtricks.in Website. I created a full flagged app for Android. It had many features including Cashback, Instant Notifications, Offers, Earning etc. The App got 10K+ Downloads on Playstore. Currently it's removed from Playstore due to some policy reasons.",
    details: `Bigtricks is a comprehensive app designed to help users save money through a variety of online tricks and deals. The app aggregates cashback offers, shopping coupons, legal online earning tricks, and exclusive "Refer and Earn" deals, enabling users to save thousands of rupees each month.`,
    thumb: "/assets/img/projects/Bigtricks_apk/bt_app.jpg",
    repoUrl: "https://github.com/sonugpc/bigtricksclean/",
    achievements: [
      "Aggregates cashback offers, shopping coupons, and legal online earning tricks.",
      "Helps users save thousands of rupees each month with exclusive deals.",
      "Provides instant updates on the latest technology and gadget news.",
    ],
    key_features: [
      "Flat UI: Modern and user-friendly interface.",
      "Ease of Use: Designed for simple and intuitive navigation.",
      "Instant Notifications: Real-time push notifications ensure users never miss a deal.",
      "Compact Size: The app is lightweight, ensuring quick downloads and minimal storage use.",
      "No Login Required: Users can access all features without the need for login.",
      "Community Engagement: Users can comment and interact directly within the app.",
      "Rewards for Engagement: Reading news and participating in app activities can also yield additional rewards.",
    ],
    supporting_images: ["/assets/img/projects/Bigtricks_apk/bt_app.jpg"],
  },
  {
    id: 3,
    name: "Cashbig.in",
    url: "https://wwww.cashbig.in/",
    tech: [
      "Angular",
      "NodeJs",
      "HTML",
      "CSS",
      "Javascript",
      "pgSQL",
      "Firebase",
      "AWS",
      "CI/CD pipelines",
    ],
    achievements: [
      "Partnered with over 1,500 online retailers to provide cashback deals and discounts.",
      "Helped 5k+ users save and earn money through cashback on online purchases.",
      "Partnered with ZippyRevs to provide cashback to users for online surveys.",
    ],
    key_features: [
      "Extensive Retail Network: Offers cashback and deals from a wide range of online retailers.",
      "User-Friendly Design: Easy-to-use interface for seamless navigation.",
      "Instant Notifications: Real-time alerts for new cashback offers and discounts.",
      "Detailed Tracking: Comprehensive tracking of cashback earnings and payments.",
      "Secure Transactions: Ensures safe and secure transactions for all users.",
      "Community Support: Active user community for sharing tips and feedback.",
      "Instant Cashback Redemption: Easily redeem cashback on eligible purchases directly in mobile wallets",
    ],
    description:
      "CashBig.in is a comprehensive cashback platform modeled similar to Cashkaro.com, providing users with cashback and discounts from a vast network of online retailers. The app is designed to help users save money on their online purchases while also offering opportunities to earn through cashback.",
    thumb: "/assets/img/projects/cashbig/cashbig.png",
    supporting_images: [
      "/assets/img/projects/cashbig/cashbig.png",
      "/assets/img/projects/cashbig/cashbig2.png",
    ],
    details:
      "Cashbig.in is a full-flagged cashback system that provides cashback to users on their shopping. With cashbig I was able to distribute more than 10L cashback in a span of 1.5 years. ",
  },
  {
    id: 4,
    name: "BT Affex",
    url: "https://apkpure.com/bigtricks-affiliate-deeplink-generator/in.bigtricks.afftool/download",
    tech: [
      "React",
      "Ionic Framework",
      "NodeJs",
      "HTML",
      "CSS",
      "Javascript",
      "Java",
      "pgSQL",
      "Firebase",
      "AWS",
      "Websockets",
      "CI/CD pipelines",
    ],

    description:
      "Bigtricks Affiliate Links Generator Was a Part of a Project that helped 100s of Affiliaters to speed up the affiliate link generation process. The app is designed to help Youtube Channel Owners/ Telegram Channels and Instant Deals Platforms generate affiliate links. It was the one of it's kind project during 2018-2019 and only",
    thumb: "/assets/img/projects/btfx/1.jpg",
    details:
      "BT Affex ( Name could have been better ) is a Node JS based project, built for the end to end affiliate solution for faster deep link generation and auto social post. For affiliaters a common problem was when budget is exhausted or campaign gets paused. the links would become dead instantly. BT Affex handled these issues by maintaining a db with all the providers and switch links when it gets paused or over and many more other features.  ",
    supporting_images: [
      "/assets/img/projects/btfx/1.jpg",
      "/assets/img/projects/btfx/2.jpg",
    ],
    key_features: [
      "Complete end-to-end deeplink Solution For Affiliates",
      "Generate affiliate links by integrating multiple networks",
      "Generate up to 100 links in 1 go within 1.2 seconds",
      "Generate Instant Images and product descriptions for multiple affiliate stores",
      "Post on multiple channels in one click",
      "Clickless auto forward from various channels to multiple social channels",
    ],
    achievements: [
      "The project helped a  to generate a significant amount of revenue  by reducing the time spent on link creation. ",
      "Usually these shopping deals was valid for vey short time so getting the links is very time consuming. BT Affex handled these issues by maintaining a db with all the providers and switch links when it gets paused or over and many more other features.  ",
    ],
  },
];

export const EDUCATION = [
  {
    institution: "Jaipur Engineering College & Research Center",
    degree: "B.E/B.Tech, Computer Science",
    percentage: "73.0%",
    location: "Jaipur",
    years: "2015 - 2019",
  },
  {
    institution: "DS Science Academy ",
    degree: "Higher Secondary",
    percentage: "84.0%",
    location: "Gangapur City, IN",
    years: "2013 - 2014",
  },
];

export const EXPERIENCE = [
  {
    company: "ZIGRAM",
    logoUrl:
      "https://www.zigram.tech/wp-content/uploads/2024/02/contact-zigram-logo.png",
    title: "Senior Software Engineer",
    location: "Gurugram",
    years: "Jun 2021 – present",
    responsibilities: [
      "Leading the architecture and development of end-to-end solutions",
      "Optimized performance in data-heavy applications, achieving 30% faster radar deliveries by reducing UI slowness and enhancing task speed",
      "Implemented Large Language Models (LLMs) to automatically parse extensive Expert CVs, resulting in a 60% reduction in manual work",
    ],
    technologies: [
      "Angular",
      "React",
      "AWS",
      "NodeJS",
      "LLM",
      "PgSql",
      "DynamoDB",
      "CI/CD pipelines",
    ],
  },
  {
    company: "Celebal Technologies",
    logoUrl:
      "https://celebaltech.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-footer.3b4813bc.webp&w=3840&q=75",
    title: "Fullstack Developer",
    location: "Jaipur",
    years: "Oct 2020 – Jun 2021",
    responsibilities: [
      "Developed a comprehensive end-to-end solution for OCR of handwritten invoices, a significant milestone for numerous businesses",
      "Introduced an SDK plugin for image PDF analysis tailored for multiple PSUs and businesses, doubling their business",
      "Learned and adapted new technologies to meet project requirements, showing resourcefulness by finishing projects early, even when deadlines are tight",
    ],
    technologies: [
      "NodeJS",
      "React",
      "Angular",
      "Azure",
      "Firebase",
      "Python",
      "Java Spring Boot",
    ],
  },
  {
    company: "Accenture",
    title: "Associate Software Engineer",
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg",
    location: "Bengaluru",
    years: "Aug 2019 – Oct 2020",
    responsibilities: [
      "Built various modules for in-house projects",
      "Worked on securing checkout flow for an eCommerce project, implemented CSRF, XSS & cookie jacking prevention techniques",
      "Worked on handling ~100K users on a video streaming platform and reduced crash frequency by 70% during peak hours",
    ],
    technologies: [
      "Java Spring Boot",
      "Angular",
      "Jenkins",
      "Kafka",
      "OracleSQL",
    ],
  },
];

export const SKILLS = [
  // {
  //   name: "C Language",
  //   src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-plain.svg",
  // },
  {
    name: "TypeScript",
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
  },
  {
    name: "Express",
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg",
  },
  {
    name: "NodeJS",
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg",
  },
  {
    name: "postgressSQL",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  {
    name: "Kafka",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original-wordmark.svg",
  },
  {
    name: "Docker",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original-wordmark.svg",
  },
  {
    name: "GoLang",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg",
  },
  {
    name: "Java",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg",
  },
  {
    name: "AWS",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
  },
  {
    name: "Jira",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg",
  },
  {
    name: "Angular",
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/angularjs/angularjs-original.svg",
  },
  {
    name: "Postman",
    src: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
  },
  {
    name: "Dart",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg",
  },
  {
    name: "Ionic Framework",
    src: "https://www.vectorlogo.zone/logos/ionicframework/ionicframework-icon.svg",
  },
  {
    name: "React",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg",
  },
  {
    name: "HTML",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg",
  },
  {
    name: "Bootstrap",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg",
  },
  {
    name: "Redux",
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg",
  },
  {
    name: "Sass",
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg",
  },
  {
    name: "Javascript",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "Tailwind CSS",
    src: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
  },
  {
    name: "React",
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
  },
  {
    name: "MySQL",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  {
    name: "MongoDB",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain.svg",
  },
  {
    name: "Heroku",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-plain.svg",
  },
  {
    name: "Git",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg",
  },
  {
    name: "Firebase",
    src: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",
  },
];
