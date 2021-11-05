import del from "del";

const clean = () => {
  return del("./build");
};

export default clean;
