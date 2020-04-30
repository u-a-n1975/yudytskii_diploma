import React from "react";

import avatar from "../../assets/images/Resume/Avatar.JPG";

export const resumeData = [
  {
    titleBlock: [
      {
        person: [
          { name: "andrii yudytskyi" },
          { profession: "front end developer" },
        ],
      },
      {
        avatar: (
          <a className="resume__avatar" href="/">
            <img alt="hero" src={avatar} />
          </a>
        ),
      },
      {
        infoBlock: [
          {
            row: [{ name: "Address" }, { data: "Zaporozhe" }],
          },
          {
            row: [{ name: "Date of birth" }, { data: "1975-03-27" }],
          },
          {
            row: [{ name: "Phone" }, { data: "+38 050-363-19-89" }],
          },
          {
            row: [{ name: "Skype" }, { data: "Andrii Yudytskyi" }],
          },
          {
            row: [{ name: "Telegram" }, { data: "@Yudytskyi_Andrii" }],
          },
          {
            row: [{ name: "E-mail" }, { data: "uan0503631989@gmail.com" }],
          },
          {
            row: [
              { name: "LinkedIn" },
              { data: "linkedin.com/in/андрей-юдицкий-378590131" },
            ],
          },
        ],
      },
    ],
  },
  {
    about: [
      { text: "Hello there, I am a junior Front-End developer." },
      {
        text:
          "From my personal qualities, I can note: honest, responsibility and think outside the box. I write hand-crafted code on React Native. I have the skills to successfully solve complex logic problems.",
      },
      { text: "Thank you for your time." },
    ],
  },
  { title: "Education" },
  {
    education: [
      {
        row: [
          { date: "1992.09 - 1997.05" },
          {
            institution: [
              {
                name:
                  "Zaporizhzhia National Technical University, Zaporizhzhia (Ukraine)",
                speciality:
                  "Specialist Degree in Engineering, Specialist’s Diploma with honours",
              },
            ],
          },
        ],
      },
      {
        row: [
          { date: "2015.10 - 2018.06" },
          {
            institution: [
              {
                name: "Classic Private University, Zaporizhzhia (Ukraine)",
                speciality:
                  "Professional qualification Lawyer, Bachelor’s Diploma with honours",
              },
            ],
          },
        ],
      },
      {
        row: [
          { date: "2019.10 - 2020.04" },
          {
            institution: [
              {
                name: "Computer “Beetroot Academy”, Zaporizhzhia (Ukraine)",
                speciality: "Front end developer",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    skill: [
      {
        title: "skills",
        skills: [
          { row: "HTML5, CSS, BEM, SEO, DOM, JavaScript Basics" },
          { row: "React Native, React.JS, Redux, Angular JS, Vue.js, jQuery" },
          { row: "SASS, Prepros, Bootstrap, Node.JS, Git, , AJAX, Gulp" },
        ],
      },
    ],
  },
  {
    language: [
      {
        title: "languages",
        languages: [
          { row: [{ name: "ukraine" }, { lavel: "native" }] },
          { row: [{ name: "russian" }, { lavel: "native" }] },
          { row: [{ name: "english" }, { lavel: "pre-intermediate" }] },
        ],
      },
    ],
  },
];
