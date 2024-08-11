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

# Exposer le port de développement React
EXPOSE 5173

# Lancer le serveur de développement
CMD ["pnpm", "dev", "--host"]
