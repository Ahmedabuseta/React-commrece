import { CSSProperties } from "react";
import CircleLoader from "react-spinners/ClipLoader";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

function Loader() {
  return (
    <div className="sweet-loading d-flex justify-content-center align-items-center" style={{height:'100vh'}}>
      <CircleLoader color="#36d7b7" size='50' />
    </div>
  );
}

export default Loader;