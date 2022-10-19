import dayjs from 'dayjs';

/* Keys match keys returned by the github api. Fields without keys are
 * mostly jokes. To see everything returned by the github api, run:
 curl https://api.github.com/repos/wenliangchen/
 */
const data = [
  {
    label: 'Stars for all repository has on github',
    key: 'stargazers_count',
    value: 2,
    // link: 'https://github.com/wenliangchen/',
  },
  {
    label: 'Number of people watching this repository',
    key: 'subscribers_count',
    value: 0,
    // link: 'https://github.com/wenliangchen/',
  },
  {
    label: 'Number of forks',
    key: 'forks',
    // link: 'https://github.com/wenliangchen/',
  },
  {
    label: 'Number of spoons',
    value: '0',
  },
  {
    label: 'Number of linter warnings',
    value: '0', // enforced via github workflow
  },
  {
    label: 'Open github issues',
    key: 'open_issues_count',
    value: 0,
    // link: 'https://github.com/wenliangchen/',
  },
  {
    label: 'Last updated at',
    key: 'pushed_at',
    link: 'https://github.com/wenliangchen/',
    format: (x) => dayjs(x).format('MMMM DD, YYYY'),
  },
  {
    // TODO update this with a pre-commit hook
    /* find . | grep ".js" | grep -vE ".min.js|node_modules|.git|.json" |
    xargs -I file cat file | wc -l */
    label: 'Lines of Javascript powering this website',
    value: '2815',
    link: 'https://github.com/wenliangchen/',
  },
];

export default data;
