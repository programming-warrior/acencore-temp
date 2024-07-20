import { cn } from "../../utils/cn";
import "./styles.css";


function Circles() {

  return (
    <div className="orbit">
      <div className="planet" id="planet1">Card 1</div>
      <div className="planet" id="planet2">Card 2</div>
      <div className="planet" id="planet3">Card 3</div>
    </div>
  );
}

export default Circles;