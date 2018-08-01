const blog = {
  name: 'blog',
  url: '/blog',
  component: 'blogComponent',
  resolve: {
    blogComponent: ['$q', '$ocLazyLoad', ($q, $ocLazyLoad) => {
      return $q((resolve) => {
        require.ensure([], () => {
          let mod = require('./blog/blog.module');
          $ocLazyLoad.load(mod.BLOG_MODULE);
          resolve(mod.default);
        }, 'blog');
      });
    }]
  }
};

export {
  blog
};
