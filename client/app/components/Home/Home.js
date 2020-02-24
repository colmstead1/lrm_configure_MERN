import React, { Component } from 'react';
import { Link } from 'react-router-dom'

let isConf, isResx, resxTitle, isJson, jsonTitle, isProperties, proptertiesTitle;
const Repos = ({id, title, configured, description, fileJson, fileResx, fileProperties, confButton}) =>{
  if (configured === true) {
    //isConf = <img src={blueCheck} alt="verified" width="20px"/>;
    isConf = 'blueCheck';
  } else {
    isConf = '';
  }

  if (fileJson === true) {
    //isJson = <img src={redDot} alt="verified" width="15px"/>;
    isJson = 'RedDot';
    jsonTitle = " .json  ";
  } else {
    isJson = '';
    jsonTitle = '';
  }
  if (fileResx === true) {
    //isResx = <img src={yellowDot} alt="verified" width="15px"/>;
    isResx = 'YellowDot';
    resxTitle = " .resx  ";
  } else {
    isResx = '';
    resxTitle = "";
  }if (fileProperties === true) {
    //isProperties = <img src={greenDot} alt="verified" width="15px"/>;
    isProperties = 'GreenDot';
    proptertiesTitle = ' .properties';
  } else {
    isProperties = '';
    proptertiesTitle = '';
  }

  return(
    <div className='repoContainer'>
      <section>
        <div>
          <h2 id="inLine">{title}</h2>
          <aside>{isConf}</aside>
          <button id="confButton"><Link to={{pathname: "/form", state:{id: {id}}}}>{confButton}</Link></button>
        </div>
        <p>{description}</p>
        <p>{isJson}{jsonTitle}   {isResx}{resxTitle}   {isProperties}{proptertiesTitle}</p>
      </section>
    </div>
  )
};

export default class Home extends Component {
  constructor(){
    super();
    this.state = {
      search: ''
    };
  }
  updateSearch(event){
    this.setState({search: event.target.value});
  }

  render() {
    const { repos } = this.props;
    let searchResults = repos.filter(
      (repo) => {
        return repo.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
      }
    );
    return (
      <div>
        <button><a href="https://github.com/login/oauth/authorize?client_id=629e93dcd67398b8f56a">Sign in with Github</a></button>
        <input id="repoSearch"
               type="search"
               placeholder="Search..."
               value={this.state.search}
               onChange={this.updateSearch.bind(this)}/>
        {searchResults.map(
          (repo, i) =>
            <Repos
              key={i}
              title={repo.title}
              configured={repo.configured}
              description={repo.description}
              fileJson={repo.fileJson}
              fileResx={repo.fileResx}
              fileProperties={repo.fileProperties}
              confButton={repo.confButton}
            />
        )}
      </div>
    )
  }
}
