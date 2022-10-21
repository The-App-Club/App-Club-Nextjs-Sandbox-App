const sleep = ({millSeconds = 1000}) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, millSeconds);
  });
};

export {sleep};
