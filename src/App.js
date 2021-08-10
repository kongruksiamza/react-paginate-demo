import './App.css';
import { useEffect, useState } from 'react';
import FoodComponent from './components/FoodComponent';
import MenuData from './data/MenuData';

function App() {
  const [foodData,setFoodData] = useState([])
  const [page, setPage] = useState(0)
  const [dataPerPage,setDataPerPage] = useState([])

  const fetchFood=()=>{
      try { 
          const paginate = pagination(MenuData)
          setDataPerPage(paginate)
          setFoodData(paginate[page])
      } catch (error) {
          console.log("error")
      }
  }

  const handlePage = (index) => {
      setPage(index)
  }


  const pagination=(food)=>{
        const foodPerPage = 3; // แสดง card 2 รายการต่อ 1 หน้า
        const pages = Math.ceil(food.length/foodPerPage)
        const newFood=Array.from({length:pages},(data,index)=>{
            const start = index * foodPerPage 
            return food.slice(start,start+foodPerPage)
        })
        return newFood
  }

  useEffect(()=>{
    fetchFood()
    // eslint-disable-next-line
  },[page])

  return (
    <div className="App">
        <h1>FoodCard | Pagination</h1>
        <div className="container">
          {foodData.map((data,index)=>{
              return <FoodComponent food={data} key={index}/>
          })}
        </div>
        <div className='btn-container'>
            {dataPerPage.map((item, index) => {
              return (
                <button 
                  key={index} 
                  className={`page-btn ${index === page ? 'active-btn' : null}`}
                  onClick={() => handlePage(index)}>
                  {index + 1}
                </button>
              )
            })}
          </div>
    </div>
  );
}

export default App;
