import React from 'react'

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { formData: ""}
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(evt) {
    const {value} = evt.target;
    this.setState({formData: value})
  }

  handleSubmit(evt) {
    evt.preventDefault()
    this.props.update(this.state.formData) 
    this.setState({formData: ""})
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            id="search"
            placeholder="Search term"
            value={this.state.formData}
            onChange={this.handleChange}>
          </input>
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default SearchForm;