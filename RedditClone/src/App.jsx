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
      <div className='main-container'>
      <div className='side-drawer'>Side panel
      <div className='sidedrawer-heading'>Feeds</div>
      <a href='' className='sidedrawer-button'>
        <span className='topic-button'>
          <span>Home</span>
          </span>
          </a>
          <a href='' className='sidedrawer-button'>
        <span className='topic-button'>
          <span>Popular</span>
          </span>
          </a>
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
    <div className='main-component-container'>
      <div className='post-container'>
        <div className='rating-header'>
          <div>
            <span className='post-header-category'>Hot</span>
            <span className='post-header-category'>Everywhere</span>
            <span >New</span>
            <span >Top</span>
          </div>
        </div>
        <div className='post'>
          <div className='vote-bar'>votebar</div>
              <div>

          <div className='post-header'>
            <div>r/n</div>
            <span>Posted by u/n</span>
            <span>n hours ago</span>
          </div>

          <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit pariatur, aperiam odio nobis a quod sed quaerat autem similique corrupti velit dolor, ratione saepe in. Quam consequuntur quas porro nostrum.</div>
          <div>image</div>
          <div className='interaction-bar'>
            <div>comments</div>
            <div>share</div>
            <div>save</div>
          </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
    </div>
    </main>
    </>
  )
}

export default App
