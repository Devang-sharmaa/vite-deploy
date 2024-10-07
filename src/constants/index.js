import { BharatIntern , Codesoft } from "../assets/images";
import {
    book,
    edu,
    weather,
    music,
    ecommerce,
    contact,
    css,
    express,
    git,
    github,
    html,
    javascript,
    typescript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    react,
    redux,
    sass,
    shadcn,
    prisma,
    tailwindcss,
    blog,
} from "../assets/icons";

export const skills = [
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind",
        type: "Frontend",
    },
    {
        imageUrl: shadcn,
        name: "Shadcn UI",
        type: "Frontend",
    },
    {
        imageUrl: prisma,
        name: "Prisma",
        type: "Database",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    
];

export const experiences = [
    {
        title: "Frontend Developer",
        company_name: "Codemevel",
        icon: "https://media.licdn.com/dms/image/D4D0BAQGf6bxzgLmXBw/company-logo_200_200/0/1699875399920?e=1724889600&v=beta&t=1eSXV_CEV6Kn_wf8fV4d2rMgQR4LzNptDklC4Z8GIR4",
        iconBg: "#f5f8ff",
        date: "May 2024 - Present",
        points: [
            "Developing and maintaining server-rendered applications using Next.js and React.",
            "Integrating Prisma for efficient and type-safe database operations with PostgreSQL.",
            "Implementing data validation and type safety using Zod schemas.",
            "Utilizing Shadcn for building custom and reusable UI components.",
            "Creating responsive and dynamic web pages that load quickly and perform well."
        ],
    },
    {
        title: "Full stack Developer",
        company_name: "Spark Foundation",
        icon: Codesoft,
        iconBg: "#b7e4c7",
        date: "Nov 2023 - Jan 2023",
        points: [
            "Developing reusable and efficient responsive components using React.js and tailwind",
            "Designing and implementing MongoDB schemas to support application requirements.",
            "Managing application state using Redux or Context API.",
            "Optimizing front-end performance to ensure fast load times and smooth user experiences."
        ],
    },
    {
        title: "Full stack Developer",
        company_name: "Bharat Intern",
        icon: BharatIntern,
        iconBg: "#a2d2ff",
        date: "Sep 2023 - Oct 2023",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Mansisaraswat03',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/mansi-saraswat-050014264/',
    }
];

export const projects = [
    {
        iconUrl: ecommerce,
        theme: 'btn-back-red',
        name: 'My-Store',
        description: 'Developed an ecommerce website for shopping using react and redux .',
        link: 'https://github.com/Mansisaraswat03/react-js-e-commerce-website',
    },
    {
        iconUrl: "data:image/png;base64,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",
        theme: 'btn-back-pink',
        name: 'OYO- Hotels',
        description: 'Developed a website for booking hotels and booking online.',
        link: 'https://github.com/Mansisaraswat03/oyo-clone',
    },
    {
        iconUrl: blog,
        theme: 'btn-back-black',
        name: 'Solvo Mate',
        description: 'Developed a blog website for sharing thoughts and opinions and solving tech related problems or errors.',
        link: 'https://github.com/Mansisaraswat03/SolvoMate',
    },
    {
        iconUrl: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALkAAACUCAMAAAD4QXiGAAAAaVBMVEX///8AAACbm5tZWVn7+/vPz89VVVXo6Oj29vbGxsba2trr6+sVFRWpqanU1NSLi4seHh4mJiaCgoI+Pj6ioqK1tbVOTk69vb18fHxmZmZGRkZra2syMjJhYWErKyuvr68LCwuTk5Nzc3NRYfrRAAAFdklEQVR4nO2Z2ZaiMBCGZQn7HiCIoOL7P+QAVZGI2No9scc5p76L5rRC5TepLWG3IwiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIIgtPDdgrjZrLgtcT5u1L2GFlRlOoMla4BiZVTBN1r7EbY2JiyZzl9laq28NH1POQxl1qMVaWIO5Uou1rzFhKJ5osZZwMDdosfYQlwnfrqJ5qFw8udm2vRH7yV0in61Fle0LjWG/HsWJjChmR5il+NFtXsCq2EyLohkpUjOu/OCha8VnmAcWj7adZ7PxQ9xZMme4vubGHSwuDr3Duwz0IFnHnf5QxL57vwLS9/zZ6vE9s+7DIAxyi1GoMrykvORRdCP4jnMU5ZcyUZO3XcBXLYOrr1/26LDSuAXXA3qA57LSWmnMjryuHcuynLrlx2z1rVUyWXvCA37kS+W23qrkl+kQuOjfKVzrqRZ57NRwRTHvL83s2YkbTgHqhW7iz15/sbjyC3hTsUligEmxiOEaBEMaa5x4MaUTJ+Q3g+TJzh8O3aKmFP5YyMPtORt/QsB8ES+3d4fB3wUY7iV4Tec6499IW6Da4NkCVrZGrznvnaPqA81Lthr1kaOzj9BLYO73Yr60z3Lpq4QwsQPkgSxQB4+6Xszuk7/mn96cv1PRd5FqxgVPMk2cek3KPXCT5oSjXDPI2CpVIWa204vGZiNjRvWqqXG7KofLCZaEa4tSB5ayAvMJpsU8FTA3k/L+1TYm7A1ZC0KRQgUdWwm4Vvv54ugSjs5piUydmKXnMl/oBRaqbKliIU4CLmdUQXp9LWReAQK/rmAcmVzO0htH5dbrnWPoLMql48UwAq8gUAtdwrGv7eL9zdIacnMxKb/3TDtI64LdZwmvX5TLYEcH3MeYZDc6ix9xgjQQYdI9YzhdS7U5dTN3T8XTU9F9Xzb1PVKZL+cARmhKHOnVcH8GwzgysXoGmBPkbmCK0DuFDEXc/aRYmVNcTZloU+y/cl2bO6+9NcywZMsN3fRxsXYLvMdoV5/bqaIctnLX4mYO+Iy+3gXSYmPCZKPXGFxR3q+Kh/SoMVWvvugV5djyYMxnJWStWpvu3Q7cpD/BSKnsPhTl3WpztzQoKz8KuKIcbynBfnfqwb5G5VCDuMAUIHBEb1G+8md3aSD5bcJk2aLcw1sEJK0W066u+JyACKoD8BpHpoRkUW7cKk/yq/L8djVml0blMr36aBd7Xj17cyCcu8IC/b32UVelKL8dLln6qfPtb1KVYzuRY6foQMk76jkPQQKLW7Espr0r9wOK8rEaqbEorsrVvsDFzRMql1s5t5fm4p5buk7PJHPWmzN5x0LwSxlKWKmMvZrMrsqVdOnhc7LSDPhcOJ+6ZMF1nDfgD8Mpue57cXZkOHaqX2DVukkUDIs7x9XBAjTWgiQe0jfsnlXseU7mAOSV/BAbd+NSLQ4jo3jR41YX2WDJj6rpN0MI2++a7BWhSNTjK5kDz1kjw2utPGyuhzB8edD2EqE1IL+LssHrUCoeRxgH+NdXttq6Q/CvKBdd0exE7Pr/7PyVcmKhq4XVg50q0kXIzOVY4GiyUCiHX+kvvaB4FdtctOWt4hqTA7VLRTXMX4rEb8DWh3BbZL/yWuW7eEX0RHdUfJinSNz1wega5zfeBv0EWVofcrdx+hj8/Evh+Zvr+99gfqn8sxL5iuF/FT42X/yBbv7wjdinUD5Q/huvav+O6oHy6vmj/xix/X7u/KZXnRoJ2k3l7Ue1tpt4l03llw+t+yrxlrucPz6zjNjOhnLnY+u+ir+h/IPrvkpzJ1zfi5/3Eq673W+8RfrHDCvlOo+V34od15ZKXf4X8UkQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBPGUP1tgOvNqRW7hAAAAAElFTkSuQmCC",
        theme: 'btn-back-red',
        name: 'Eva-Gym',
        description: 'Developed  a website that provides gym membership to people in Noida.',
        link: 'https://github.com/Mansisaraswat03/eva_gym',
    },
    {
        iconUrl: edu,
        theme: 'btn-back-green',
        name: 'Gram-Shiksha-Kendra',
        description: 'Developed a website that provides free education to children of rural areas.',
        link: 'https://github.com/Mansisaraswat03/Gram-Shiksha-Kendra',
    },
    {
        iconUrl: book,
        theme: 'btn-back-yellow',
        name: 'Bookify',
        description: 'Developed an website where you can buy and sell your best seller books all around online.',
        link: 'https://github.com/Mansisaraswat03/Bookify',
    },
    {
        iconUrl: weather,
        theme: 'btn-back-blue',
        name: 'Weather Website',
        description: 'Developed a website that depicts weather of various cities all around the globe.',
        link: 'https://github.com/Mansisaraswat03/weatherWebsite',
    },
    {
        iconUrl: music,
        theme: 'btn-back-black',
        name: 'Music player',
        description: 'Developed a music player website for listening songs.',
        link: 'https://github.com/Mansisaraswat03/Musico_player',
    },
   
];