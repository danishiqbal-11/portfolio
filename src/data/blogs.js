import PeterLynchCompanies from '../components/investments/blogs/PeterLynchCompanies';
import PeterLynchPerfectStock from '../components/investments/blogs/PeterLynchPerfectStock';

export const blogPosts = [
  {
    id: 'peter-lynch-companies',
    title: 'From Slow Growers to Fast Growers: Understanding Peter Lynch’s Six Company Types',
    description: 'Legendary investor Peter Lynch, in his classic book One Up on Wall Street, introduced a simple yet powerful framework to categorize companies into six types.',
    path: '/investment/blogs/peter-lynch-companies',
    component: PeterLynchCompanies,
  },
  {
    id: 'peter-lynch-perfect-stock',
    title: 'Peter Lynch’s 13 Characteristics of the Perfect Stock',
    description: 'Peter Lynch\'s criteria emphasize investing in companies that are often overlooked by the broader market but possess strong fundamentals, consistent demand, and potential for growth.',
    path: '/investment/blogs/peter-lynch-perfect-stock',
    component: PeterLynchPerfectStock,
  },
  // Add more blog posts here
];