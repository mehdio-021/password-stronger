import React, { useState } from "react";
import Password from "./components/Password";


function App() {
  
  const [password,setPassword] = useState("")


  return (
    <div className="container">
      <div className="col-md-6 mx-auto" >
        <h3 className="text-center py-5"> پسورد را وارد کنین</h3>
        <div className="form-group mb-3">
          <input value={password} onChange={(e)=>setPassword(e.target.value)} type="text" className="form-control " placeholder="پسورد شما" />
        </div>
        <Password password={password}/>
      </div>
    </div>
  );
}

export default App;
