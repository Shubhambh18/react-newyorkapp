import React from 'react';
import axios from 'axios'



class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }
    getPosts = () => {
        axios.get('https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=8ElS0akAhGS9prX1pHBUUdK4oRgraDfZ')
            .then(response => {
                const data = JSON.parse(JSON.stringify(response.data.response.docs));
                console.log(data);
                this.setState({
                    posts: data.slice()
                });
            })
    }


    render() {
        let postList = this.state.posts.map(
            p => (
                <div key={p.abstract}>
                    Abstract: {p.abstract}<br />
                    News Desk: {p.news_desk}<br />
                    Section Name:{p.section_name}<br />
                    Type:{p.type_of_material}
                    <hr />
                </div>
            )
        );
        return (
            <div >
                <div className='row'>
                    <div className='col'>
                        <h4>Search</h4>
                        <input type="text"></input>
                    </div>
                </div>
                <div>
                    <button onClick={this.getPosts}>Search </button>
                    {postList}
                </div>
            </div>
        );
    }
}

export default Search;