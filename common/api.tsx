function getData(): string {
  return 'Hello World';
}

function performCall(): Promise<string> {
  return new Promise((resolve, reject) => {
    resolve('a');
  });
}

export default {
  getData: getData,
  performCall: performCall,
};
