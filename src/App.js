import './App.css';
import Layout from './components/Layout/Layout';

//TODO: Remove this as its temporary
import Perk from './components/Perk/Perk' 

function App() {
  return (
    <div className="App">
      <Layout>
        <Perk 
          name='Tinkerer'
          origin='RWBY'
          cost='300'
          content="You're a whiz at maintaining, modifying and making things. Everything from Sniper Scyfles to Toaster Ovens, as long as you made it yourself or had the blueprints on hand. Unlock the secret of Variable Weapon Crafting"
        />
      </Layout>
    </div>
  );
}

export default App;
