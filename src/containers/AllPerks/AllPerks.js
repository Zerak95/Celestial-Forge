import React, { Component } from 'react';

import Aux from '../../hoc/Aux';
import Perk from '../../components/Perk/Perk';
import perkData from '../../components/data/main-perks.json';
import PerkList from '../../components/PerkList/PerkList';
import Modal from '../../components/UI/Modal/Modal';
import Backdrop from '../../components/UI/Backdrop/Backdrop';

class AllPerks extends Component {
    state = {
        selectedPerk: null,
        showPerk: false
    }

    showFullPerk = (perk) => {
        this.setState({selectedPerk: perk, showPerk: true});
        console.log(perk);
    }
    
    cancelFullPerk = () => {
        this.setState({selectedPerk: null, showPerk: false});
    }

    
    
    render () {
        console.log(perkData);
        console.log(Object.values(perkData));
        return(
            <Aux>
                <Backdrop></Backdrop>

                <Modal show={this.state.showPerk} modalClosed={this.cancelFullPerk}>   
                    <Perk
                        data={this.state.selectedPerk}
                    /> 
                </Modal>

                <PerkList 
                    data={Object.values(perkData)} 
                    clicked={this.showFullPerk}
                />

            </Aux>
        );
    }
}

export default AllPerks;