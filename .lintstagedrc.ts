import type { Configuration } from "lint-staged";

const config: Configuration = {
  "*.{ts,tsx}": ["eslint --fix", "npx prettier --write"],
  "*.{json,css,md}": ["npx prettier --write"],
};

export default config;
