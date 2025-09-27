import { Skill } from "./skills";

export const experiences = [
  {
    title: "Full Stack Developer",
    company: { name: "Ecozen", websiteUrl: "https://www.ecozensolutions.com/" },
    period: "Jun 2023 - Present",
    description: [
      "Led the migration from a monolithic architecture to a scalable microservices-based architecture, improving system performance, modularity, and fault tolerance for production applications.",
      "Built secure, role-based access control with Keycloak, supporting both email and Google OAuth sign-ins, resulting in a 35% reduction in authentication latency.",
      "Designed and deployed a robust OTP-based authentication system, replacing a legacy provider and reducing authentication costs while ensuring high delivery success rates.",
      "Developed and integrated a flexible notification service for critical alerts via SMS and WhatsApp with fallback logic, improving message delivery rates during network failures.",
      "Created performant RESTful APIs using Node.js and Express, leveraging Redis caching to boost throughput and reduce response times for inter-service communication.",
      "Developed real-time device monitoring dashboards with Highcharts and world-map visualizations, backed by optimized MongoDB and SQL schemas—boosting report generation speed by 50%.",
      "Engineered a full-featured MQTT command execution platform, allowing remote device operations with proper user command logging, ensuring traceability, security, and accountability.",
      "Managed deployment and infrastructure of Java, Node.js, and Next.js applications on AWS EC2, configuring Nginx for reverse proxy/load balancing and setting up Route 53 subdomains for multiple applications.",
      "Implemented automated data archiving of production records older than 6 months to Amazon S3, optimizing storage costs and improving system performance.",
      "Migrated databases from MongoDB to ClickHouse, redesigning API queries and ensuring backward compatibility while significantly improving analytical query performance.",
      "Maintained proper documentation for all projects and APIs to ensure smooth collaboration, knowledge sharing, and efficient onboarding of new team members.",
    ],
    skills: [
      {
        name: "NodeJs",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
      },
      {
        name: "Express",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg",
      },
      {
        name: "MongoDB",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg",
      },
      {
        name: "ClickHouse",
        icon: "https://avatars.githubusercontent.com/u/54801242?s=200&v=4",
      },
      {
        name: "Java",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
      },
      {
        name: "AWS",
        icon: "https://cdn.worldvectorlogo.com/logos/amazon-web-services-2.svg",
      },
      {
        name: "Nginx",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nginx/nginx-original.svg",
      },
      {
        name: "Next.js",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg",
      },
      {
        name: "React",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
      },
      {
        name: "Svelte",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/svelte/svelte-original.svg",
      },
      {
        name: "Tailwind",
        icon: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
      },
      {
        name: "Redis",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/redis/redis-original.svg",
      },
      {
        name: "Highcharts",
        icon: "https://www.highcharts.com/docs/media/com_demo_assets/Highcharts.svg",
      },
      {
        name: "Keycloak",
        icon: "https://www.keycloak.org/resources/images/logo.svg",
      },
      {
        name: "WebSockets",
        icon: "https://raw.gthubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
      },
      {
        name: "JavaScript",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
      },
    ],
  },

  {
    title: "Full Stack Developer Intern",
    company: { name: "Credge", websiteUrl: "https://credge.education/" },
    period: "Feb 2023 – April 2023",
    description: [
      "Worked on a student-oriented platform to help users prepare for studying abroad — providing access to educational resources, mentorship, and application guidance.",
      "Designed and built REST APIs (Node.js / Express) to manage user profiles, educational content, progress tracking, and platform interactions.",
      "Created dynamic dashboards for students and admin users to monitor usage, performance, and application status with real-time metrics.",
      "Implemented role-based access and views (student, mentor, admin), ensuring each user sees the right UI and data based on permissions.",
      "Collaborated on integrating frontend and backend components, optimizing UI responsiveness, data flow, and error handling across devices.",
    ],
    skills: [
      {
        name: "NodeJs",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
      },
      {
        name: "Express",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg",
      },
      {
        name: "React",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
      },
      {
        name: "MongoDB",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg",
      },
      {
        name: "JavaScript",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
      },
      {
        name: "Tailwind",
        icon: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
      },
    ],
  },

  {
    title: "Summer Intern",
    company: {
      name: "National Institute of Technology, Silchar",
      websiteUrl: "https://www.nits.ac.in/",
    },
    period: "May 2022 - Jul 2022",
    description: [
      "Designed and implemented an intelligent Driver Drowsiness Detection System to improve road safety by alerting drivers showing signs of fatigue.",
      "Leveraged OpenCV and Python along with Dlib to detect 64 facial landmarks, enabling real-time monitoring of eye movement and facial expressions.",
      "Integrated a responsive alarm system that activates when drowsiness is detected, providing timely alerts to prevent accidents.",
      "Focused on optimizing facial landmark detection and alert latency to ensure high reliability and performance in real-time conditions.",
    ],
    skills: [
      {
        name: "Python",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
      },
      {
        name: "OpenCV",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/opencv/opencv-original.svg",
      },
      {
        name: "Dlib",
        icon: "https://upload.wikimedia.org/wikipedia/commons/1/10/Python-logo-notext.svg",
      },
      {
        name: "Machine Learning",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tensorflow/tensorflow-original.svg",
      },
      {
        name: "Computer Vision",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/opencv/opencv-original.svg",
      },
    ],
  },
];
