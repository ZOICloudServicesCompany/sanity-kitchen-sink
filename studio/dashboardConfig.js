export default {
  widgets: [
    {name: 'structure-menu'},
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
                  buildHookId: '5f8a3ed1de1d989d241f621d',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-hkbtsh6e',
                  apiId: '81c8f808-be8e-48a1-957b-d7cfbc04876a'
                },
                {
                  buildHookId: '5f8a3ed10e2c919931d4115a',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-hzwc5gih',
                  apiId: '43156f9e-8b3a-47c9-8b55-a51ab2c64338'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ZOICloudServicesCompany/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-hzwc5gih.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
