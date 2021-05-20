import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import { BodyHomeBody, PageBody, Titre2, FlexContainer, FlexItem, FlexItemB, FlexItemP,FlexItemI } from './ListePizzas';
import { json, select } from 'd3';
class ListePizzas extends Component {
    state = {
        Pret:false,
        PizzasBaseCreme: []
    }
    ajoutListePizza(){
        json("/data/Pizzas.json").then((value) => {
            var copie = [];
            var base = this.props.data;
            value.forEach(function (element) {
                console.log(base);
                if(element.Base === base){
                    var copie2 = [];
                    element.Ingrédients.forEach(function (element2) {
                        copie2.push({ Ingrédient: element2.Ingrédient });
                    });
                    copie.push({ Nom: element.Nom, Ingrédients: copie2 });
                }
            });
            this.setState({ PizzasBaseCreme: copie});
        });
    }
    componentDidMount() {
        this.ajoutListePizza();
    }
    render() {
        return (
            <Router forceRefresh={true}>
                <BodyHomeBody>
                    <PageBody>
                        <Titre2>Une vue des différentes Pizzas disponibles avec une base {this.props.data}</Titre2>
                        <FlexContainer>
                            {this.state.PizzasBaseCreme.map(Pizzas => (<FlexItem><FlexItemP>{Pizzas.Nom}  
                                <FlexItemI>Ingrédients : {Pizzas.Ingrédients.map(Ingred => ("-"+Ingred.Ingrédient+" "))}</FlexItemI>
                            </FlexItemP></FlexItem>))}
                        </FlexContainer>
                    </PageBody>
                </BodyHomeBody>
            </Router>
        );
    }

}

export default ListePizzas;
