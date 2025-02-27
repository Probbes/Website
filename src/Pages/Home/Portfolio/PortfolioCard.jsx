import styles from "./Portfolio.module.css";

import React, { useContext, useState } from "react";

import { typeContext } from "./Portfolio";

function PortfolioCard(props) {
  const type = useContext(typeContext);

  const [showModal, setShowModal] = useState(false);
  const [closing, setClosing] = useState(false);

  const toggleModal = () => {
    if (showModal) {
      setClosing(true); 
      setTimeout(() => {
        setShowModal(false);
        setClosing(false); 
      }, 300); 
    } else {
      setShowModal(true);
    }
  };

  if (type !== 0 && !(type === 1 && props.VFX) && !(type === 2 && props.CS)) {
    return null; 
  }

  return (
    <>
      <div className={styles.PortfolioItems}>
        <img className={styles.hoverImage} onClick={toggleModal} src={props.img} />
        <div className={styles.hoverText}>
          <p className={styles.hoverText1}>{props.name}</p>
          <p className={styles.hoverText2}>{props.tools}</p>
        </div>
      </div>

      {showModal && (
        <div className={styles.modalOverlay} onClick={toggleModal}>
          <div className={`${styles.modalContent} ${closing ? styles.closing : ""}`} onClick={(e) => e.stopPropagation()}>
            {props.isVideo ? (
              <iframe allowFullScreen src={props.link} />
            ) : (
              <img src={props.link} alt="Enlarged Portfolio" />
            )}
            <button className={styles.closeButton} onClick={toggleModal}>X</button>
          </div>
        </div>
      )}
    </>
  );
}

export default PortfolioCard;
