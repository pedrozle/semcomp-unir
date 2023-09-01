import Footer from "../components/footer";
import Header from "../components/header";

import "bootstrap/dist/css/bootstrap.css";
import "@/styles/globals.scss";

export const metadata = {
    title: "Sessão de Trabalhos",
    description: "VI Semana da Computação - UNIR",
    icons: {
        icon: "https://www.unir.br/img/favicon.ico",
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <section>{children}</section>;
}
