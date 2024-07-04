import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import NombreEmpresa from "./NombreEmpresa";
import Login from "./Login";
import Registrarme from "./Registrarme";
import Carrito from "./Carrito";
import styles from "../styles/Home.module.css";
import Burguer from "./Burguer";
import { useState } from "react";
import { useEffect } from "react";

const Navigation = () => {
  
  return (
    <header className={styles.header}>
      <div className={styles.containerlogo}>
        <Logo />
      </div>

      <div className={styles.NombreEmpresa}>
        <NombreEmpresa />
      </div>
      
        <nav className={styles.nav}>
          <Link href="/">Home</Link>
          <Link href="/">Cervezas</Link>
          <Link href="/">Contactanos</Link>
          <Link href="/">Nosotros</Link>
          <Link href="/">TiendaOnLine</Link>
        </nav>
      
      <div className={styles.Burguer}>
        <Burguer />
      </div>
      
      <div className={styles.Loguin}>
        <Login />
      </div>

      <div className={styles.Registrarme}>
        <Registrarme />
      </div>

      <div className={styles.Carrito}>
        <Carrito />
      </div>
    </header>
  );
};

export default Navigation;
