import React, { Component } from 'react';

import Aux from '../../hoc/Aux';
import Perk from '../../components/Perk/Perk';
// import perkData from '../../components/data/main-perks.json';
import PerkList from '../../components/PerkList/PerkList';
import Modal from '../../components/UI/Modal/Modal';
import Backdrop from '../../components/UI/Backdrop/Backdrop';
import Category from '../../components/Perk/Category/Category';

//TODO: delete this before launch [just for testing]
import perkData from '../../components/data/test.json';

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
                // list: ['Toolkits','Knowledge','Vehicles','Time','Crafting',
                //         'Clothing','Magic','Quality','Size','Resources',
                //         'Magitech','Alchemy'
                //     ]
                list:[]
            },
            {
                name: 'cost',
                // list: [100,200,300,400,500,600,700,800,900,1000,1100,1200,1300]
                list: []
            },
            {
                name: 'origin',
                list: []

            }
        ],
        ascendingOrder: true,
        viewCatagory: 0,
        isDisplayOwnedPerks: true,
        ownedPerks: {},
        perksLeftToOwn: {}
    }

    componentDidMount(){
        console.log('componentDidMount()');
        this.initialiseAllPerks();
        this.initialiseOwnedPerks();
    }


    showFullPerkHandler = (perk) => {
        this.setState({selectedPerk: perk, showPerk: true});
    }
    
    cancelFullPerkHandler = () => {
        this.setState({selectedPerk: null, showPerk: false});
    }

    randomPerkHandler = (ObjectOfPerks) => {
        const arrayOfPerks = Object.values(ObjectOfPerks);
        
        if (arrayOfPerks.length === 0) {
            alert('array is empty');
            return;
        }


        //TODO: if not single perk and there are enough points random till one that can be aforded is picked.
        
        let randomPerk = arrayOfPerks[Math.floor(Math.random() * arrayOfPerks.length)];
        
        if (typeof(randomPerk) == "undefined") {
            console.log('typeof(randomPerk) == "undefined"');
            console.log(arrayOfPerks);
            return;
        }
        
        if(typeof(randomPerk.single_perk) != "undefined" && !randomPerk.single_perk){
            //TODO: might need to change tempate from extra_perks to something else
            this.randomPerkHandler(randomPerk.extra_perks);
        }else{
            // console.log('this.processRandomPerk(randomPerk);');
            this.processRandomPerk(randomPerk);
            // this.setState({selectedPerk: randomPerk, showPerk: true});
        }
        
        //TODO: account for when there CP for perk is not enough
        
    }

    processRandomPerk = randomPerk => {
        if (this.state.isDisplayOwnedPerks) {
            this.addPerkToOwned(randomPerk);
        } else {
            this.setState({selectedPerk: randomPerk, showPerk: true});
        }
    } 

    displayOrderHandler = event => {
        if (event.target.value == 'ascending') {
            this.setState({ascendingOrder: true});
        } else if (event.target.value == 'descending') {
            this.setState({ascendingOrder: false});
        }    
    }

    displayCategoryHandler = event => {
        this.setState({viewCatagory: event.target.value});
    }

    addPerkToOwned = perk => {
        let tempOwnedPerks = {...this.state.ownedPerks};
        let tempPerksLeftToOwn = {...this.state.perksLeftToOwn};

        tempOwnedPerks[perk.id] = perk;

        if (typeof(perk.parentId) != "undefined") {
            tempPerksLeftToOwn[perk.parentId].extra_perks = 
                    tempPerksLeftToOwn[perk.parentId].extra_perks.filter(item => item.id !== perk.id);

            if(tempPerksLeftToOwn[perk.parentId].extra_perks.length === 0){
                delete tempPerksLeftToOwn[perk.parentId];
            }
        }else{
            delete tempPerksLeftToOwn[perk.id];
        }

        this.setState({ownedPerks: tempOwnedPerks, perksLeftToOwn: tempPerksLeftToOwn,
                            selectedPerk: perk, showPerk: true});
    }

    initialiseOwnedPerks = () => {
        //TODO: check if there is data in local storage
        //TODO: delete owned perks
        //TODO: delete perks the owner doesnt want to roll from
        this.setState({perksLeftToOwn: perkData});
    }

    initialiseAllPerks = () => {
        //TODO: refine this
        Object.values(this.state.categories).forEach(catagory => {
            if (catagory.list.length === 0) {
                Object.values(perkData).forEach(perk => {
                    if (!catagory.list.includes(perk[catagory.name])) {
                        catagory.list.push(perk[catagory.name])
                    }
                });
            }
        });
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

                <button onClick={() => {
                        if (this.state.isDisplayOwnedPerks) {
                            this.randomPerkHandler(this.state.perksLeftToOwn);
                        }else{
                            this.randomPerkHandler(perkData);
                        }
                    }}>Random</button>

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
                    <option value={2}>origin</option>
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