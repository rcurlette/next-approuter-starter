import { readFileSync, writeFileSync } from 'fs';

const pkg = JSON.parse(readFileSync('package.json', 'utf-8'));

// Pin all dependency versions to match the lockfile exactly
pkg.dependencies = {
  "@uniformdev/next-app-router": "20.49.2",
  "@uniformdev/next-app-router-client": "20.49.2",
  "next": "16.1.6",
  "react": "19.2.4",
  "react-dom": "19.2.4"
};

pkg.devDependencies = {
  "@tailwindcss/postcss": "4.1.18",
  "@types/node": "20.19.33",
  "@types/react": "19.2.13",
  "@types/react-dom": "19.2.3",
  "@uniformdev/cli": "20.49.2",
  "tailwindcss": "4.1.18",
  "typescript": "5.7.3"
};

writeFileSync('package.json', JSON.stringify(pkg, null, 2) + '\n');
console.log('package.json updated with pinned versions');
console.log(JSON.stringify(pkg, null, 2));
