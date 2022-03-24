import React, { Component } from "react";
import '../src/css/tables.css'


// Criando Tabela com todos alimentos retornados da api
export default class AlimentosTable extends Component{
    aux = []
    aux2 = []

    render(){
     
      // Verificando se o retorno da api é diferente de 'undefined'
      if (typeof this.props.data.alimentos != 'undefined'){
        
        // Desmembrando a resposta da api e criando um array auxiliar para manipular os dados
        this.aux.push(this.props.data.alimentos)
        this.aux2 = this.aux[0]
      }

      // Função para renderizar as células da tabela através dos itens retornados da api
      const renderAlimentos = (alimentos, index) => {
        
        return(
          <>
            <tr key={index}>
              <td>{alimentos[0]}</td>
              <td>{alimentos[1]}g</td>
              <td>{alimentos[2]}g</td>
              <td>{alimentos[3]}g</td>
              <td>{alimentos[4]}g</td>
            </tr>
          </>
        )
      }

      // Declarando varíavel 'isAlimentos', para checkar se os valor retornado existe, senao exibirá na tela 'NO DATA'
      const isAlimentos = this.props.data.alimentos;
    
      return(
        <div>
          {isAlimentos ? (
          <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Quantidade</th>
                <th>Proteínas</th>
                <th>Carboidratos</th>
                <th>Gordura</th>
              </tr>
            </thead>
            <tbody>
              {this.aux2.map(renderAlimentos)}
            </tbody>
          </table>
          ) : (
          <div>NO DATA</div>)}
        </div>
        
      )
    }  
}