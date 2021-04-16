import { render } from '@testing-library/react';
import { Component } from 'react';
import './App.css';

import Layout from './components/Layout/Layout';
import AllPerks from './containers/AllPerks/AllPerks';

//TODO: Remove this as its temporary
// import Perk from './components/Perk/Perk' 

class App extends Component {
  state = {
      perkListToDisplay: 1
  }

  listOfPerksToDisplayHandler = listNumber => {
      if (listNumber !== this.state.perkListToDisplay) {
          this.setState({perkListToDisplay:listNumber});
      }
  }
  render () {
    return (
      <div className="App">
        <div>
  
        </div>
        <Layout>
          <AllPerks perkList={this.state.perkListToDisplay} />
          {/* <Perk 
            name='Tinkerer'
            origin='RWBY'
            cost='300'
            description="You're a whiz at maintaining, modifying and making things. Everything from Sniper Scyfles to Toaster Ovens, as long as you made it yourself or had the blueprints on hand. Unlock the secret of Variable Weapon Crafting"
          >
            <Perk
              name='Aura'
              origin='RWBY'
              cost='0'
              description="You start off with an unlocked aura."
            />
          </Perk> */}
        </Layout>
      </div>
    );
  }
}

export default App;
