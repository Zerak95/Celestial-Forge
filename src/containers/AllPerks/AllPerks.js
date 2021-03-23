import React, { Component } from 'react';

import Aux from '../../hoc/Aux';
import Perk from '../../components/Perk/Perk';
import perkData from '../../components/data/main-perks.json';
import PerkList from '../../components/PerkList/PerkList';
import Modal from '../../components/UI/Modal/Modal';
import Backdrop from '../../components/UI/Backdrop/Backdrop';

//TODO: delete this before launch [just for testing]
// import perkData from '../../components/data/test.json';

class AllPerks extends Component {
    state = {
        selectedPerk: null,
        showPerk: false,
        currentCP: 800
    }

    showFullPerkHandler = (perk) => {
        this.setState({selectedPerk: perk, showPerk: true});
    }
    
    cancelFullPerkHandler = () => {
        this.setState({selectedPerk: null, showPerk: false});
    }

    randomPerkHandler = (listOfPerks) => {
        
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

    //TODO: fix display
    
    
    render () {
        return(
            <Aux>
                <Backdrop></Backdrop>

                <Modal show={this.state.showPerk} modalClosed={this.cancelFullPerkHandler}>   
                    <Perk
                        data={this.state.selectedPerk}
                    /> 
                </Modal>

                <button onClick={this.randomPerkHandler.bind(this, Object.values(perkData))}>Random</button>

                <PerkList 
                    data={Object.values(perkData)} 
                    clicked={this.showFullPerkHandler}
                />

            </Aux>
        );
    }
}

export default AllPerks;