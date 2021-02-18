import "./design.css";


function App() {
  
  
  const allow=[
{mycity:"Pusad" , name:"Nishant"},
{mycity:"Amravati" , name:"Mahesh"},
{mycity:"Nagpur", name:"Saurabh"},
{mycity:"Pune", name:"Chetan"},
{mycity:"Hyderabad", name:"Aditya"}

  ];
  return (
<div>
  <h1>This is For Selection</h1>
<select>
  {allow.map((i,index) =>(
    <option key={i.id}>{i.mycity}</option>
  ))}
  </select>
  <h1>This is Order List</h1>
  <ol>
  {allow.map((i,index) =>(
    <li key={i.id}>{i.mycity}</li>
  ))}
  </ol>
  <h1>This is Unorder List</h1>
  <ul>
{allow.map((i,index) =>(
  <li key={i.id}>{i.mycity}</li>

))}
</ul>
<table className="fortable">
<tr className="fortr">
  <td><h2>Sr.No</h2></td>
<td><h2>Name </h2></td>
<td><h2>City</h2></td>

  </tr>
  {allow.map((i,index) =>(
    
  <tr className="fortd">
    
    <td key={i.id}>{index+1}</td>
    <td key={i.id}>{i.name}</td>
    <td key={i.id}>{i.mycity}</td>
    
    
    </tr>
  ))}


  </table>
</div>
  );
}

export default App;
