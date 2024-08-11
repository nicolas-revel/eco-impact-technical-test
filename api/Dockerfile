# Utiliser une image de Node.js
FROM node:20-alpine

# Répertoire de travail
WORKDIR /app

# Installer PNPM
RUN npm install -g pnpm

# Copier les fichiers du projet
COPY . .

# Installer les dépendances avec PNPM
RUN pnpm install

# Exposer le port de l'application NestJS
EXPOSE 3000

# Lancer l'application NestJS en mode développement
CMD ["pnpm", "start:dev"]
