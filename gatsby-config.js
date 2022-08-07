require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  /* Your site config here */
  flags: {
    DEV_SSR: true,
    FAST_DEV: true,
  },
};
