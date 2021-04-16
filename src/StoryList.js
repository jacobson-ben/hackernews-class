import SearchForm from './SearchForm'
import Story from './Story';
import React from 'react'
import axios from 'axios'

const BASE_URL = `https://hn.algolia.com/api/v1/search?query=`


class StoryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {stories: []}
    this.updateStoryList = this.updateStoryList.bind(this)
  }

  async componentDidMount() {
    const response = await axios.get(`${BASE_URL}react`)
    console.log(response)
    const hits = response.data.hits
    const stories = hits.map(hit => ({title: hit.title, url: hit.url}))
    this.setState({stories: stories})
  }

  async updateStoryList(searchTerm) {
    const response = await axios.get(`${BASE_URL}${searchTerm}`)
    const hits = response.data.hits
    const stories = hits.map(hit => ({title: hit.title, url: hit.url}))
    this.setState({stories: stories})
  }

  render() {
    return (
      <div>
        <SearchForm update={this.updateStoryList}/>
        <ul>
        {this.state.stories.map(story => <li><Story story={story} key={story.url}/></li>)}
        </ul>
      </div>
    )
  }
}

export default StoryList;