import React from 'react';
import axios from 'axios'



class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            name:''
        }
    }
    handleChange=event=>{
        this.setState({
            name:event.target.value
        })
    }
    getPosts = () => {
        axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${this.state.name}&api-key=jK2AjLdSMvSJJETWeCpL5SyFa5kDulvN`)
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
            value => (
                <div key={value.abstract}>
                    Abstract: {value.abstract}<br />
                    News Desk: {value.news_desk}<br />
                    Section Name:{value.section_name}<br />
                    Type:{value.type_of_material}<br />
                    <hr />
                </div>
            )
        );
        return (
            <div >
                <div className='row'>
                    <div className='col'>
                        <h4>Search</h4><br/><br/>
                        <input type="text" value={this.state.name} onChange={this.handleChange}></input>
                        <h6>From</h6>
                        <input type="date" name="fdate"></input>
                        <h6>To</h6>
                        <input type="date" name="tdate"></input>
                    </div>
                    <div className='col-4'>
                        <span>
                        <h4>Filter</h4><br/><br/>
                        <div className='row'>
                            <span>
                            <h6 className='col'>News Desk</h6>
                            <input type="text"></input>
                            </span>
                            <span>
                            <h6 className='col'>Section</h6>
                            <input type="text"></input>
                            </span>
                            <span>
                            <h6 className='col'>Type</h6>
                            <input type="text"></input>
                            </span>
                            
                        </div>
                        </span>

                    </div>
                </div>
                <div><br/><br/>
                    <button onClick={this.getPosts}>Search </button>
                    {postList}
                </div>
            </div>
        );
    }   
}

export default Search;