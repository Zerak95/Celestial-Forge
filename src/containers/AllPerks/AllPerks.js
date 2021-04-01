import React, { Component } from 'react';

import Aux from '../../hoc/Aux';
import Perk from '../../components/Perk/Perk';
import perkData from '../../components/data/main-perks.json';
import PerkList from '../../components/PerkList/PerkList';
import Modal from '../../components/UI/Modal/Modal';
import Backdrop from '../../components/UI/Backdrop/Backdrop';
import Category from '../../components/Perk/Category/Category';

//TODO: delete this before launch [just for testing]
// import perkData from '../../components/data/test.json';

class AllPerks extends Component {
    state = {
        selectedPerk: null,
        showPerk: false,
        currentCP: 800,
        categories: [
            {
                name: 'domain',
                //TODO: change to account for lower case
                //TODO: change to look for domains in file?
                //TODO: or add the rest of the domains
                list: ['Toolkits','Knowledge','Vehicles','Time','Crafting',
                        'Clothing','Magic','Quality','Size','Resources',
                        'Magitech','Alchemy'
                    ]
            },
            {
                name: 'cost',
                list: [100,200,300,400,500,600,700,800,900,1000,1100,1200,1300]
            }
        ],
        ascendingOrder: true,
        viewCatagory: 0,
        displayOwnedPerks: false,
        ownedPerks: {}
    }

    showFullPerkHandler = (perk) => {
        this.setState({selectedPerk: perk, showPerk: true});
    }
    
    cancelFullPerkHandler = () => {
        this.setState({selectedPerk: null, showPerk: false});
    }

    randomPerkHandler = (listOfPerks = Object.values(perkData)) => {

        //TODO: if not single perk and there are enough points random till one that can be aforded is picked.
        
        let randomPerk = listOfPerks[Math.floor(Math.random() * listOfPerks.length)];
        
        if (typeof(randomPerk) == "undefined") {
            return;
        }
        
        if(typeof(randomPerk.single_perk) != "undefined" && !randomPerk.single_perk){
            this.randomPerkHandler(randomPerk.extra_perks);
        }else{
            this.setState({selectedPerk: randomPerk, showPerk: true});
        }
        
        //TODO: account for when there CP for perk is not enough
        
    }

    displayOrderHandler = (event) => {
        if (event.target.value == 'ascending') {
            this.setState({ascendingOrder: true});
        } else if (event.target.value == 'descending') {
            this.setState({ascendingOrder: false});
        }    
    }

    displayCategoryHandler = (event) => {
        this.setState({viewCatagory: event.target.value});
    }

    addPerkToOwned = (perk) => {
        let tempOwnedPerks = {...this.state.ownedPerks};
        tempOwnedPerks[perk.id] = perk;
        this.setState({ownedPerks: tempOwnedPerks});
    }
    
    
    render () {
        return(
            <Aux>
                <Backdrop></Backdrop>

                <Modal show={this.state.showPerk} modalClosed={this.cancelFullPerkHandler}>   
                    <Perk
                        data={this.state.selectedPerk}
                    /> 
                </Modal>

                <button onClick={() => {this.randomPerkHandler()}}>Random</button>

                <label for="order">Order: </label>
                <select name="order" id="order" onChange={this.displayOrderHandler}>
                    <option value="ascending" >ascending</option>
                    <option value="descending">descending</option>
                </select>

                <label for="category">Category: </label>
                <select name="category" id="category" onChange={this.displayCategoryHandler}>
                    {/* TODO: automate this to look through categories*/}
                    <option value={0} >domain</option>
                    <option value={1}>cost</option>
                </select>

                {/* <PerkList 
                    data={Object.values(perkData)} 
                    clicked={this.showFullPerkHandler}
                /> */}

                <Category 
                    data={Object.values(perkData)}
                    category={this.state.categories[this.state.viewCatagory]}
                    clicked={this.showFullPerkHandler}
                    ascendingOrder={this.state.ascendingOrder}
                />

            </Aux>
        );
    }
}

export default AllPerks;