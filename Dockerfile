# Etapa 1: Build
FROM node:20 AS build
WORKDIR /app

# Copiar os arquivos do projeto
COPY package*.json ./
RUN npm install

# Copiar o restante do código
COPY . .

# Construir a aplicação Ionic para produção
RUN npm run build --prod

# Etapa 2: Servir com Nginx
FROM nginx:stable-alpine
WORKDIR /usr/share/nginx/html

# Remover os arquivos padrão do Nginx
RUN rm -rf ./*

# Copiar os arquivos de build da etapa anterior
COPY --from=build /app/www/browser .

# Configurar o Nginx para servir a aplicação
COPY nginx.conf /etc/nginx/nginx.conf

# Expor a porta
EXPOSE 80

# Iniciar o Nginx
CMD ["nginx", "-g", "daemon off;"]
