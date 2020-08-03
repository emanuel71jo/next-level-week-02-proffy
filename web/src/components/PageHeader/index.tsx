import React from "react";
import { Link } from "react-router-dom";

import backIcon from "../../assets/images/icons/back.svg";
import logoIcon from "../../assets/images/logo.svg";

import "./styles.css";

const PageHeader: React.FC = () => {
  return (
    <header className="page-header">
      <div className="top-bar-container">
        <Link to="/">
          <img src={backIcon} alt="Voltar" />
        </Link>
        <img src={logoIcon} alt="Proffy" />
      </div>
      <div className="header-content">
        <strong>Estes são os proffys disponíveis</strong>
      </div>
    </header>
  );
};

export default PageHeader;
