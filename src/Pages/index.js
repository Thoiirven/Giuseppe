import React, { useState } from 'react';
import "../App.css";
import Carte from '../FranceMap';
import BarPourcentage from '../components/BarPourcentage';
import "../components/BarPourcentage";

const CarteRendering = (Annee) => {
    const [data_carte, setDataCarte] = useState("departement");
    const [data_annee, setDataAnnee] = useState(Annee.Annee.Anneecarte);
    console.log(Annee);
    return (
        <React.Fragment>
            <BarPourcentage data={data_annee} />

            <h2>La carte des éléctions présidentielles</h2>
            <Carte data={data_carte} annee={data_annee}/>
            <h2 >Selection des vues</h2>

            <select
                value={data_carte}
                onChange={event => setDataCarte(event.target.value,Annee)}>
                <option value="departement">Département</option>
                <option value="commune">Commune</option>
                <option value="canton">Canton</option>
                <option value="arrondissement">Arrondissement</option>
            </select>
        </React.Fragment>
    )
}

export default CarteRendering;