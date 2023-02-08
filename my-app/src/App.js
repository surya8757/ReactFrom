
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='form'>
        <fieldset className='form-field'>
          <legend>Registration From</legend>
          <div className='form-item'>
            <label id="FNameLab">FullName:-</label>
            <input type="text" id="FNameId"/>
          </div>
          <div className='form-item'>
            <label id="RegNoLab">Registration No:-</label>
            <input type="text" id="RegNoId"/>
          </div>
          <div className='form-item'>
            <label id="EmailLab">Email:-</label>
            <input type="text" id="EmailId"/>
          </div>
          <div className='form-item'>
            <label id="AddrLab">Address:-</label>
            <input type="text" id="AddrId"/>
          </div>
          <div className='form-item'>
            <label id="PassLab">Password:-</label>
            <input type="Password" id="PassId"/>
          </div>
          <div className='form-item'>
            <button type="submit">submit</button>
          </div>
        </fieldset>
      </div>
    </div>
  );
}

export default App;
