import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import './data/user.json'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      
        <nav>
          {/*
            1. Die Loginseite soll default sein

            2. ein Klick auf register und login sollen
            ihre jeweilige Form anzeigen und die andere ausblenden
            
            3. jeder User der user.json soll sich einloggen können

            4.Über die Registrierung sollen neue User
            der user.json hinzugefügt werden

            5. hashe das PW jedes users der sich registriert
            und speichere den hash in der user.json

            6. in der user.json gibt es User mit 3 unterschiedlichen
            Berechtigungen nutze diese um unterschiedliche Inhalte anzuzeigen

            7. User sollen sich ebenfalls ausloggen können und
            gelangen damit wieder auf die Startseite zurück (Login form)
          */}
          <button>Login</button>
          <button>Register</button>
        </nav>
        <main>
          <section>
            <form action="#">
              <label htmlFor="ln">LoginName</label>
              <input autoFocus type="text" id="ln" />
              <label htmlFor="lp">LoginPassword</label>
              <input type="text" id="lp" />
              <button>SignIn</button>
            </form>

            <form action="#">
              <label htmlFor="ln">RegisterName</label>
              <input autoFocus type="text" id="ln" />
              <label htmlFor="lp">RegisterPassword</label>
              <input type="text" id="lp" />
              <label htmlFor="lp">ControllPassword</label>
              <input type="text" id="lp" />
              <button>SignUp</button>
            </form>

            <article>
              <h1>Welcome UserName</h1>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati saepe, similique libero sed, consequuntur asperiores debitis in provident, repudiandae quidem nemo molestias nihil. Repudiandae quasi dolorem qui culpa, sint dolore.</p>
              
              <div className="membership">
                <img src={logo} alt="" />
                <p>Get userPlus to see more</p>
                <button>UserPlus Upgrade</button>
              </div>
              <div className="membership">
                <img src={logo} alt="" />
                <p>Get admin to see more</p>
                <button>Admin Upgrade</button>
              </div>
              <h2>Welcome UserPlus now you are a VIP!</h2>
              <h2>You are an Admin now!</h2>
            </article>
          </section>
        </main>
    </div>
  )
}

export default App
