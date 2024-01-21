import { useDispatch, useSelector } from "react-redux";
import { incNumber, decNumber } from './actions/index';

function App() {

  const myState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();

  return (
    <>
      <h1 className="text-center text-4xl  my-4 font-bold">Redux App Increment & Decrement</h1>
      <div className="text-black font-bold text-2xl space-x-4 p-2 text-center">
        <button title="Decrement" className="hover:bg-slate-500 bg-lime-500 px-4 py-2 rounded-xl hover:text-white" onClick={() => dispatch(decNumber())}><span>-</span></button>
        <input type="text" name="quantity" value={myState} className="w-12 text-center p-2 rounded-xl bg-slate-400" />
        <button title="Increment" className="hover:bg-slate-500 bg-lime-500 px-4 py-2 rounded-xl hover:text-white" onClick={() => dispatch(incNumber(5))}><span>+</span></button>
      </div>
    </>
  )
}

export default App;
