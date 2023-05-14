import './App.css'

function App() {

  return (
    <>
    <header>
      <div className='header-container'>
        <div className='nav-left'>
      <div>logo</div>
      <div className='header-searchbar-container' >
        <form className='input-container'>
          <input className='header-searchbar' placeholder='Search Reddit'/>
        </form>
      </div>
      </div>
      <div>Login</div>
      </div>
    </header>
    <main>
      <div className='side-drawer'>Side panel
      <div className='sidedrawer-heading'>Feeds</div>
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
          <div className='sidedrawer-heading'>Topics</div>

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
