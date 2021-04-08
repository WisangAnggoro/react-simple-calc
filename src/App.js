import {useState} from 'react';

let operation="";
let val1=0, val2=0;
let afterOperationFlag = false;

function App() {
  const [calDisplay, setCalcDisplay] = useState('0');

  let addDigit = (e) => {
    if(afterOperationFlag){
      setCalcDisplay(e.toString());
      afterOperationFlag=false;
    } else if(e===-1) {
      setCalcDisplay(calDisplay + ".")
    } else if(calDisplay==='0' && e===0) {
      return;
    } else if(calDisplay==='0' && e!==0) {
      setCalcDisplay(e.toString());
      return;
    } else {
      setCalcDisplay(calDisplay + e.toString())
    }
  }

  let addOperation = (e) => {
    afterOperationFlag=true;
    // if(val1!==0)
    if(true)
    {
    //   calculate()
    //   val1 = Number(calDisplay)
    //   operation = e
    // } else {
      val1 = Number(calDisplay)
      console.log("1=",val1)
      console.log("2=",val2)
      operation = e
    }
  }

  let calculate = () => {
      val2=Number(calDisplay)
      console.log("1=",val1)
      console.log("2=",val2)
      switch(operation) {
        case '+':
          setCalcDisplay((val1+val2).toString())
          break;
        case '-':
          setCalcDisplay((val1-val2).toString())
          break;
        case '*':
          setCalcDisplay((val1*val2).toString())
          break;
        case '/':
          setCalcDisplay((val1/val2).toString())
          break;
        default:
          break;
      }
      val2=0
      val1=Number(calDisplay)
  }

  return (
    <div className="bg-gray-100">
      <div className="max-w-7xl mx-auto py-12 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-right text-lg leading-6 font-medium text-gray-900">
                {calDisplay}
              </h3>
            </div>
            <div className="grid grid-cols-4 gap-4 px-4 py-5 sm:px-6">
              <div className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full text-center" 
                onClick={() => addDigit(1)}
              >1</div>
              <div className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full text-center" 
                onClick={() => addDigit(2)}
              >2</div>
              <div className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full text-center" 
                onClick={() => addDigit(3)}
              >3</div>
              <div className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full text-center" 
                onClick={() => addOperation('/')}
              >/</div>
              <div className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full text-center" 
                onClick={() => addDigit(4)}
              >4</div>
              <div className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full text-center" 
                onClick={() => addDigit(5)}
              >5</div>
              <div className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full text-center" 
                onClick={() => addDigit(6)}
              >6</div>
              <div className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full text-center" 
                onClick={() => addOperation('*')}
              >x</div>
              <div className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full text-center" 
                onClick={() => addDigit(7)}
              >7</div>
              <div className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full text-center" 
                onClick={() => addDigit(8)}
              >8</div>
              <div className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full text-center" 
                onClick={() => addDigit(9)}
              >9</div>
              <div className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full text-center" 
                onClick={() => addOperation('-')}
              >-</div>
              <div className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full text-center" 
                onClick={() => addDigit(0)}
              >0</div>
              <div className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full text-center" 
                onClick={() => addDigit(-1)}
              >.</div>
              <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full text-center" 
                onClick={() => calculate()}
              >=</div>
              <div className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full text-center" 
                onClick={() => addOperation('+')}
              >+</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
