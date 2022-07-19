import React, { Component } from "react"
import css from './saerchbar.module.css'

export default class Searchbar extends Component {
  state = { name: '' }
  
handleChange = event => {
  this.setState({ name: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();    
    this.props.showImage(this.state.name);
    event.currentTarget.reset();
  }
  
  render() {
    return (
      <header className={ css.header}>
      <form className={css.form} onSubmit={this.handleSubmit}>
        <button className={css.btnForm} onClick={this.handleSubmit} type="submit" >
          <span>🔍</span>
        </button>

          <input
            className={css.inoutForm}
            value={this.state.name}
            type="text"
            name="name"
            onChange={this.handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            placeholder="Search images and photos"
            required
          />
          
      </form>
  </header>)
}
}

  
