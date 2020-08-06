import React, { useState } from "react";

import PageHeader from "../../components/PageHeader";
import Input from "../../components/Input";

import warningIcon from "../../assets/images/icons/warning.svg";

import "./styles.css";
import Textarea from "../../components/Textarea";
import Select from "../../components/Select";

const TeacherForm: React.FC = () => {
  const [scheduleItems, setScheduleItems] = useState([
    { week_day: 0, from: "", to: "" },
  ]);

  function addNewScheduleItem() {
    setScheduleItems([...scheduleItems, { week_day: 0, from: "", to: "" }]);
  }

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
          <Textarea label="Biografia" name="bio" />
        </fieldset>
        <fieldset>
          <legend>Sobre a aula</legend>

          <Select
            label="Matéria"
            name="subject"
            options={[
              { value: "Artes", label: "Artes" },
              { value: "Geografia", label: "Geografia" },
              { value: "Matemática", label: "Matemática" },
              { value: "Educação Física", label: "Educação Física" },
              { value: "Física", label: "Física" },
              { value: "Ciência", label: "Ciência" },
              { value: "Química", label: "Química" },
              { value: "História", label: "História" },
              { value: "Português", label: "Português" },
            ]}
          />
          <Input label="Custo da sua hora de aula" name="cost" type="text" />
        </fieldset>

        <fieldset>
          <legend>
            Horários disponíveis
            <button type="button" onClick={addNewScheduleItem}>
              + Novo horário
            </button>
          </legend>

          {scheduleItems.map((scheduleItem) => (
            <div key={scheduleItem.week_day} className="schedule-item">
              <Select
                label="Dia da semana"
                name="week_day"
                options={[
                  { value: "0", label: "Domingo" },
                  { value: "1", label: "Segunda-feira" },
                  { value: "2", label: "Terça-feira" },
                  { value: "3", label: "Quarta-feira" },
                  { value: "4", label: "Quinta-feira" },
                  { value: "5", label: "Sexta-feira" },
                  { value: "6", label: "Sábado" },
                ]}
              />

              <Input name="from" label="Das" type="time" />
              <Input name="to" label="Até" type="time" />
            </div>
          ))}
        </fieldset>

        <footer>
          <p>
            <img src={warningIcon} alt="Aviso importante" />
            Importante <br />
            Preencha todos os dados
          </p>

          <button type="button">Salvar cadastro</button>
        </footer>
      </main>
    </div>
  );
};

export default TeacherForm;
