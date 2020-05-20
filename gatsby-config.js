module.exports = {
    siteMetadata: {
        title: `Web solutions`,
        description: `Web agency UI/UX E-commerce Branding Cloud technology solutions`,
        author: `@dimitriktm`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-sass`,
        `gatsby-plugin-anchor-links`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Web agency`,
                short_name: `Web agency`,
                start_url: `/`,
                background_color: `#0E77FF`,
                theme_color: `#0E77FF`,
                display: `minimal-ui`,
                icon: `src/images/html-meta-icons/icon.png`, // This path is relative to the root of the site.
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
    pathPrefix: "/gatsby-agency-landing-page",
}
