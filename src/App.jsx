

function App() {

  return (
    <>
      <h1 className="text-center text-4xl  my-4 font-bold">Redux App Increment & Decrement</h1>
      <div className="text-black font-bold text-2xl space-x-4 p-2 text-center">
        <a href="" title="Decrement" className="hover:bg-slate-500 bg-lime-500 p-2 rounded-xl hover:text-white"><span>-</span></a>
        <input type="text" name="quantity" value='0' className="w-8 p-2 rounded-xl bg-slate-400" />
        <a href="" title="Increment" className="hover:bg-slate-500 bg-lime-500 p-2 rounded-xl hover:text-white"><span>+</span></a>
      </div>
    </>
  )
}

export default App
