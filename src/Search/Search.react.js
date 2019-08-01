import React from 'react';
import axios from 'axios'
import FilterData from '../FilterData/FilterData.react';



class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
        posts :[],        
        inputsToFilter:{
        "name":'',
        "to_date":'',
        "from_date":'',
        "ndesk":'',
        "section":'',
        "type_of_material":''

        }
        }
        }
        handleChange=(event)=>{
            let vname=event.target.name;
            let value =event.target.value;
            this.setState(prevState=>({inputsToFilter:{...prevState.inputsToFilter ,[vname]: value}}));
            }
            
    getPosts = () => {
        let url="https://api.nytimes.com/svc/search/v2/articlesearch.json?q="+(this.state.inputsToFilter.name)+"&fq=news_desk:"+(this.state.inputsToFilter.ndesk)+"&fq=section_name:"+(this.state.inputsToFilter.section)+"&fq=type_of_material:"+(this.state.inputsToFilter.type_of_material)+"&api-key=jK2AjLdSMvSJJETWeCpL5SyFa5kDulvN"
        axios.get(url)
            .then(response => {
                const data = JSON.parse(JSON.stringify(response.data.response.docs));
                console.log(data);
                this.setState({
                    posts: data.slice()
                });
            })
    }


    render() {
        // let postList = this.state.posts.map(
        //     value => (
        //         <div key={value.abstract}>
        //             Abstract: {value.abstract}<br />
        //             News Desk: {value.news_desk}<br />
        //             Section Name:{value.section_name}<br />
        //             Type:{value.type_of_material}<br />
        //             <hr />
        //         </div>
        //     )
        // );
        return (
            <div >
                <div className='row'>
                    <div className='col'>
                        <h4>Search</h4><br/><br/>
                        <input type="text"  name="name" onChange={this.handleChange} placeholder="Enter Article to search"></input>
                        <h6>From</h6>
                        <input type="date"  name ="from_date"  onChange={this.handleChange}></input>
                        <h6>To</h6>
                        <input type="date" name ="to_date" onChange={this.handleChange}></input>
                    </div>
                    <div className='col-4'>
                        <span>
                        <h4>Filter</h4><br/><br/>
                        <div className='row'>
                            <span>
                            <h6 className='col'>News Desk</h6>
                            <input type="text" name="ndesk" onChange={this.handleChange} ></input>
                            </span>
                            <span>
                            <h6 className='col'>Section</h6>
                            <input type="text" name="section" onChange={this.handleChange}></input>
                            </span>
                            <span>
                            <h6 className='col'>Type</h6>
                            <input type="text" name="type_of_material" onChange={this.handleChange}></input>
                            </span>
                            
                        </div>
                        </span>

                    </div>
                </div>
                <div><br/><br/>
                    <button onClick={this.getPosts} className='btn btn-primary  btn-lg'> Search </button>
                    <FilterData posts={this.state.posts} inputsToFilter={this.state.inputsToFilter}></FilterData>
                     {/* {postList}  */}
                </div>
            </div>
        );
    }   
}

export default Search;