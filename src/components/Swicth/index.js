import React from 'react'
import './style.css';

class Switch extends React.Component {
  constructor ( props ) {
      super( props );
  
  this.state = {
    isCheckedSale: false,
    isCheckedDate: false,
    isCheckedFavorite: false,
      }
      this._handleChangeSale = this._handleChangeSale.bind(this);
      this._handleChangeDate = this._handleChangeDate.bind(this);
      this._handleChangeFavorite = this._handleChangeFavorite.bind(this);
      console.log(this.state, 'state');
  }

componentWillMount () {
  this.setState( { isCheckedSale: this.props.isCheckedSale, 
                   isCheckedDate: this.props.isCheckedDate,
                   isCheckedFavorite: this.props.isCheckedFavorite 
                  } );
}

  render () {

      return(
          <div className="switch-container">
              <label>
              <div className="row">
                <div className="col-5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24"><path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/><path fill="none" d="M0 0h24v24H0z"/></svg>
                </div>
                <div className="col-7">
                <input ref="switch" checked={ this.state.isCheckedSale } onChange={ this._handleChangeSale } className="switch" type="checkbox" />
                  <div>
                      <div></div>
                  </div>
                </div>
                </div>
              </label>

              <label>
                <div className="row">
                <div className="col-5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24"><path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/><path fill="none" d="M0 0h24v24H0z"/></svg>
                </div>
                <div className="col-7">
                <input ref="switch" checked={ this.state.isCheckedDate } onChange={ this._handleChangeDate } className="switch" type="checkbox" />
                  <div>
                      <div></div>
                  </div>
                </div>
                </div>
              </label>

              <label>
              <div className="row">
                <div className="col-5">
                <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"/></svg>
                </div>
                <div className="col-7">
                <input ref="switch" checked={ this.state.isCheckedFavorite } onChange={ this._handleChangeFavorite } className="switch" type="checkbox" />
                  <div>
                      <div></div>
                  </div>
                </div>
                </div>
              </label>
          </div>
      );
  }
  _handleChangeSale () {
  this.setState({isCheckedSale: !this.state.isCheckedSale});
  console.log(this.state, 'Sale')
  }
  _handleChangeDate () {
    this.setState({isCheckedDate: !this.state.isCheckedDate});
    console.log(this.state, 'Date')
    }
    _handleChangeFavorite () {
      this.setState({isCheckedFavorite: !this.state.isCheckedFavorite});
      console.log(this.state, 'Favorite')
    }

}

export default Switch;
// React.render( <Switch isChecked={ true } />, document.getElementById( "page" ) );
