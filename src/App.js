import './App.css';

import Layout from './components/Layout/Layout';
import AllPerks from './containers/AllPerks/AllPerks';

//TODO: Remove this as its temporary
// import Perk from './components/Perk/Perk' 

function App() {
  return (
    <div className="App">
      <div>

      </div>
      <Layout>
        <AllPerks/>
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

export default App;
