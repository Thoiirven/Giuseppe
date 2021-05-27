import React,{Component} from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import { BodyHomeBody, PageBody, Titre2, Carte,ImageLogo,SousTitre,BodyBordure,Titre2Couleur,SousTitreCouleur,BodyBouton,ListeLivraison,SousTitreCouleurListeL} from './BodyHome';
import {json,select} from 'd3';
import logo from '../../images/LogoNatan.jpg';

function getJourNom(Date) {
    switch (Date) {
        case 0:
            return "Dimanche";
        case 1:
            return "Lundi";
        case 2:
            return "Mardi";
        case 3:
            return "Mercredi";
        case 4:
            return "Jeudi";
        case 5:
            return "Vendredi";
        case 6:
            return "Samedi";
        default: return Date;
    }
}
class BodyHome extends Component {
    state = {
        DisponibleTexte: null,
        Endroit: null,
        Jour:null,
        JourEmplacement: null,
        AdresseEmplacement: null,
        ListeLivraison: []
    }
    ajoutListeLivraison() {
        json("/data/Emplacement.json").then((value) => {
            var copie = [];

            if (this.state.JourEmplacement !== 1 && this.state.JourEmplacement !== 2) {
                if (this.state.JourEmplacement === 0) {
                    value[4].Livraison.forEach(function (element2) {
                        copie.push({ Ville: element2.Ville });
                    });
                } else {
                    value[this.state.JourEmplacement - 3].Livraison.forEach(function (element2) {
                        copie.push({ Ville: element2.Ville });
                    });
                }
            }
            this.setState({ ListeLivraison: copie });
        });
    }
    setJourEmplacement(Param) {
        if(Param === -1 && this.state.JourEmplacement === 0){
            this.setState({JourEmplacement:6});
            this.getJourEmplacement();
        }
        else {
            if(Param === 1 && this.state.JourEmplacement === 6)this.setState({JourEmplacement:0});
            else this.setState({JourEmplacement:this.state.JourEmplacement+Param});
            this.getJourEmplacement();
        }
    }
    getJourEmplacement(){
        json("/data/Emplacement.json").then((value) => {
            if(this.state.JourEmplacement === 1 || this.state.JourEmplacement === 2)
            this.setState({ AdresseEmplacement: "Pas de Pizzas ce jour la" });
            else if(this.state.JourEmplacement !== 1 && this.state.JourEmplacement !== 2){
                if(this.state.JourEmplacement === 0){
                    this.setState({ AdresseEmplacement: "Adresse: "+value[4].EmplacementCamion.Adresse+
                    " " +value[4].EmplacementCamion.Ville});
                }else{
                    this.setState({ AdresseEmplacement: "Adresse: "+value[this.state.JourEmplacement-3].EmplacementCamion.Adresse + 
                    " " +value[this.state.JourEmplacement-3].EmplacementCamion.Ville });
                } 
            }
            this.ajoutListeLivraison();
        })
    }
    componentDidMount() {
        
        json("/data/Emplacement.json").then((value) => {
            var DisponibleTexte, Jour, Endroit;
            Jour = new Date().getDay();
            this.setState({ Jour: Jour });
            this.setState({ JourEmplacement: Jour });
            this.getJourEmplacement();
            if (Jour > 2 || Jour === 0) {
                if (Jour === 0) {
                    Endroit = " et nous vous attendons à " + value[4].EmplacementCamion.Ville;
                    this.setState({ Endroit: Endroit });
                }
                else {
                    Endroit = " et nous vous attendons à " + value[Jour-3].EmplacementCamion.Ville;
                    this.setState({ Endroit: Endroit });
                }
                DisponibleTexte = "Aujourd'hui nous faisons des Pizzas !";
                this.setState({ DisponibleTexte: DisponibleTexte });
            } else {
                DisponibleTexte = "Aujourd'hui nous ne faisons pas de Pizza, mais regardez notre carte";
                Endroit = " ";
                this.setState({ DisponibleTexte: DisponibleTexte });
                this.setState({ Endroit: Endroit });
                var e = document.getElementById('map');
                e.style.width = '0';
                e.style.height = '0';
                e.style.margin = '0';
            }
        });
    }
    render() {
        return (
            
                <Router forceRefresh={true}>
                    <BodyHomeBody id="bodyhome" >
                        <PageBody>
                            <ImageLogo id= "imagelogo">
                                <img src={logo}/>
                            </ImageLogo>
                            <Titre2 id="texteDispo">{this.state.DisponibleTexte}</Titre2>
                            
                            <SousTitre>Nous ne prenons aucune réservation via notre site.
                            Merci de nous contacter par téléphone.</SousTitre>
                            <BodyBordure id="divjour">
                                <Titre2Couleur>Voici où nous nous situons en fonction du jour</Titre2Couleur>
                                
                                <SousTitreCouleur id= "soustitre">
                                    <BodyBouton id="boutonJour" onClick={this.setJourEmplacement.bind(this,-1,this.state.AdresseEmplacement)}>Jour prédédent</BodyBouton>
                                        {getJourNom(this.state.JourEmplacement)}
                                    <BodyBouton id="boutonJour" onClick={this.setJourEmplacement.bind(this,+1,this.state.AdresseEmplacement)}>Jour suivant</BodyBouton>
                                </SousTitreCouleur>
                                <SousTitre> 
                                    {this.state.AdresseEmplacement}
                                    
                                </SousTitre>
                                <SousTitreCouleurListeL>
                                Communes desservies par la livraison :
                                </SousTitreCouleurListeL>
                                <ListeLivraison>
                                     {this.state.ListeLivraison.map(Pizzas => "-"+(Pizzas.Ville)+" ")} 
                                </ListeLivraison>
                                <SousTitreCouleurListeL>
                                Livraison gratuite à partir de trois pizzas achetées, sinon 3€50.
                                </SousTitreCouleurListeL>
                            </BodyBordure>
                            <Carte id="map" />
                    </PageBody>
                    </BodyHomeBody>
                </Router>
            
        );
    }
}

export default BodyHome;
