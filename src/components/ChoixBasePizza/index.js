import React, { Component, useState } from 'react';
import Popup from 'reactjs-popup';
import { BodyHomeBody, BodyP, BodyDiv, BodyBcreme, BodyBtomate, FlexContainer, FlexItem, FlexItemP, FlexItemI, ImagePizza, 
Modal, Close, Header, Content, Action, BodyBouton, BoutonFermer, ContentBold, BodyBoutonBase} from './ChoixBasePizza';
import { BrowserRouter as Router, Link } from "react-router-dom";
import { json } from 'd3';
import logo from '../../images/LogoNatan.jpg';
import 'reactjs-popup/dist/index.css';

const FenetreModal = () => (
    <Popup
      trigger={<BodyBouton id="SousTitre"> Liste des suppléments </BodyBouton>}
      modal
      nested
    >
      {close => (
        <Modal>
          <Close id="Titre" onClick={close}>
            &times;
          </Close>
          <Header id="Titre"> Liste ingrédients </Header>
          <ContentBold id="SousTitre">0.50 € de supplément: </ContentBold>
          <Content id="SousTitre">
            Olives, champignons, tomates cerises,
            mozzarella, jambon, poulet, poivrons, chorizo, lardon, 
            billes de mozzarella fraîches, câpres, anchois, oignons, miel.
          </Content>
          <ContentBold id="SousTitre">1 € de supplément: </ContentBold>
          <Content id="SousTitre">
             Chèvre, morbier, fromage à raclette, viande hachée, saumon mariné, kebab, merguez.
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
                        <BodyBoutonBase>
                          <Router forceRefresh={true}>
                              <Link to="/Explore/Creme"><BodyBcreme id="BoutonPizzas">Base crème</BodyBcreme></Link>
                              <Link to="/Explore/Tomate"><BodyBtomate id="BoutonPizzas">Base tomate</BodyBtomate></Link>
                          </Router>
                        </BodyBoutonBase>
                    </BodyDiv>
                    <FenetreModal/>
                    <FlexContainer>
                        {this.state.PizzasBaseCreme.map(Pizzas => (<FlexItem id="listePizzas"><FlexItemP>{Pizzas.Nom} </FlexItemP>
                            <ImagePizza id="imagelogo">
                                <img src={Pizzas.Image} />
                            </ImagePizza>
                            <FlexItemI id="Ingred">Base : {Pizzas.Base}</FlexItemI>
                            <FlexItemI id="Ingred">Ingrédients : {Pizzas.Ingrédients.map(Ingred => ("-" + Ingred.Ingrédient + " "))}</FlexItemI>
                            <FlexItemI id="Ingred">Prix : {Pizzas.Prix}</FlexItemI>
                        </FlexItem>))}
                    </FlexContainer>
                    
                </BodyHomeBody>
            </>
        );
    }
}



export default ChoixBasePizza;