import React,{Component} from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import { BodyHomeBody, PageBody, Titre2, Carte} from './BodyHome';
import {json,select} from 'd3';

function getJourNom() {
    switch (new Date().getDay()) {
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
    }
    componentDidMount() {
        json("/data/Emplacement.json").then((value) => {
            var DisponibleTexte, Jour, Endroit;
            Jour = new Date().getDay();
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
    render() {
        return (
            
                <Router forceRefresh={true}>
                    <BodyHomeBody>
                        <PageBody>
                            <Titre2 id="texteDispo">{this.state.DisponibleTexte}</Titre2>
                            <Carte id="map" />
                            <Titre2>Nous sommes {getJourNom()}{this.state.Endroit}</Titre2>
                        Test
                    </PageBody>
                    </BodyHomeBody>
                </Router>
            
        );
    }
}
/*{this.state.DisponibleTexte}
{this.state.Endroit}
const BodyHome = () => {
    var DisponibleTexte, Jour, Endroit;
    const donnee = new Donnee();
    Jour = new Date().getDay() + 1;
    Jour = 0;

    if (Jour > 2 || Jour === 0) {
        if (Jour === 0) {
            console.log("est dans la classe")
            let ville = donnee.getVille(0);
            Endroit = " et nous vous attendons à " + ville;
            console.log("est sortie de la classe")
        }
        else {
            
            Endroit = " et nous vous attendons à " + donnee.getVille(Jour - 2);
        }
        DisponibleTexte = "Aujourd'hui nous faisons des Pizzas !";
        console.log(Endroit);
    } else {
        DisponibleTexte = "Aujourd'hui nous ne faisons pas de Pizza, mais regardez notre carte";
        Endroit = " ";
    }
    json("/data/Emplacement.json").then((value) => {
        var corps = select("#texteDispo");
        corps.append( value[0].EmplacementCamion.Ville);
        console.log(value[0].EmplacementCamion.Ville);
    });

    console.log(Endroit);
    return (
        <>
            <Router forceRefresh={true}>
                <BodyHomeBody>
                    <PageBody>
                        <Titre2 id = "texteDispo">{DisponibleTexte}</Titre2>
                        <Titre2>Nous sommes {getJourNom()}{Endroit}</Titre2>
                        <Carte id = "map"/>
                        Test
                    </PageBody>
                </BodyHomeBody>
            </Router>
        </>
    );
}*/

export default BodyHome;
