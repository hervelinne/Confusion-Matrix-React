import './App.css';
import Data from './evaluation.json'; 
import 'bootstrap/dist/css/bootstrap.min.css';

function Rows(props){
  const v = []; 
  let j = -1; 
for (let i = props.columns.length*props.val ; i < props.columns.length + props.columns.length*props.val ; i++   ){
  v.push(props.rows[i])
}
return (<span className="rows">
  {v.map(data => {
  j++; 
  if (j === props.val)
    return <td className = "tbody r" style={{background: "rgb(214, 212, 231)", fontWeight: "bolder"}}>{data}</td>
  else
    return <td className = "tbody r">{data}</td>
    
})}
</span>)}

function App() {
  const header = []; 
  const rowsVal = []; 
    Data.modelEvaluation.map(data => {
        if(typeof(data.displayName) === 'string'){
          header.push(data.displayName);
        }
        console.log(header)
    });
    Data.modelEvaluation.map(d => {
          if(d.textExtractionEvaluationMetrics.confusionMatrix !== undefined){
            d.textExtractionEvaluationMetrics.confusionMatrix.row.map(r => {
              r.exampleCount.map(val => {
              rowsVal.push(val);})}
            )}
      console.log(rowsVal); 
    })
  return (
    <div className="App">
      <h1>Matrice de Confusion  </h1>
      <table className='bdy'>
            <tr className="thead">
              <th className='info'><div id="PL">predicted Label</div><div className='TL'>True Label</div></th>
            {
       header.map((h, key) => {
          return(
              <th className="header head">{h}</th>
          )})}
       </tr>
      {  
        header.map((h, key) => {
          console.log(key); 
          return(
            <tr className='tbody'>
              <th key={h} className="sideH">{h}</th>
                  <Rows  columns= {header} rows = {rowsVal} val = {key}/>
            </tr>
          )
        })
      }
      </table>


    </div>
 
  );
}

export default App;
