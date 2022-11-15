import './App.css';

function App() {

  const left = document.getElementById("left-side");

  const handleOnMove = e =>{
    const p = e.clientX / window.innerWidth * 100;
    left.style.width = `${p}%`;
  }
  document.onmousemove = e => handleOnMove(e);
  
  return (
    <div className="App">
        <div id="left-side" class="side"> 
          <h2 class="title"> 
            Today is going to be <span class="fancy">awesome! </span>
          </h2>
        </div>
        <div id="right-side" class="side"> 
          <h2 class="title"> 
            Today is going to be <span class="fancy">wonderful! </span>
          </h2>
        </div>
    </div>
  );
}

export default App;
