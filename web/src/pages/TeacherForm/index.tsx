import React from "react";
import PageHeader from "../../components/PageHeader";

import "./styles.css";
import Input from "../../components/Input";

const TeacherForm: React.FC = () => {
  return (
    <div id="page-teacher-form" className="container">
      <PageHeader
        title="Que incrível que você quer dar aula"
        description="O primeiro passo é preencher esse formulário de inscrição"
      />

      <main>
        <fieldset>
          <legend>Seus dados</legend>

          <Input label="Nome completo" name="name" type="text" />
          <Input label="Avatar" name="avatar" type="text" />
          <Input label="Whatsapp" name="whatsapp" type="text" />
        </fieldset>
        <fieldset>
          <legend>Sobre a aula</legend>

          <Input label="Matéria" name="subject" type="text" />
          <Input label="Custo da sua hora de aula" name="cost" type="text" />
        </fieldset>
      </main>
    </div>
  );
};

export default TeacherForm;
