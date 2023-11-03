
# Etapa de construcción

FROM node:16-alpine AS build

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build --prod

RUN ls -alt

# Etapa de producción


FROM nginx:1.17.1-alpine

COPY --from=build /usr/src/app/dist/frontend  /usr/share/nginx/html

COPY --from=build /usr/src/app/nginx.conf /etc/ngnix/conf.d/default.conf

EXPOSE 80