import React,{Component} from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import { BodyHomeBody, PageBody, Titre2, Carte,ImageLogo} from './BodyHome';
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
        default: return "bug du nombre de jour";
    }
}
class BodyHome extends Component {
    state = {
        DisponibleTexte: null,
        Endroit: null,
        Jour:null
    }
    componentDidMount() {
        json("/data/Emplacement.json").then((value) => {
            var DisponibleTexte, Jour, Endroit;
            Jour = new Date().getDay();
            this.setState({ Jour: Jour });
            if (Jour > 2 || Jour === 0) {
                if (Jour === 0) {
                    Endroit = " et nous vous attendons à " + value[4].EmplacementCamion.Ville;
                    this.setState({ Endroit: Endroit });
                }
                else {
                    Endroit = " et nous vous attendons à " + value[Jour-2].EmplacementCamion.Ville;
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
    getJour(){
        return this.state.Jour;
    }
    render() {
        return (
            
                <Router forceRefresh={true}>
                    <BodyHomeBody>
                        <PageBody>
                            <ImageLogo>
                                <img src={logo}/>
                            </ImageLogo>
                            <Titre2 id="texteDispo">{this.state.DisponibleTexte}</Titre2>
                            <Carte id="map" />
                            <Titre2>Nous sommes {getJourNom(this.state.Jour)}{this.state.Endroit}</Titre2>
                    </PageBody>
                    </BodyHomeBody>
                </Router>
            
        );
    }
}

export default BodyHome;
