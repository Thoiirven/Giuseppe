import React, { Component, useState } from 'react';
import Popup from 'reactjs-popup';
import { BodyHomeBody, BodyP, BodyDiv, BodyBcreme, BodyBtomate, FlexContainer, FlexItem, FlexItemP, FlexItemI, ImagePizza, 
Modal, Close, Header, Content, Action, BodyBouton, BoutonFermer} from './ChoixBasePizza';
import { BrowserRouter as Router, Link } from "react-router-dom";
import { json } from 'd3';
import logo from '../../images/LogoNatan.jpg';
import 'reactjs-popup/dist/index.css';

const FenetreModal = () => (
    <Popup
      trigger={<BodyBouton id="SousTitre"> Liste ingrédients </BodyBouton>}
      modal
      nested
    >
      {close => (
        <Modal>
          <Close id="Titre" onClick={close}>
            &times;
          </Close>
          <Header id="Titre"> Liste ingrédients </Header>
          <Content id="SousTitre">
            Olives, champignons, tomates cerises,
            mozzarella, jambon, poulet, poivrons, chorizo, lardon, 
            billes de mozzarella fraîches, câpres, anchois, oignons, miel: 0.50 € de supplément
          </Content>
          <Content id="SousTitre">
             Chèvre, morbier, fromage à raclette, viande hachée, saumon mariné, kebab, merguez: 1€ de supplément

          </Content>
          <Action>
            <BoutonFermer id="SousTitre"
              onClick={() => {
                close();
              }}
            >
              Fermer
            </BoutonFermer>
          </Action>
        </Modal>
      )}
    </Popup>
  );

class ChoixBasePizza extends Component {


    state = {
        PizzasBaseCreme: [],
    }
    
    ajoutListePizza() {
        json("/data/Pizzas.json").then((value) => {
            var copie = [];
            var copie2 = [];
            value[17].Ingrédients.forEach(function (element2) {
                copie2.push({ Ingrédient: element2.Ingrédient });
            });
            let image = logo;
            copie.push({ Nom: value[17].Nom, Ingrédients: copie2, Prix: value[17].Prix, Image: image, Base: value[17].Base });
            this.setState({ PizzasBaseCreme: copie });
        });
    }
    componentDidMount() {
        this.ajoutListePizza();
    }
    render() {
        return (
            <>
                <BodyHomeBody>
                    <BodyDiv id="BodyBouton">
                        <BodyP>Quelle base pour votre Pizza voulez-vous ?</BodyP>
                        <Router forceRefresh={true}>
                            <Link to="/Explore/Creme"><BodyBcreme id="BoutonPizzas">Liste avec une base crème</BodyBcreme></Link>
                            <Link to="/Explore/Tomate"><BodyBtomate id="BoutonPizzas">Liste avec une base tomate</BodyBtomate></Link>
                        </Router>
                    </BodyDiv>
                    <FlexContainer>
                        {this.state.PizzasBaseCreme.map(Pizzas => (<FlexItem id="listePizzas"><FlexItemP>{Pizzas.Nom} </FlexItemP>
                            <ImagePizza id="imagelogo">
                                <img src={Pizzas.Image} />
                            </ImagePizza>
                            <FlexItemI>Base : {Pizzas.Base}</FlexItemI>
                            <FlexItemI>Ingrédients : {Pizzas.Ingrédients.map(Ingred => ("-" + Ingred.Ingrédient + " "))}</FlexItemI>
                            <FlexItemI>Prix : {Pizzas.Prix}</FlexItemI>
                        </FlexItem>))}
                    </FlexContainer>
                    <FenetreModal/>
                </BodyHomeBody>
            </>
        );
    }
}



export default ChoixBasePizza;