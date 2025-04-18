
import React, { useState,useMemo } from 'react';
import './App.css';

function App() {

  // const [counter,setcounter]=useState(0);
  // const [number,setNUmber]=useState(1);
  // const Factorial=React.useMemo(()=>fact(number),[number]);
  // return (
  //   <center>
  //     Factorial:{Factorial}<br></br>
  //     <button onClick={()=>setcounter(counter+1)}>counter:{counter}<br></br>counter increment</button>
  //    <button onClick={()=>setNUmber(number+1)}>NUMBER VALUE</button>
  //   </center>
  // );}
  // const fact=(n)=>{
  //       let answer=1;
  //       for(var i=1;i<n;i++){
  //         answer=answer*i;  
  //       }console.log("answer calling");
  //       return answer;



  const [cart, setCart] = useState([
    { id: 1, name: 'Laptop', price: 900 },
    { id: 2, name: 'Phone', price: 500 },
    { id: 3, name: 'Headphones', price: 150 },
  ]);

  const [discount, setDiscount] = useState(0);

  const mostExpensiveItem = useMemo(() => {
    console.log('Calculating most expensive item...');
    return cart.reduce((prev, current) =>
      current.price > prev.price ? current : prev
    );
  }, [cart]);
  const addItem = () => {
    const newItem = {
      id: cart.length + 1,
      name: 'Tablet',
      price: 600,
    };
    setCart([...cart, newItem]);
  };

  return (
    <div style={styles.container}>
      <h2>🛒 Your Shopping Cart</h2>

      {cart.map(item => (
        <div key={item.id} style={styles.item}>
          {item.name} - ${item.price}
        </div>
      ))}

      <div style={styles.highlight}>
        🔥 Most Expensive: <strong>{mostExpensiveItem.name}</strong> (${mostExpensiveItem.price})
      </div>

      <div style={{ marginTop: '15px' }}>
        <label>Set Discount (%): </label>
        <input
          type="number"
          value={discount}
          onChange={(e) => setDiscount(e.target.value)}
        />
      </div>

      <button onClick={addItem} style={styles.button}>
        ➕ Add Tablet ($700)
      </button>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'sans-serif',
    padding: '20px',
    maxWidth: '400px',
    margin: 'auto',
    border: '1px solid #ccc',
    borderRadius: '10px',
    boxShadow: '0 0 10px #ddd'
  },
  item: {
    marginBottom: '10px'
  },
  highlight: {
    marginTop: '20px',
    padding: '10px',
    backgroundColor: '#f0f8ff',
    borderRadius: '8px'
  },
  button: {
    marginTop: '15px',
    padding: '10px 15px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer'
  }

  }
export default App;
