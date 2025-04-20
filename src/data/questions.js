const questions = [
  {
    question: "How often do you drive a car per week?",
    options: ["Never", "1-3 times", "4-7 times", "Daily"],
    impact: {
      "Never": { CO: 0, NOx: 0 },
      "1-3 times": { CO: 5, NOx: 3 },
      "4-7 times": { CO: 12, NOx: 6 },
      "Daily": { CO: 25, NOx: 12 },
    },
  },
  {
    question: "What’s your vehicle's fuel type?",
    options: ["Electric", "Petrol", "Diesel"],
    impact: {
      Electric: { PM25: 1 },
      Petrol: { CO: 10, VOC: 2 },
      Diesel: { NOx: 10, SO2: 5 },
    },
  },
  {
    question: "How many flights do you take per year?",
    options: ["0", "1-2", "3-5", "6+"],
    impact: {
      "0": {},
      "1-2": { CO: 15, NOx: 7 },
      "3-5": { CO: 30, NOx: 15 },
      "6+": { CO: 60, NOx: 30 },
    },
  },
  {
    question: "Do you use public transport regularly?",
    options: ["Yes", "No"],
    impact: {
      Yes: { CO: 2 },
      No: { CO: 6 },
    },
  },
  {
    question: "What kind of heating system do you use at home?",
    options: ["None", "Electric", "Gas", "Coal"],
    impact: {
      None: {},
      Electric: { PM25: 1 },
      Gas: { NOx: 5 },
      Coal: { SO2: 10, PM25: 5 },
    },
  },
  {
    question: "How much meat do you consume weekly?",
    options: ["None", "1-2 meals", "3-5 meals", "Daily"],
    impact: {
      None: {},
      "1-2 meals": { VOC: 2 },
      "3-5 meals": { VOC: 4 },
      Daily: { VOC: 7 },
    },
  },
  {
    question: "Do you recycle waste materials?",
    options: ["Yes", "Sometimes", "No"],
    impact: {
      Yes: {},
      Sometimes: { PM25: 1 },
      No: { PM25: 2 },
    },
  },
  {
    question: "What type of energy powers your home?",
    options: ["Renewable", "Gas", "Coal"],
    impact: {
      Renewable: {},
      Gas: { NOx: 5 },
      Coal: { SO2: 10, PM25: 5 },
    },
  },
  {
    question: "How often do you shop for new clothes?",
    options: ["Rarely", "Monthly", "Weekly"],
    impact: {
      Rarely: {},
      Monthly: { VOC: 3 },
      Weekly: { VOC: 6 },
    },
  },
  {
    question: "How much electricity do you use monthly (in kWh)?",
    options: ["<100", "100-300", "300-600", "600+"],
    impact: {
      "<100": {},
      "100-300": { PM25: 2 },
      "300-600": { PM25: 5 },
      "600+": { PM25: 10 },
    },
  },
];

export default questions;
