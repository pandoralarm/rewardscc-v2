module.exports = {
    title: "RewardsCC",
    tagline: "The most complete and current API for searching and discovering detailed information about credit cards.",
    url: "https://rewardscc.com",
    baseUrl: "/",
    favicon: "img/favicon.png",
    organizationName: "rewardscc",
    projectName: "rewardscc-docs",
    staticDirectories: ["static"],
    scripts: [
        {
            src: "https://buttons.github.io/buttons.js",
            async: true,
            defer: true,
        },
    ],
    themeConfig: {
        navbar: {
            logo: {
                alt: "Rewards Credit Card API Logo",
                src: "img/assets/rewardscc-icon.svg",
            },
            items: [
                {
                    to: "/docs/",
                    activeBasePath: "/docs/",
                    label: "About",
                    position: "right",
                },
                {
                    to: "/docs/category/api-reference",
                    activeBasePath: "/docs/category/api-reference",
                    label: "API Reference",
                    position: "right",
                },
                {
                    to: "/docs/faq",
                    activeBasePath: "/docs/faq",
                    label: "FAQ",
                    position: "right",
                },
                {
                    to: "/docs/approved-use-of-data",
                    activeBasePath: "/docs/approved-use-of-data",
                    label: "Terms of Use",
                    position: "right",
                },
                {
                    to: "https://rapidapi.com/rewardsccapi/api/rewards-credit-card-api",
                    activeBasePath: "sign-up",
                    label: "Sign Up",
                    position: "right",
                    className: "button",
                },
                // {
                //     to: "/sass",
                //     activeBasePath: "sass",
                //     label: "Sass",
                //     position: "right",
                // },
                // {
                //     to: "/showcase",
                //     activeBasePath: "showcase",
                //     label: "Showcase",
                //     position: "right",
                // },
            ],
        },
        prism: {
            theme: require("prism-react-renderer/themes/dracula"),
            additionalLanguages: ["php"],
        },
        algolia: {
            appId: "CWB1S6U3C4",
            apiKey: "cbae3fc769aee256328548eff1e91c1c",
            indexName: "infinum_eightshift",
        },
        colorMode: {
            disableSwitch: true,
        },
        trailingSlash: false,
    },
    presets: [
        [
            "@docusaurus/preset-classic",
            {
                docs: {
                    sidebarPath: require.resolve("./sidebars.js"),
                },
                gtag: {
                    trackingID: "GTM-P5GG5DH",
                    anonymizeIP: true,
                },
                theme: {
                    customCss: require.resolve("./src/scss/application.scss"),
                },
                blog: {
                    blogTitle: "Tutorials and articles about Eightshift development kit",
                    blogDescription: "Tutorials and articles about Eightshift development kit",
                    blogSidebarTitle: "Latest posts",
                    showReadingTime: true,
                    postsPerPage: 6,
                },
                sitemap: {
                    changefreq: "weekly",
                    priority: 0.5,
                },
            },
        ],
    ],
    plugins: ["docusaurus-plugin-sass"],
    customFields: {
        keywords: ["wordpress tools", "development tools", "wordpress project", "Gutenberg blocks", "development kit", "wordpress kit"],
        image: "img-why-boilerplate@2x.png",
    },
};
