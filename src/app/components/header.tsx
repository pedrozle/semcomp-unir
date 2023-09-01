"use client";
import Image from "next/image";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "@/assets/img/logo1.png";
import Button from "react-bootstrap/Button";
import { Col, Row } from "react-bootstrap";

import styles from "@/styles/components/header.module.scss";
import Botao from "./botao";

export default function Header() {
    return (
        <header >
            <Navbar className={styles.header} expand="lg" variant="dark">
                <Container>
                    <Row className={styles.row}>
                        <Col>
                            <Navbar.Brand href="/">
                                <Image
                                    src={Logo}
                                    alt="Logo semana da computação"
                                    width={325}
                                />
                            </Navbar.Brand>
                        </Col>
                        <Col>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className={`me-auto ${styles.links}`}>
                                    <Nav.Link href="/">Início</Nav.Link>
                                    <Nav.Link href="/programacao">Programação</Nav.Link>
                                    <Nav.Link href="/sessao-trabalhos">
                                        Sessão de painéis
                                    </Nav.Link>
                                    <Nav.Link href="/maratona">
                                        Maratona de programação
                                    </Nav.Link>
                                    <Botao titulo="Inscreva-se" link={`${process.env.INSCRICAO_LINK}`}/>
                                </Nav>
                            </Navbar.Collapse>
                        </Col>
                    </Row>
                </Container>
            </Navbar>
        </header>
    );
}
