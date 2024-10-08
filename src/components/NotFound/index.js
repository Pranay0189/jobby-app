import Header from "../Header"
import "./index.css"

const NotFound = () => (
  <>
    <Header />

    <div className="not-found-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/jobby-app-not-found-img.png"
        className="notfound-img"
        alt="notfound"
      />
      <h1 className="heading">Page Not Found...</h1>
      <p className="notfound-desc">
        We are sorry, the page you are requested could not be found.
      </p>
    </div>
  </>
)
export default NotFound
