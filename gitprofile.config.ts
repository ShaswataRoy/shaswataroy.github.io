// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'shaswataroy', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: false, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['arifszn/gitprofile', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Spatial Transcriptomics',
          description:
            'Developed an analysis pipeline to study smFISH (spatial transcriptomics) data and developed stochastic models to understand RNA counts in the HELA cells',
          imageUrl:
            'https://ibb.co/3037Xmx',
          link: 'https://example.com',
        },
        {
          title: 'Project Name',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Ariful Alam',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'https://www.linkedin.com/in/shaswata-roy/',
    researchGate: '',
    medium: 'https://medium.com/@ssrohan9',
    phone: '7657758965',
    email: 'roy134@purdue.edu',
  },
  // resume: {
  //   fileUrl:
  //     'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
  // },
  skills: [
    'Python',
    'R',
    'Mathematica',
    'Deep Learning',
    'Computer Vision',
    'HPC/ SLURM',
    'Docker',
    'Generative AI',
    'Git',
    'Multi Omics',
    'Drug Discovery',
    'Computational Biology',
  ],
  // experiences: [
  //   {
  //     company: 'Company Name',
  //     position: 'Position',
  //     from: 'September 2021',
  //     to: 'Present',
  //     companyLink: 'https://example.com',
  //   },
  //   {
  //     company: 'Company Name',
  //     position: 'Position',
  //     from: 'July 2019',
  //     to: 'August 2021',
  //     companyLink: 'https://example.com',
  //   },
  // ],
  certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com',
    },
  ],
  educations: [
    {
      institution: 'Purdue University',
      degree: 'Physics (Ph.D.)',
      from: '2019',
      to: '-',
    },
    {
      institution: 'IIT Madras',
      degree: 'Physics (BS+MS)',
      from: '2014',
      to: '2019',
    },
  ],
  publications: [
    {
      title: 'A hybrid quantum-classical fusion neural network to improve protein-ligand binding affinity predictions for drug discovery',
      conferenceName: '',
      journalName: 'ArXiv',
      authors: 'S. Banerjee and S. He Yuxun and S. Konakanchi and L. Ogunfowora and S. Roy and S. Selvaras and L. Domingo and M. Chehimi and M. Djukic and C. Johnson',
      link: 'https://arxiv.org/abs/2309.03919',
      description:
        'We introduce a novel hybrid quantum-classical deep learning model tailored for binding affinity prediction in drug discovery. Through this mode we were able to demonstrate a 6% improvement in prediction accuracy relative to existing classical models, as well as a significantly more stable convergence performance compared to previous classical approaches.',
    },
    {
      title: 'Non-Markovian memory and emergent simplicities in the stochastic and plastic adaptation of individual cells to dynamic environments',
      conferenceName: '',
      journalName: 'biorxiv',
      authors: 'Kunaal Joshi, Karl F Ziegler, Shaswata Roy, Charles S Wright, Rhea Gandhi, Jack Stonecipher, Rudro R Biswas, Srividya Iyer-Biswas',
      link: 'https://www.biorxiv.org/content/10.1101/2023.05.27.542601v1',
      description:
        'We observe statistically identical, noninteracting individual bacterial cells growing and dividing with intrinsic stochasticity in precisely controlled conditions, and directly characterize the memories retained of the environment(s) experienced over tens of generations. ',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'arifszn', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
