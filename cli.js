#!/usr/bin/env node

console.clear();
console.log('\n\x1b[36m', 'Hi I am Smit 👋', '\x1b[0m\n');

const greenStr = (str) => `\x1b[32m${str}\x1b[32m`;

const info = {
  status: 'CSE student',
  web: '${coming soon.....}',
  gh: 'https://github.com/Shahsmit075',
  desc: 'A full stack dev getting hands dirty in open source and trying to build super applications....',
  skills: {
    langs: ['.js', '.ts', '.py'],
    skils: ['git', 'docker', 'networking', 'cloudflare'],
  },
};

console.log(greenStr(JSON.stringify(info, null, 2)));
