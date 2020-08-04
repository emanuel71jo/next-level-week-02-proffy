import React from "react";

// import { Container } from './styles';
import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import "./styles.css";

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars1.githubusercontent.com/u/38570356?s=460&u=1fea95bee8f26c8ae24bdc8675168700c7d2b242&v=4"
          alt="João Emanuel"
        />
        <div>
          <strong>João Emanuel</strong>
          <span>Química</span>
        </div>
      </header>

      <p>
        Entusiasta das melhores tecnologias de química avançada.
        <br />
        <br />
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis eos
        quaerat nostrum quos, aut sequi quisquam, iste perferendis consequatur
        reiciendis dolores dicta? Animi consequuntur commodi doloribus sit saepe
        officiis repellendus.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 80,00</strong>
        </p>

        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
};

export default TeacherItem;
