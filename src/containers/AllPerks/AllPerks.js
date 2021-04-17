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
        // isPerkOwned: false
        perksLeftToOwn: {},
        // perkListToDisplay [1: all, 2: to own, 3: owned]
        perkListToDisplay: 1
    }

    componentDidMount(){
        console.log('componentDidMount()');
        this.initialiseAllPerks();
        this.initialiseOwnedPerks();
        this.listOfPerksToDisplay();
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('!!!!!!!perkList !== this.props.perkList');
    //     console.log(nextProps.perkList !== this.props.perkList);
    //     return nextProps.perkList !== this.props.perkList;
    // }

    componentDidUpdate(prevProps, prevState){
        console.log("@@@@@@@componentDidUpdate is called");
        if (prevProps.perkList !== this.props.perkList) {
            this.setState({perkListToDisplay: this.props.perkList});
        }
    }
    

    //TODO: reload if a perk is added to list of owned. and on owned page??

    //TODO: fix add and remove button
    showFullPerkHandler = (perk) => {
        if (this.state.isDisplayOwnedPerks) {
            this.checkIfOwnedPerkHandler(perk);
        }

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
            this.addPerkToOwnedHandler(randomPerk);
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

    addPerkToOwnedHandler = perk => {
        let tempOwnedPerks = {...this.state.ownedPerks};
        let tempPerksLeftToOwn = {...this.state.perksLeftToOwn};

        tempOwnedPerks[perk.id] = perk;

        //TODO: change to if ('key' in myObj)
        if (typeof(perk.parentId) != "undefined") {
            tempPerksLeftToOwn[perk.parentId].extra_perks = 
                    tempPerksLeftToOwn[perk.parentId].extra_perks.filter(item => item.id !== perk.id);

            if(tempPerksLeftToOwn[perk.parentId].extra_perks.length === 0){
                delete tempPerksLeftToOwn[perk.parentId];
            }
        }else{
            delete tempPerksLeftToOwn[perk.id];
        }

        // console.log('tempOwnedPerks');
        // console.log(tempOwnedPerks);
        // console.log('tempPerksLeftToOwn');
        // console.log(tempPerksLeftToOwn);
        // console.log('perkData');
        // console.log(perkData);

        this.setState({ownedPerks: tempOwnedPerks, perksLeftToOwn: tempPerksLeftToOwn,
                            selectedPerk: perk, showPerk: true,
                            selectedPerk: this.state.ownedPerks[perk.id]});
        
        // this.requestUpdate();
    }

    removePerkFromOwnedHandler = perk => {
        let tempOwnedPerks = {...this.state.ownedPerks};
        let tempPerksLeftToOwn = {...this.state.perksLeftToOwn};
        let tempId = perk.id;

        

        //TODO: change to if ('key' in myObj)
        //TODO: acount for cp when removing
        if (typeof(perk.parentId) != "undefined") {
            if (!(perk.parentId in tempPerksLeftToOwn)) {
                tempPerksLeftToOwn[perk.parentId] = perkData[perk.parentId];
                tempPerksLeftToOwn[perk.parentId].extra_perks = [];
            } 

            tempPerksLeftToOwn[perk.parentId].extra_perks.push(perk);
            tempId = perk.parentId;

        }else{
            tempPerksLeftToOwn[perk.id] = perk;
        }

        delete tempOwnedPerks[perk.id];
        

        console.log('tempOwnedPerks');
        console.log(tempOwnedPerks);
        // console.log('tempPerksLeftToOwn');
        // console.log(tempPerksLeftToOwn);

        this.setState({ownedPerks: tempOwnedPerks, perksLeftToOwn: tempPerksLeftToOwn,
                            selectedPerk: perk, showPerk: true,
                            selectedPerk: this.state.perksLeftToOwn[tempId]});
    }

    checkIfOwnedPerkHandler = perk => {
        if (perk.id in this.state.ownedPerks) {
            // this.setState({isPerkOwned: true});
            return true;
        } else {
            // this.setState({isPerkOwned: false});
            return false;
        }
    }

    initialiseOwnedPerks = () => {
        //TODO: check if there is data in local storage
        //TODO: delete owned perks
        //TODO: delete perks the owner doesnt want to roll from
        this.setState({perksLeftToOwn: JSON.parse(JSON.stringify(perkData))});
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

    listOfPerksToDisplay = () => {
        // console.log('listOfPerksToDisplay is called');
        //TODO: make more efficient
        let listToDisplay;
        
        if (this.state.perkListToDisplay === 1) {
            listToDisplay = Object.values(perkData);
        } else if (this.state.perkListToDisplay === 2) {
            listToDisplay = Object.values(this.state.perksLeftToOwn);
        } else if (this.state.perkListToDisplay === 3) {
            listToDisplay = Object.values(this.state.ownedPerks);
        }

        return listToDisplay;
        
        // console.log('listToDisplay');
        // console.log(listToDisplay);
        // this.setState({perkListToDisplay: listToDisplay});
    }


    render () {

        console.log('this.state');        
        console.log(this.state);        

        return(
            <Aux>
                <Backdrop></Backdrop>

                <Modal show={this.state.showPerk} modalClosed={this.cancelFullPerkHandler}>   
                    <Perk
                        data={this.state.selectedPerk}
                        checkIfPerkOwned={this.checkIfOwnedPerkHandler}
                        addPerk={this.addPerkToOwnedHandler}
                        removePerk={this.removePerkFromOwnedHandler}
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
                    data={this.listOfPerksToDisplay()}
                    category={this.state.categories[this.state.viewCatagory]}
                    clicked={this.showFullPerkHandler}
                    ascendingOrder={this.state.ascendingOrder}
                />
                {/* {console.log('$$$$$$$ this.state $$$$$$$$')}
                {console.log(this.state)} */}

            </Aux>
        );
    }
}

export default AllPerks;