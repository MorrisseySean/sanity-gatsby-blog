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
                  buildHookId: '5f4e0b2c529e1ab0d484b556',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-ocs393on',
                  apiId: '27930d25-17bc-4aea-9bba-14d7b6866ad3'
                },
                {
                  buildHookId: '5f4e0b2d7cc534ade8753515',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-ko3fcana',
                  apiId: '1fb93e0a-db86-424d-b247-42d28dcf9014'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/MorrisseySean/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-ko3fcana.netlify.app', category: 'apps' }
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
