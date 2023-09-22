import React, { useState } from "react";
import s from "../styles/Faq.module.css";
import Container from "../components/Container";

const questions = [
  {
    id: 1,
    question: "What are the services do you offer",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates corporis vitae tempora quod provident tenetur culpa dolore facere? Earum, dolor?",
  },
  {
    id: 2,
    question: "what are our preferred method of payment",
    answer:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto iusto veniam eveniet labore impedit nam",
  },
  {
    id: 3,
    question: "Are your services beginners friendly",
    answer:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium, sed. Dolores,",
  },
  {
    id: 4,
    question: "what how does it take to upgrade a package",
    answer:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium, sed. Dolores, sequi.",
  },
  {
    id: 5,
    question: "Where are your offices located around the world",
    answer:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium, sed. Dolores, sequi.",
  },
];

const Faq = () => {
  const [isOpen, setIsOpen] = useState(null);

  const handleClick = (i) => {
    if (isOpen === i) {
      return setIsOpen(null);
    }
    setIsOpen(i);
  };

  const handleSetIsActive = (e) => {};

  return (
    <div className={s.faq}>
      <Container>
        <h2 className={s.title}>FAQ</h2>
        {questions.map((item, i) => (
          <div className={s.wrapper} id={item.id}>
            <div className={s.listItem} onClick={() => handleClick(i)}>
              <p className={s.question}>{item.question}</p>
              <span className={s.plus}>{isOpen === i ? "-" : "+"}</span>
            </div>
            <p
              className={
                isOpen === i ? `${s.answer} ${s.active}` : `${s.answer}`
              }
            >
              {item.answer}
            </p>
          </div>
        ))}
        {/*     <div className={s.wrapper} id={1}>
          <div className={s.listItem}>
            <p className={s.question}>dsad</p>
            <span
              onClick={(e) => handleSetIsActive(e)}
              className={s.plus}
              id="1"
            >
              {isOpen ? "-" : "+"}
            </span>
          </div>
          <p className={isOpen ? `${s.answer} ${s.active}` : `${s.answer}`}>
            dsa
          </p>
        </div> */}
      </Container>
    </div>
  );
};

export default Faq;
