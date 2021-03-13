import './App.css';
import Layout from './components/Layout/Layout';

//TODO: Remove this as its temporary
import Perk from './components/Perk/Perk' 

function App() {
  return (
    <div className="App">
      <div>

      </div>
      <Layout>
        <Perk 
          name='Tinkerer'
          origin='RWBY'
          cost='300'
          content="You're a whiz at maintaining, modifying and making things. Everything from Sniper Scyfles to Toaster Ovens, as long as you made it yourself or had the blueprints on hand. Unlock the secret of Variable Weapon Crafting"
        >
          <Perk
            name='Aura'
            origin='RWBY'
            cost='0'
            content="You start off with an unlocked aura."
          />
        </Perk>
      </Layout>
    </div>
  );
}

export default App;
