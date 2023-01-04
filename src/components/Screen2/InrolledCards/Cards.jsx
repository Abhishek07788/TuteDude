import React from "react";
import style from "./inroll.module.css";

const Cards = () => {
  const data = [
    {
      name: "Dhiraj Saxsena",
      time: "14 Sep, 2022",
      courses_enrolled: 6,
      amount: 185,
      courses: ["UI/UX", "Photoshop", "Illustrator", "Python", "Java", "MERN"],
    },
    {
      name: "Subhash Mishra",
      time: "15 Sep, 2022",
      courses_enrolled: 23,
      amount: 485,
      courses: [
        "UI/UX",
        "Photoshop",
        "Illustrator",
        "Python",
        "Java",
        "MERN",
        "C++",
      ],
    },
    {
      name: "Prafull Kumar",
      time: "16 Sep, 2022",
      courses_enrolled: 23,
      amount: 485,
      courses: [
        "UI/UX",
        "Photoshop",
        "Illustrator",
        "Python",
        "Java",
        "MERN",
        "UI/UX",
        "Photoshop",
        "Illustrator",
        "Python",
        "Java",
        "MERN",
        "UI/UX",
        "Photoshop",
        "Illustrator",
        "Python",
        "Java",
        "MERN",
      ],
    },
  ];

  return (
    <div className={style.mainDiv}>
      <h3>Friends who Enrolled ({data.length})</h3>

      <div className={style.CardMainDiv}>
        {/* --------------- Map ----------------- */}
        {data.map((el, i) => (
          <div key={i}>
            <div className={style.CardNameTime}>
              <h3>{el.name}</h3>
              <p>{el.time}</p>
            </div>
            <p>Courses Enrolled ({el.courses.length})</p>
            <div className={style.courses}>
              {/* -------------- Map course ----------- */}
              {el.courses &&
                el.courses.map((el, i) => (
                  <div>
                    <p key={i}>{el}</p>
                  </div>
                ))}
            </div>
            <h2>
              Referral Amount <span>₹{el.amount}</span>{" "}
            </h2>
          </div>
        ))}
      </div>
      <p className={style.footer}>Terms & Conditions</p>
    </div>
  );
};

export default Cards;
