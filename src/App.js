import logo from './logo.svg';
import './App.css';
import Products from './Components/products/Products';
import BtnAdd from './Components/addBtn/BtnAdd';
import { useState ,useEffect} from 'react';
import ModalCreateProduct from './Components/modal/ModalCreateProduct';
import axios from 'axios';
import Navbar from './Components/nav/Navbar';

function App() {


  const [productMall, setProductMall] = useState([])

  useEffect(() => {
    axios.get('https://603a25b7d2b9430017d24bd5.mockapi.io/test/name').then((res) => {
      setProductMall([...res.data])
      console.log(res)
    })
  }, [])
  const initialShow = { show: false };

  const [showModal, setShowModal] = useState(initialShow.show);
  const showModalFunc = (showModal) => {
    setShowModal(showModal)
    console.log(showModal)
  }
  const handleSubmitProduct = e => {
    e.preventDefault()
    const form = new FormData(e.target);
    const data = {
    
      productname: form.get('name'),
      price: form.get('price'),
      date: "2020-04-28T07:08:39.194Z",
      rate: form.get('material'),
      image: "http://lorempixel.com/640/480/transport",
      disc: form.get('desc')
    }
    axios.post('https://603a25b7d2b9430017d24bd5.mockapi.io/test/name', data)
      .then(res => {
          const temp=[...productMall,data];
          setProductMall([...temp])
          setShowModal(false)
          
      }

      )
  }
  const removeProduct=(id)=>{
      axios.delete(`https://603a25b7d2b9430017d24bd5.mockapi.io/test/name/${id}`).then(res=>{
        const temp=[...productMall];
        const index=temp.filter(q=>q.id!=id);
        setProductMall([...index])  
      })


    
  }
  return (
    <div className="container">
      <Navbar/>
      <Products  product={productMall} handelRemove={removeProduct} />
      {showModal ? <ModalCreateProduct handleSubimt={handleSubmitProduct} showMModal={showModalFunc} data={showModalFunc} /> : null}

      <BtnAdd showMModal={showModalFunc} data={showModal} />
    </div>
  );
}

export default App;
