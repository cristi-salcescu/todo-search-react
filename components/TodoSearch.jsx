import React from "react";
import PropTypes from 'prop-types';
export default class TodoSearch extends React.Component { 
  constructor(props){
    super(props);
    this.search = this.search.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  
  componentWillMount() {
    this.setState({text: ""});
  }
  
  search(){
    const query = Object.freeze({ text: this.state.text });
    if(this.props.onSearch)
      this.props.onSearch(query);
  }
  
  handleChange(event) {
    this.setState({text: event.target.value});
  }

  handleKeyPress(event) {
    if (event.key === 'Enter') {
      this.search();
    }
  }

  handleSubmit(event){
    event.preventDefault();
  }
  
  render() {
    return <form className="search-form" onSubmit={this.handleSubmit}>
      <input onChange={this.handleChange} placeholder="Search ..." className="input" value={this.state.text} onKeyPress={this.handleKeyPress} />
      <button onClick={this.search} className="btn" type="button">Search</button>
    </form>;
  }
}

TodoSearch.propTypes = {
  onSearch: PropTypes.func
};
