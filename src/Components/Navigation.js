import Link from "next/link";
import NombreEmpresa from "./NombreEmpresa";
import Login from "./Login";
import Registrarme from "./Registrarme";
import Carrito from "./Carrito";
import styles from "../styles/Home.module.css";
import Burguer from "./Burguer";
import Image from "next/image";




const Navigation = () => {
  return (
    <header className={styles.header}>
       <div className={styles.containerLogo}>
        <Image
          src="Logo.svg"
          width={100}
          height={70}
          alt="logo"
          objectFit="cover"
        />
        <Image
          src="NombreEmpresa.svg"
          width={120}
          height={160}
          alt="nombre de la empresa"
          objectFit="cover"
        />
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
