import './App.css';
import {useState , useEffect}  from "react";
import Axios from "axios";

function App() {

  const [data, setData] = useState([]);
 
const fetchAPI = async () => {
  const response = await Axios.get(
    "https://api.unsplash.com/photos/?client_id=uqr-0EE5-49f0cQTQEnmvP7RhmFMqc_Smdtgj0EUxMs"
  );
  console.log(response.data);
  const data = await response.data;
  setData(data);
};

useEffect(() => {
  fetchAPI();
}, []);
  return (
    <div className="App">
       <h1>API HANDELING GET API  </h1>
       {data?.map((e) => (
        <div>
          <img style={{width:"200px" , height:'200px'}}  src={e?.urls?.raw}/>
        </div>
       ))}

    <h1>API HANDELING DELETE  API  </h1>
    </div>
  );
}

export default App;
