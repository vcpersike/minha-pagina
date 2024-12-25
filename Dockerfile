# Etapa 1: Build
FROM node:20 AS build
WORKDIR /app

# Copiar os arquivos do projeto
COPY package*.json ./
RUN npm install

# Copiar o restante do código
COPY . .

# Construir a aplicação
RUN npm run build --prod

# Etapa 2: Servir com Nginx
FROM nginx:stable-alpine
COPY --from=build /app/www /usr/share/nginx/html

# Configurar o Nginx para servir a aplicação
COPY nginx.conf /etc/nginx/nginx.conf

# Expor a porta do servidor
EXPOSE 80

# Iniciar o Nginx
CMD ["nginx", "-g", "daemon off;"]
