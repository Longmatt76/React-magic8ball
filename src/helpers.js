
const choice = (answers) => {
  const result = answers[Math.floor(Math.random() * answers.length)];
  return result;
};

export {choice};