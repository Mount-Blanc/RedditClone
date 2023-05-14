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
      <button className='sidedrawer-button'>
        <span className='topic-button'>
          <span>Home</span>
          </span>
          </button>
          <button className='sidedrawer-button'>
        <span className='topic-button'>
          <span>Popular</span>
          </span>
          </button>
          <div className='sidedrawer-heading'>Topics</div>

          <button className='sidedrawer-button'>
        <span className='topic-button'>
          <span>Gaming</span>
          </span>
          </button>
          <button className='sidedrawer-button'>
        <span className='topic-button'>
          <span>Sports</span>
          </span>
          </button>
          <button className='sidedrawer-button'>
        <span className='topic-button'>
          <span>Business,Economics</span>
          </span>
          </button>
          <button className='sidedrawer-button'>
        <span className='topic-button'>
          <span>Crypto</span>
          </span>
          </button> 
                   </div>

    </main>
    </>
  )
}

export default App
