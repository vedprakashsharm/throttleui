export const RE_DIGIT = new RegExp(/^\d+$/)

export const authenticationCookieKey = 'authentication'

export const routes = {
  investor: {
    home: '/investor/home',
    startups: '/investor/startups',
    account: '/investor/account',
    myportfolio: '/investor/myportfolio',
    investorNetwok: '/investor/investorNetwok',
    enabler: '/investor/enabler',
  },
  startUp: {
    home: '/startup/dashboard',
    startups: '/startup/startups',
    startUpAccount: '/startup/startup-account',
    myportfolio: '/startup/startup-portfolio',
  },
}

export const StartupRoutes = {
  startUp: {
    home: '/startup/dashboard',
    startups: '/startup/startups',
    startUpAccount: '/startup/startup-account',
    myportfolio: '/startup/startup-portfolio',
  },
}

export const ACCOUNT_TYPE = {
  investor: 'investor',
  startup: 'startup',
}

export const SECTORS = [
  'Fintech',
  'Ed-tech',
  'E-commerce',
  'Consumer Economy',
  'Agritech',
  'Cyber security',
  'Retail',
  'Media-Tech',
  'Web 3.0',
  'Gaming',
  'Bio-tech',
  'Fitness-tech',
  'AI',
  'Deep-tech',
  'Quantum Computing, BlockChain',
  'New Energy',
  'Climate-tech',
  'Consumer Brands- D2C',
  'IOT',
  'Hr-tech',
  'Food-tech',
  'Industry 4.0',
  'Travel tech ',
  'EV',
  'Health tech',
  'SaaS',
  'Logistics',
  'Supply chain',
  'Enterprise',
  'Cleantech',
  'Others'
]