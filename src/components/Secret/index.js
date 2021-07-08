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
        utilisateur: "Nom utilisateur"
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
        var fs = require('browserify-fs');
        var content;
        var jsonT, obj,test;

        if(util !== "Giuseppe"){
            alert("Mauvais nom d'utilisateur")
        }else{
            fs.readFile(myData, 'utf8', function (err, data) {
                test = JSON.parse(data);
                content = test;
                console.log(content.table)
                if (Valeur === JSON.stringify(content.table) && content.vu === 0) {
                    alert('Bien joué voici votre code pour votre Pizza: R2l1c2VwcGU= \n fun fact: ce code représente le mot Giuseppe mais en base 64');
                    obj = {
                        vu: content.vu + 1,
                        Nombre: content.Nombre,
                        table: content.table
                    };

                    jsonT = JSON.stringify(obj);
                    fs.writeFile(myData, jsonT, function () {
                        fs.readFile(myData, 'utf-8', function (err, data) {
                            console.log(data);
                        });
                    }
                    );
                }else {
                        obj = {
                            vu: 0,
                            Nombre: content.Nombre + 1,
                            table: content.table
                        };
                        jsonT = JSON.stringify(obj);
                        fs.writeFile(myData, jsonT, function () {
                            fs.readFile(myData, 'utf-8', function (err, data) {
                                console.log(data);
                            });
                        }
                        );
                    alert('Mauvais mot de passe ! Déjà ' + content.Nombre + ' personnes ont essayé');
                }
                if(content.vu > 0){
                    alert('Le code a déjà été trouvé')
                }
    
    
            });
    
        }
        


        event.preventDefault();
    }

    componentDidMount() {
        
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