export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6030efbac0734872cbeb62e7',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-m54w3r9j',
                  apiId: 'abf03dff-f3ad-4714-937e-e6584c068816'
                },
                {
                  buildHookId: '6030efba96063b4a58b7d878',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-gf5amg6e',
                  apiId: '82acb2d8-cd58-4edb-b486-3a6c82a6bca9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/RavenColEvol/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-gf5amg6e.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
