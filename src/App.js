import "./App.css";
import { useState } from "react";
import { sendCategorizeRequest } from "./processRequest";

function App() {
  const [keywords, setKeywords] = useState("");
  const [transactional, setTransactional] = useState("");
  const [informational, setInformational] = useState("");
  const [navigational, setNavigational] = useState("");

  const onChange = (event) => {
    setKeywords(event.target.value);
  };
  const onClick = async () => {
    if (keywords) {
      const result = await sendCategorizeRequest(keywords);
      setTransactional(result?.["Transactional"].join("/n"));
      setInformational(result?.["Transactional"].join("/n"));
      setNavigational(result?.["Transactional"].join("/n"));
    }
  };
  return (
    <div className="App">
      <div className="Input">
        <div className="Keywords">
          <h3>List of keywords</h3>
          <textarea
            rows={5}
            style={{ width: "100%" }}
            value={keywords}
            onChange={onChange}
          />
        </div>
        <button onClick={onClick}>Categorize</button>
      </div>
      <div className="Output">
        <div>
          <h3>Transactional</h3>
          <textarea rows={20} value={transactional}/>
        </div>
        <div>
          <h3>Informational</h3>
          <textarea rows={20} value={informational}/>
        </div>
        <div>
          <h3>Navigational</h3>
          <textarea rows={20} value={navigational}/>
        </div>
      </div>
    </div>
  );
}

export default App;
