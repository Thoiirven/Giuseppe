import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { BodyHomeBody, PageBody, Titre2, FlexContainer, FlexItem, FlexItemB, FlexItemP,FlexItemI,ImagePizza } from './ListePizzas';
import { json } from 'd3';
import logo from '../../images/LogoNatan.jpg';
class ListePizzas extends Component {
    state = {
        Pret:null,
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
                    let image = logo;
                    copie.push({ Nom: element.Nom, Ingrédients: copie2,Prix: element.Prix,Image:image});
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
                        <Titre2>Nos pizzas disponibles avec une base {this.props.data}</Titre2>
                        
                        <FlexContainer>
                            {this.state.PizzasBaseCreme.map(Pizzas => (<FlexItem id="listePizzas"><FlexItemP>{Pizzas.Nom} </FlexItemP> 
                                <ImagePizza>
                                    <img src={Pizzas.Image}/>
                                </ImagePizza>
                                <FlexItemI>Ingrédients : {Pizzas.Ingrédients.map(Ingred => ("-"+Ingred.Ingrédient+" "))}</FlexItemI>
                                <FlexItemI>Prix : {Pizzas.Prix}</FlexItemI>
                            </FlexItem>))}
                        </FlexContainer>
                    </PageBody>
                </BodyHomeBody>
            </Router>
        );
    }
}
export default ListePizzas;
