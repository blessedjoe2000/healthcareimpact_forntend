import { useState } from "react";
import { RotateLoader } from "react-spinners";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

export default function Spinner() {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#01579B");
  return (
    <div className="sweet-loading">
      <RotateLoader
        color={color}
        loading={loading}
        cssOverride={override}
        size={13}
        aria-label="Loading Spinner"
        data-testid="loader"
        margin={2}
      />
    </div>
  );
}
