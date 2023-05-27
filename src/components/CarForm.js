import { useDispatch } from "react-redux";
import { changeName } from "../store";

function CarForm() {
  
  const dispatch = useDispatch();

  const handleNameChange = (event) => {
      dispatch(changeName(event.target.value));

  };






  return <div className="car-form panel">
    <h4 className="subtitle is-3">
      Add Car 
      <form>
        <div className="field-group">
          <div className="field">
            <label className="label">Name</label>
            <input className="input is-expanded"
            value={name}
            onChange={handleNameChange} />
          </div>

        </div>
      </form>
    </h4>

  </div>;
}

export default CarForm;
