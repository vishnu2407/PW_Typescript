FROM mcr.microsoft.com/playwright:v1.64.0-noble

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY playwright.config.ts ./
COPY tests ./tests

ENV CI=true
CMD ["npm", "run", "test:ci"]
