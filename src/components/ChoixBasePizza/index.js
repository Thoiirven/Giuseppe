import React, { Component } from 'react';
import { BodyHomeBody, BodyP, BodyDiv, BodyBcreme, BodyBtomate, FlexContainer, FlexItem, FlexItemP, FlexItemI, ImagePizza } from './ChoixBasePizza';
import { BrowserRouter as Router, Link } from "react-router-dom";
import { json } from 'd3';
import logo from '../../images/LogoNatan.jpg';

class ChoixBasePizza extends Component {
    state = {
        PizzasBaseCreme: [],
    }
    ajoutListePizza(){
        json("/data/Pizzas.json").then((value) => {
            var copie = [];
                    var copie2 = [];
                    value[17].Ingrédients.forEach(function (element2) {
                        copie2.push({ Ingrédient: element2.Ingrédient });
                    });
                    let image = logo;
                    copie.push({ Nom: value[17].Nom, Ingrédients: copie2,Prix: value[17].Prix,Image:image,Base:value[17].Base});
            this.setState({ PizzasBaseCreme: copie});
        });
    }
    componentDidMount() {
        this.ajoutListePizza();
    }
    render() {
        return (
            <>
                <BodyHomeBody>
                    <BodyDiv>
                        <BodyP>Quelle base pour votre Pizza voulez-vous ?</BodyP>
                        <Router forceRefresh={true}>
                            <Link to="/Explore/Creme"><BodyBcreme>Liste avec une base crème</BodyBcreme></Link>
                            <Link to="/Explore/Tomate"><BodyBtomate>Liste avec une base tomate</BodyBtomate></Link>
                        </Router>
                    </BodyDiv>
                    <FlexContainer>
                        {this.state.PizzasBaseCreme.map(Pizzas => (<FlexItem id="listePizzas"><FlexItemP>{Pizzas.Nom} </FlexItemP>
                            <ImagePizza>
                                <img src={Pizzas.Image} />
                            </ImagePizza>
                            <FlexItemI>Base : {Pizzas.Base}</FlexItemI>
                            <FlexItemI>Ingrédients : {Pizzas.Ingrédients.map(Ingred => ("-" + Ingred.Ingrédient + " "))}</FlexItemI>
                            <FlexItemI>Prix : {Pizzas.Prix}</FlexItemI>
                        </FlexItem>))}
                    </FlexContainer>
                </BodyHomeBody>
            </>
        );
    }
}



export default ChoixBasePizza;