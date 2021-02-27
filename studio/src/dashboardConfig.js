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
                  buildHookId: '603a960f79b14e4d2b971332',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-7g7skbaf',
                  apiId: '9cdb12d2-60b4-4ef2-9cf1-fa72fc432b06'
                },
                {
                  buildHookId: '603a960f79b14e46d29716df',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-u2y7z82f',
                  apiId: 'd7d0f37b-841e-4c87-80e4-993f1cf995f6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sandboxVegas/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-u2y7z82f.netlify.app', category: 'apps' }
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
