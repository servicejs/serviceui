const debug = <T extends any>(value: T) => {
  // tslint:disable-next-line:no-console
  console.log(value);
  return value;
};

export default debug;
