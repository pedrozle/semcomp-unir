/** @type {import('next').NextConfig} */

require("dotenv").config();

const nextConfig = {
    images: {
        domains: ["dacc.unir.br"],
    },
    env: {
        DATABASE_URL: process.env.DATABASE_CONNECTION,
        INSCRICAO_LINK: process.env.INSCRICAO_LINK,
        SUBMISSAO_LINK: process.env.SUBMISSAO_LINK,
        MARATONA_LINK: process.env.MARATONA_LINK
    },
};

module.exports = nextConfig;
