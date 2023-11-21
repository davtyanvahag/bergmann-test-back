FROM node:20.9.0 as development
ENV NODE_ENV=production
WORKDIR /usr/src/api
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install
RUN npm i -g @nestjs/cli
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["node", "dist/main"]
