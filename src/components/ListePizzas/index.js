import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { BodyHomeBody, PageBody, Titre2, FlexContainer, FlexItem, FlexItemP,FlexItemI,ImagePizza,Form, Input, Select } from './ListePizzas';
import { json } from 'd3';
import logo from '../../images/LogoNatan.jpg';
class ListePizzas extends Component {
    constructor(props) {
        super(props);
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    state = {
        PizzasBaseCreme: [],
        value:["Aucun élément choisi"]
    }
    handleChange(event) {
        var copie = [];
        if(event.target.value === "viande"){
            copie.push("viande");
            copie.push("Jambon");
            copie.push("Lardons");
            copie.push("Poulet");
            copie.push("Poulet Mariné au citron");
            copie.push("Kebab");
            copie.push("Chorizo");
            copie.push("Viande hachée");
        }else{
            copie.push(event.target.value);
        }
        this.setState({ value: copie });
    }

    handleSubmit(event) {
        alert('Votre demande a été soumise');
        event.preventDefault();
        console.log(this.state.value);
        this.ajoutListePizza();
    }
    ajoutListePizza(){
        var Ingred= this.state.value;
        json("/data/Pizzas.json").then((value) => {
            var copie = [];
            var base = this.props.data;
            value.forEach(function (element) {
                if(element.Base === base){
                    var copie2 = [];
                    var Contient = 0;
                    element.Ingrédients.forEach(function (element2) {
                        copie2.push({ Ingrédient: element2.Ingrédient });
                        if(Ingred.indexOf(element2.Ingrédient) !== -1)Contient = 1;
                    });
                    let image = logo;
                    if( Contient === 0)
                    {
                        copie.push({ Nom: element.Nom, Ingrédients: copie2,Prix: element.Prix,Image:image});
                    } 
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
                        <Titre2 id ="Titre">Nos pizzas disponibles avec une base {this.props.data}</Titre2>
                        <Form onSubmit={this.handleSubmit} id="SousTitre">
                            <label>
                                Choisissez l'ingrédient que vous ne voulez pas avoir dans votre Pizza :
                                <Select value={this.state.value[0]}  onChange={this.handleChange}>
                                    <option selected value="Aucun élément choisi">Aucun</option>
                                    <option value="viande">Viande</option>
                                    <option value="Poivrons confits">Poivrons</option>
                                </Select>
                            </label>
                            <Input type="submit" value="Envoyer" />
                        </Form>
                        <FlexContainer>
                            {this.state.PizzasBaseCreme.map(Pizzas => (<FlexItem id="listePizzas"><FlexItemP>{Pizzas.Nom} </FlexItemP>
                                <ImagePizza id="imagelogo">
                                    <img src={Pizzas.Image} />
                                </ImagePizza>
                                <FlexItemI>Ingrédients : {Pizzas.Ingrédients.map(Ingred => ("-" + Ingred.Ingrédient + " "))}</FlexItemI>
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
