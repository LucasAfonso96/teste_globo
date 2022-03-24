import React, { Component } from "react";
import '../src/css/tables.css'

// Criando Tabela com alimento com maior carboidrato retornado da api
export default class CarboidratosTable extends Component{
    
    // Inicializando variaveis
    aux = []
    aux2 = []
    maior = 0
    maior_carb = []
    maiorCarb = []
    
    render(){
      
      // Verificando se o retorno da api é diferente de 'undefined'
      if (typeof this.props.data.alimentos != 'undefined'){

        // Desmembrando a resposta da api e criando um array auxiliar para manipular os dados
        this.aux.push(this.props.data.alimentos)
        this.aux2 = this.aux[0]
       
        // Logica para verificar qual o maior valor de Carboidratos dos itens retornardos
        for(var i=0;i<this.aux2.length;i++){
    
            if (this.aux2[i][3] >= this.maior){
                this.maior = this.aux2[i][3]
                this.maior_carb.push(this.aux2[i])
            }
        }

        for(var j=0;j<this.maior_carb.length;j++){
          if (this.maior_carb[j][3] === this.maior ){
            this.maiorCarb.push(this.maior_carb[j])
          }
        }
      }

      const renderCarbs = (alimentos, index) => {
        
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
              {this.maiorCarb.map(renderCarbs)}
            </tbody>
          </table>
          ) : (
          <div>NO DATA</div>)}
        </div>
        
      )
    }  
}