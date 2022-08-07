// disable dev-404
exports.onCreatePage = ({ page, actions }) => {
  if (process.env.NODE_ENV !== `production` && page.path === `/404/`) {
    const { createPage } = actions;
    // Make the 404 page match everything client side.
    // This will be used as fallback if more specific pages are not found
    page.matchPath = `/*`;
    createPage(page);
  }
};

exports.onCreateWebpackConfig = ({ getConfig, actions }) => {
  if (getConfig().mode === 'production') {
    actions.setWebpackConfig({
      devtool: false,
    });
  }
};
