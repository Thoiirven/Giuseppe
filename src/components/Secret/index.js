import React, { Component } from 'react';
import myData from '../../public/Secret.json';
import { BodyHomeBody, PageBody, Titre2,Form, Textarea } from './Secret';

class Secret extends Component {
    
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    state = {
        value: "Mot de passe",
        utilisateur: "Nom utilisateur",
        motedepasse: '2828',
        nombreVu:0,
        nombreEssai:0
    }

    handleChange(event) {
        if(event.target.name === "Nom utilisateur"){
            this.setState({ utilisateur: event.target.value });
        }else{
            this.setState({ value: event.target.value });
        }
    }

    handleSubmit(event) {
        var Valeur = this.state.value;
        var util = this.state.utilisateur;
        if(util !== "Giuseppe"){
            alert("Mauvais nom d'utilisateur")
        }else{
                if (Valeur === this.state.motedepasse && this.state.nombreVu === 0) {
                    alert('Bien joué voici votre code pour votre Pizza: R2l1c2VwcGU= \n fun fact: ce code représente le mot Giuseppe mais en base 64');
                    this.setState({ nombreVu: this.state.nombreVu + 1 });
                }else {
                    this.setState({ nombreEssai: this.state.nombreEssai + 1 });
                    alert('Mauvais mot de passe ! Déjà ' + this.state.nombreEssai + ' personnes ont essayé');
                }
                if(this.state.nombreVu > 0){
                    alert('Le code a déjà été trouvé')
                }
        }
        event.preventDefault();
    }
    
    render() {
        return (
                <BodyHomeBody>
                    <PageBody>
                        <Titre2>Vous venez de découvrir l'existence d'un secret... Mais avez-vous bien regardé tout le site ?</Titre2>
                        <Form onSubmit={this.handleSubmit} id="SousTitre">
                        Donnez le mot de passe dissimulé pour débloquer quelque chose :
                            <label >
                                
                                    <Textarea value={this.state.utilisateur} name="Nom utilisateur" onChange={this.handleChange} />
                                    <Textarea value={this.state.value} name="Mot de passe" onChange={this.handleChange} />
                            </label>
                            <input type="submit" value="Envoyer" />
                        </Form>
                    </PageBody>
                </BodyHomeBody>
        );
    }
}

export default Secret;