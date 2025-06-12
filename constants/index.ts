export type ProjectProps = {
  id: string;
  title: string;
  type: string;
  desc: string;
  figLink: string;
  gitLink: string;
  imgSrc: string;
  mockup: {
    full: string;
    desktop: string;
    tablet: string;
    mobile: string;
  };
  techStack: string[];
  features: string[];
};

type CarouselImagesProps = {
  url: string;
  title: string;
  id: number;
};

export const projects: ProjectProps[] = [
  {
    id: "01",
    title: "Sarvarath",
    type: "Mobile App",
    desc: "A start-up which aims to facilitate the commute via public transport.",
    figLink: "/sarvarath",
    gitLink:
      "https://www.figma.com/file/WcAHlQrAVUa1gj6cqq8i5T/Sarvarath?type=design&node-id=0%3A1&mode=design&t=4VshXUbpZK7frrHL-1",
    imgSrc: "/images/Sarvarath.png",
    mockup: {
      full: "/mockups/Meet-up-allScreens.png",
      desktop: "/mockups/Meet-up-laptop.png",
      tablet: "/mockups/Meet-up-tablet.png",
      mobile: "/mockups/Meet-up-mobile.png",
    },
    techStack: ["React Native", "TypeScript", "Google Maps SDK", "Figma"],
    features: [
      "A mobile app for the electric buses provided by the government.",
      "Displays the Live Location of a bus and information on individual bus routes.",
      "Search Buses functionality to search buses for specific destinations.",
    ],
  },
  {
    id: "02",
    title: "LessTexts",
    type: "Web App",
    desc: "An AI that converts lengthy articles into short summaries.",
    figLink: "/lesstexts",
    gitLink: "https://lesstexts.netlify.app",
    imgSrc: "/images/lessTextsDesktop.png",
    mockup: {
      full: "/mockups/lessTexts-allScreens.png",
      desktop: "/mockups/lessTexts-laptop.png",
      tablet: "/mockups/lessTexts-tablet.png",
      mobile: "/mockups/lessTexts-mobile.png",
    },
    techStack: ["NextJS", "JavaScript", "SCSS", "AI"],
    features: [
      "Convert your lengthy articles to short summaries to save time.",
      "Local Storage that keeps record of previous summaries.",
    ],
  },
  {
    id: "03",
    title: "Streo",
    type: "Web App",
    desc: "An online web platform to stream your favorite movies and tv shows.",
    figLink: "/streo",
    gitLink: "https://streo.vercel.app",
    imgSrc: "/images/streoDesktop.png",
    mockup: {
      full: "",
      desktop: "",
      tablet: "",
      mobile: "",
    },
    techStack: ["ReactJS", "NodeJS", "SCSS", "TMDB API", "Redux"],
    features: [
      "A user-friendly web application to stream videos.",
      "Search for any movie or TV shows.",
      "Choose from various genres, or sort by popularity based on day or week.",
    ],
  },
  {
    id: "04",
    title: "Meet-Up",
    type: "Web App",
    desc: "An online video calling application for all your meetings.",
    figLink: "/meet-up",
    gitLink: "https://pratyaksh-netflix-clone.netlify.app",
    imgSrc: "/images/meetUpDesktop.png",
    mockup: {
      full: "",
      desktop: "",
      tablet: "",
      mobile: "",
    },
    techStack: ["NextJS", "TypeScript", "Stream", "Clerk Auth", "TailwindCSS"],
    features: [
      "Host, attend and schedule meetings all over the world.",
      "Authorized access to ensure privacy of the user.",
      "Easy access to your upcoming meetings.",
      "Track record of all your previous meetings.",
      "Record meetings and access them any time you want.",
    ],
  },
];

export const carouselImages: CarouselImagesProps[] = [
  {
    url: "/images/pratyaksh_b&w.jpg",
    title: "Title 1",
    id: 1,
  },
  {
    url: "/images/4.jpeg",
    title: "Title 2",
    id: 2,
  },
  {
    url: "/images/6.png",
    title: "Title 3",
    id: 3,
  },
  {
    url: "/images/7.jpeg",
    title: "Title 4",
    id: 4,
  },
  {
    url: "/images/10.jpeg",
    title: "Title 5",
    id: 5,
  },
  {
    url: "/images/19.png",
    title: "Title 6",
    id: 6,
  },
  {
    url: "/images/20.jpeg",
    title: "Title 7",
    id: 7,
  },
];

export const navOptions = ["about", "projects", "skills", "gallery", "contact"];
