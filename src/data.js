import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
export const links = [
  {
    id: 1,
    url: '/',
    text: 'home',
  },
  {
    id: 2,
    url: '/chi_sono',
    text: 'Chi Sono',
  },
  {
    id: 3,
    url: '/contatto',
    text: 'Contatto',
  },
];

export const social = [
  {
    id: 1,
    url: 'https://github.com/oglili/',
    icon: <FaGithub />,
  },
  {
    id: 2,
    url: 'https://www.twitter.com',
    icon: <FaTwitter />,
  },
  {
    id: 3,
    url: 'https://www.linkedin.com/in/oghomwen-osazuwa-6b9a4433?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BbM8pjYqwQTaJ7jN5qS8wsA%3D%3D',
    icon: <FaLinkedin />,
  },
];

export const items = [
  {
    id: 1,
    title: 'aiuto ai bisognosi',
    category: 'html',
    img: '../og-html.jpg',
    url: 'https://oltreallagraziait.bss.design',
    desc: `Questo è un sito che aiuta i meno privilegiati nella società.`,
  },
  {
    id: 2,
    title: 'cercare un libro',
    category: 'javascript',
    img: '../og-library.jpg',
    url: 'https://og-library.netlify.app/',
    desc: `Og library è un'app di libreria per trovare qualsiasi libro online basandosi su API esterne.`,
  },
  {
    id: 3,
    title: 'new york times clone',
    category: 'react',
    img: '../og-nytimes.jpg',
    url: 'https://oglili.github.io/nytimes/',
    desc: `L'app web del New York Times è un quotidiano americano con sede a New York City. Questa applicazione è un'applicazione clone del New York Times.`,
  },
  {
    id: 4,
    title: 'restful api',
    category: 'node js',
    img: '../og-node-courses.jpg',
    url: 'https://course-cat-api.herokuapp.com/api/v1/courses',
    desc: `Reach17 è una piattaforma di formazione basata sugli obiettivi delle Nazioni Unite che dovrà catalogare i corsi che offrirà.`,
  },
  {
    id: 5,
    title: 'MERN project',
    category: 'react',
    img: '../og-mern.jpg',
    url: 'https://leach22-course-catalog.herokuapp.com/',
    desc: `Leach22 è una piattaforma di formazione basata sugli obiettivi delle Nazioni Unite. Questa app fornisce la creazione del catalogo dei corsi per la piattaforma. `,
  },
  {
    id: 6,
    title: 'html personal profile',
    category: 'html',
    img: '../og-html-personal.jpg',
    url: 'https://oglili.github.io/oghomwenosazuwa/',
    desc: `Questo è un progetto per rappresentare me e quello che faccio.`,
  },

  {
    id: 7,
    title: 'Bonny REST Api',
    category: 'Php',
    img: '../type-api.jpg',
    url: 'http://localhost:8080/api/type/read.php',
    desc: `Si tratta di una API JSON RESTful per implementare la dashboard di una startup chiamata Bonny nata per semplificare la vita dei cittadini italiani rendendo più accessibili e comprensibili i servizi e i bonus statali dei cittadini..`,
  },
];
