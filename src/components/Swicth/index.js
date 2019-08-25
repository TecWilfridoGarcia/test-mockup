import React from 'react'
import './style.css';
import sale from '../../images/sale.png';
import calendar from '../../images/calendar.png';
import heart from '../../images/heart.png';


class Switch extends React.Component {
  constructor(props) {
    super(props);

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

  componentWillMount() {
    this.setState({
      isCheckedSale: this.props.isCheckedSale,
      isCheckedDate: this.props.isCheckedDate,
      isCheckedFavorite: this.props.isCheckedFavorite
    });
  }

  render() {

    return (
      <div className="switch-container">
        <label>
          <div className="row">
            <div className="col-5 icon">
              <img src={sale} />
            </div>
            <div className="col-7">
              <input ref="switch" checked={this.state.isCheckedSale} onChange={this._handleChangeSale} className="switch" type="checkbox" />
              <div>
                <div></div>
              </div>
            </div>
          </div>
        </label>
        <label>
          <div className="row">
            <div className="col-5 icon">
            <img src={calendar} />
            </div>
            <div className="col-7">
              <input ref="switch" checked={this.state.isCheckedDate} onChange={this._handleChangeDate} className="switch" type="checkbox" />
              <div>
                <div></div>
              </div>
            </div>
          </div>
        </label>

        <label>
          <div className="row">
            <div className="col-5 icon">
              <img src={heart} />
            </div>
            <div className="col-7">
              <input ref="switch" checked={this.state.isCheckedFavorite} onChange={this._handleChangeFavorite} className="switch" type="checkbox" />
              <div>
                <div></div>
              </div>
            </div>
          </div>
        </label>
      </div>
    );
  }
  _handleChangeSale() {
    this.setState({ isCheckedSale: !this.state.isCheckedSale });
    console.log(this.state, 'Sale')
  }
  _handleChangeDate() {
    this.setState({ isCheckedDate: !this.state.isCheckedDate });
    console.log(this.state, 'Date')
  }
  _handleChangeFavorite() {
    this.setState({ isCheckedFavorite: !this.state.isCheckedFavorite });
    console.log(this.state, 'Favorite')
  }

}

export default Switch;
// React.render( <Switch isChecked={ true } />, document.getElementById( "page" ) );
