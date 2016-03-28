module.exports = [
  /**
   * about us route configuration
   */
  {
    path: '/about-us',
    view: 'pages/about-us/about-us',
    collection: 'aboutUs',
    subCollection: 'aboutUs',
  },
  {
    path: '/about-us/our-staff',
    view: 'pages/about-us/our-staff/our-staff',
    collection: 'aboutUs',
    subCollection: 'ourStaff',
  },
  {
    path: '/about-us/quotes',
    view: 'pages/about-us/quotes/quotes',
    collection: 'aboutUs',
    subCollection: 'quotes',
  },
  {
    path: '/about-us/quotes/ofsted',
    view: 'pages/about-us/quotes/ofsted',
    collection: 'aboutUs',
    subCollection: 'ofstedQuotes',
  },
  {
    path: '/about-us/training',
    view: 'pages/about-us/training/training',
    collection: 'aboutUs',
    subCollection: 'training',
  },
  {
    path: '/about-us/training/commitment',
    view: 'pages/about-us/training/commitment',
    collection: 'aboutUs',
    subCollection: 'commitment',
  },
  {
    path: '/about-us/training/programme',
    view: 'pages/about-us/training/programme',
    collection: 'aboutUs',
    subCollection: 'programme',
  },

  /**
   * activities route configuration
   */
  {
    path: '/activities',
    view: 'pages/activities/activities',
    collection: 'activities',
    subCollection: 'activities',
  },

  /**
   * careers route configuration
   */
  {
    path: '/careers',
    view: 'pages/careers/careers',
    collection: 'careers',
    subCollection: 'careers',
  },
  {
    path: '/careers/casual-worker',
    view: 'pages/careers/casual-worker',
    collection: 'careers',
    subCollection: 'casualWorker',
  },
  {
    path: '/careers/support-worker',
    view: 'pages/careers/support-worker',
    collection: 'careers',
    subCollection: 'supportWorker',
  },

  /**
   * contact us route configuration
   */
  {
    path: '/contact-us',
    view: 'pages/contact-us/contact-us',
    collection: 'contactUs',
    subCollection: 'contactUs',
  },

  /**
   * home route configuration
   */
  {
    path: '/',
    view: 'pages/home/home',
    collection: 'home',
    subCollection: 'home',
  },

  /**
   * my choice school route configuration
   */
  {
    path: '/my-choice-school',
    view: 'pages/my-choice-school/my-choice-school',
    collection: 'myChoiceSchool',
    subCollection: 'myChoiceSchool',
  },

  /**
   * our homes route configuration
   */
  {
    path: '/our-homes',
    view: 'pages/our-homes/our-homes',
    collection: 'ourHomes',
    subCollection: 'ourHomes',
  },
  {
    path: '/our-homes/{home}',
    view: 'pages/our-homes/single-home',
    collection: 'ourHomes',
    subCollection: '',
  },

  /**
   * referrals route configuration
   */
  {
    path: '/referrals',
    view: 'pages/referrals/referrals',
    collection: 'referrals',
    subCollection: 'referrals',
  },

  /**
   * services route configuration
   */
  {
    path: '/services',
    view: 'pages/services/services',
    collection: 'services',
    subCollection: 'services',
  },
  {
    path: '/services/keywork-support',
    view: 'pages/services/keywork-support',
    collection: 'services',
    subCollection: 'keyworkSupport',
  },
];
