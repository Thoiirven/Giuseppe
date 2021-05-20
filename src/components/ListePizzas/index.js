import React, {Component} from 'react';
import {BrowserRouter as Router,Link} from "react-router-dom";
import { BodyHomeBody, PageBody, Titre2, FlexContainer, FlexItem, FlexItemB, FlexItemP} from './ListePizzas';
import {json,select} from 'd3';
class ListePizzas extends Component { 
    
    state = {
        PizzasBaseCreme : [
        ]
    }
    componentDidMount() {
        json("/data/Pizzas.json").then((value) => {
            this.setState({Nom : value.Nom});
            value.forEach(element => this.state.PizzasBaseCreme.push({Nom : element.Nom}));
            this.setState({Nom : this.state.PizzasBaseCreme[0]});
            console.log(this.state.PizzasBaseCreme[4]);
        });
    }
    render() {
        console.log(this.state.PizzasBaseCreme[4]);
        return (
                <Router forceRefresh={true}>
                    <BodyHomeBody>
                        <PageBody>
                            <Titre2>Une vue des différentes Pizzas disponibles</Titre2>
                            
                            <FlexContainer>
                            {this.state.PizzasBaseCreme.map(Pizzas => (<FlexItem><FlexItemP>{Pizzas.Nom}</FlexItemP></FlexItem>))}
                                <FlexItem>
                                    <FlexItemP>Elections présidentielles - 2012 </FlexItemP>
                                    <Link to="/2012"><FlexItemB>Voir</FlexItemB></Link>
                                </FlexItem>
                                <FlexItem>
                                    <FlexItemP>Elections présidentielles - 2007</FlexItemP>
                                    <Link to="/2007"><FlexItemB   >Voir</FlexItemB></Link>
                                </FlexItem>
                                <FlexItem>
                                    <FlexItemP>Elections présidentielles - 2002</FlexItemP>
                                    <Link to="/2002"><FlexItemB>Voir</FlexItemB></Link>
                                </FlexItem>
                                <FlexItem>
                                    <FlexItemP>Elections présidentielles - 1995</FlexItemP>
                                    <Link to="/1995"><FlexItemB>Voir</FlexItemB></Link>
                                </FlexItem>
                                <FlexItem>
                                    <FlexItemP>Elections présidentielles - 1988</FlexItemP>
                                    <Link to="/1988"><FlexItemB>Voir</FlexItemB></Link>
                                </FlexItem>
                                <FlexItem>
                                    <FlexItemP>Elections présidentielles - 1981</FlexItemP>
                                    <Link to="/1981"><FlexItemB>Voir</FlexItemB></Link>
                                </FlexItem>
                                <FlexItem>
                                    <FlexItemP>Elections présidentielles - 1974</FlexItemP>
                                    <Link to="/1974"><FlexItemB>Voir</FlexItemB></Link>
                                </FlexItem>
                                <FlexItem>
                                    <FlexItemP>Elections présidentielles - 1969</FlexItemP>
                                    <Link to="/1969"><FlexItemB>Voir</FlexItemB></Link>
                                </FlexItem>
                            </FlexContainer>
                        </PageBody>
                    </BodyHomeBody>
                </Router>
        );
    }
    
}

export default ListePizzas;
