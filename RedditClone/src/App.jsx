import './App.css'

function App() {

  return (
    <>
    <header>
      <div className='header-container'>
        <div className='nav-left'>
      <div>logo</div>
      <div >
        <form>
          <input className='header-searchbar' placeholder='Search Reddit'/>
        </form>
      </div>
      </div>
      <div>Login</div>
      </div>
    </header>
    <main>
      <div className='side-drawer'>Side panel
      <button>
        <span>
          <span>Home</span>
          </span>
          </button>
          <button>
        <span>
          <span>Popular</span>
          </span>
          </button>
          <button>
        <span>
          <span>Gaming</span>
          </span>
          </button>
          <button>
        <span>
          <span>Sports</span>
          </span>
          </button>
          <button>
        <span>
          <span>Business,Economics</span>
          </span>
          </button>
          <button>
        <span>
          <span>Crypto</span>
          </span>
          </button> 
                   </div>

    </main>
    </>
  )
}

export default App
