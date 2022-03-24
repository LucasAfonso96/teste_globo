import React, {useState, useEffect} from 'react'
import {Routes, Route} from 'react-router-dom';
import AlimentosTable from "./alimentos";
import ProteinasTable from './proteinas';
import CarboidratosTable from './carboidratos';
import GordurasTable from './gorduras';
import Headers from './headers';
import Footer from './footer'
import scroll from '../src/imgs/scroll.png'
import '../src/css/route.css'

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {

    // Setando as variáveis e buscando os dados de retorno da api
    const [data, setData] = useState([{}])

    useEffect(() => {
    fetch("/alimentos").then(
      res => res.json()
    ).then(
        data => {
          setData(data)
          
        }
    )
    }, [])

    // Retornando o HTML da página, com headers, footers, tabelas, e rotas 
    return (
        <div className='background'>
          <Headers>
          </Headers>
          <strong className= 'principal'> Bem-vindo ao<span className='sapo'> Sapo Alimentício</span> , aqui você irá encontrar informações nutricionais dos principais alimentos do mercado.
          </strong>
          <div className='scroll'>
              <img className='vertical-img1' src={scroll} alt="seta1"/>
              <img className='vertical-img2' src={scroll} alt="seta2"/>
              <img className='vertical-img3' src={scroll} alt="seta3"/>
            Scroll</div>
          <Routes>
              <Route path="/" element={<AlimentosTable data={data}/>} ></Route>
              <Route path="/proteinas" element={<ProteinasTable data={data}/>}></Route>
              <Route path="/carboidratos" element={<CarboidratosTable data={data}/>}></Route>
              <Route path="/gorduras" element={<GordurasTable data={data}/>}></Route>
            
          </Routes>
          <Footer></Footer>
        </div>
    );
}