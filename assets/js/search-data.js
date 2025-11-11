// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather.html";
            },},{id: "news-together-with-cynthia-rudin-margo-seltzer-and-chudi-zhong-i-was-awarded-the-2023-bell-labs-prize-2nd-place-which-recognizes-game-changing-innovations-in-science-technology-engineering-and-mathematics",
          title: 'Together with Cynthia Rudin, Margo Seltzer, and Chudi Zhong, I was awarded the...',
          description: "",
          section: "News",},{id: "news-i-was-awarded-the-runner-up-award-2nd-place-for-the-informs-data-mining-and-data-analysis-dmda-workshop-best-theoretical-paper-for-my-paper-fastsurvival",
          title: 'I was awarded the runner-up award (2nd place) for the INFORMS Data Mining...',
          description: "",
          section: "News",},{id: "news-i-was-awarded-the-runner-up-award-2nd-place-for-the-informs-computing-society-ics-student-paper-award-for-my-paper-okridge",
          title: 'I was awarded the runner-up award (2nd place) for the INFORMS Computing Society...',
          description: "",
          section: "News",},{id: "news-i-was-awarded-the-outstanding-dissertation-award-from-the-duke-ece-department-my-dissertation-can-be-found-here",
          title: 'I was awarded the Outstanding Dissertation Award from the Duke ECE department. My...',
          description: "",
          section: "News",},{id: "news-hadis-anahideh-adam-meyers-hairong-wang-and-i-are-organizing-the-the-20th-informs-workshop-on-data-mining-and-decision-analytics-which-will-be-held-on-october-25-2025-in-atlanta-georgia-usa-one-day-before-the-informs-annual-meeting-2025",
          title: 'Hadis Anahideh, Adam Meyers, Hairong Wang, and I are organizing the The 20th...',
          description: "",
          section: "News",},{id: "news-the-work-scalable-optimal-k-sparse-glms-has-won-the-2025-informs-quality-statistics-and-reliability-qsr-best-refereed-paper-competition",
          title: 'The work Scalable Optimal k-Sparse GLMs has won the 2025 INFORMS Quality Statistics...',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project.html";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project.html";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project.html";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project.html";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project.html";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project.html";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project.html";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project.html";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project.html";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6A%69%61%63%68%61%6E%67.%6C%69%75@%63%6F%72%6E%65%6C%6C.%65%64%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/jiachangliu", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/jiachang-liu-891308a9", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=W_Zyr0AAAAAJ&hl", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/JiachangLiu_8", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
