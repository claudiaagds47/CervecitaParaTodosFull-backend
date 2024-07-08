import React from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";


const Footer = () => {
  return (
    <div className={styles.containerfooter}>
      <div className={styles.Parrafofooter}>
        <p>
          Cerveceria Birrin recomienda el consumo responsable. No compartas este
          contenido con menores | @2024 Cerveceria Birrin
        </p>
      </div>
      <div className={styles.containerContacto}>
        <div className={styles.Face}>
          <Image src="face.svg" width={30} height={60} />
          <p className="TextoFace">Cerveceria Birrin</p>
        </div>
        <div className={styles.whatsapp}>
          <Image src="whatsapp.svg" width={30} height={60} />
          <p className="nWhatsapp">11-1234-5678</p>
        </div>
        <div className={styles.Map}>
          <Image src="/maps.svg" width={20} height={60} />
          <p className="TextoMap">Vte. Lopéz, GBA</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;