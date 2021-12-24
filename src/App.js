import './App.css';
import castle from './img/castle.png';

function App() {
  if (document.cookie.split('=')[0] === 'date') { 
    let date = new Date(document.cookie.split('=')[1]);
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let today = new Date();

    let utc1 = Date.UTC(year, month-1, day);
    let utc2 = Date.UTC(today.getFullYear(), today.getMonth(), today.getDate());

    let diff = Math.floor((utc1 - utc2));

    let yearsLeft = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
    let monthsLeft = Math.floor(diff / (1000 * 60 * 60 * 24 * 30)) - (yearsLeft * 12);
    let daysLeft = Math.abs(Math.floor(diff / (1000 * 60 * 60 * 24)) - (yearsLeft * 365) - (monthsLeft * 30));

    return (
      <div className="App">
        <div className="main">
          <h2>Date is {month}/{day}/{year}</h2>
          <h1>{yearsLeft} years, {monthsLeft} months, {daysLeft} days left</h1>
          <h2>Till Disney!</h2>
          <img src={castle} alt="none" className='castle'/>
        </div>
        <input type="date" id="date" />
        <button onClick={() => {
          document.cookie = `date=${document.getElementById('date').value}`;
          window.location.reload();
        }}>Set date</button>
      </div>
    );
  } else {
    return (
      <div className="App">
        <h1>Date is not set</h1>
        <input type="date" id="date" />
        <button onClick={() => {
          document.cookie = `date=${document.getElementById('date').value}`;
        }}>Set date</button>
      </div>
    );
  } 
}

export default App;