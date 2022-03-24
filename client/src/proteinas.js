import React, { Component } from "react";
import '../src/css/tables.css'

// Criando Tabela com alimento com maior proteina retornado da api
export default class ProteinasTable extends Component{
    aux = []
    aux2 = []
    maior = 0
    maior_proteina = []
    maiorProteinas = []

    render(){

      // Verificando se o retorno da api é diferente de 'undefined'
      if (typeof this.props.data.alimentos != 'undefined'){

        // Desmembrando a resposta da api e criando um array auxiliar para manipular os dados
        this.aux.push(this.props.data.alimentos)
        this.aux2 = this.aux[0]
      
        // Logica para verificar qual o maior valor de Proteina dos itens retornardos
        for(var i=0;i<this.aux2.length;i++){
            if (this.aux2[i][2] >= this.maior){
              this.maior = this.aux2[i][2]
              this.maior_proteina.push(this.aux2[i])
            }
        }

        for(var j=0;j<this.maior_proteina.length;j++){
          if (this.maior_proteina[j][2] === this.maior ){
            this.maiorProteinas.push(this.maior_proteina[j])
          }
        }
      }
      
     
      const renderProteinas = (alimentos, index) => {
        
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
              {this.maiorProteinas.map(renderProteinas)}
            </tbody>
          </table>
          ) : (
          <div>NO DATA</div>)}
        </div>
        
      )
    }  
}