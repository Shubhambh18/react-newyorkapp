import React from 'react';

const FilterData = (props) => {

    return (
        props.posts.map(
            p => {
                if (Date.parse(props.inputsToFilter.to_date) < Date.parse(props.inputsToFilter.from_date)) {
                    this.variable = 1;
                    return (
                        <div>
                            <h2>Invalid Date</h2>
                        </div>
                    )
                }
                else if (Date.parse(p.pub_date) >= Date.parse(props.inputsToFilter.from_date) && Date.parse(p.pub_date) <= Date.parse(props.inputsToFilter.to_date)) {
                    return (
                        <div key={p.web_url} align='left'>
                            Abstract: {p.abstract}<br />
                            News Desk: {p.news_desk}<br />
                            Section Name:{p.section_name}<br />
                            Date: {p.pub_date}<br />
                           
                            Type:{p.type_of_material}
                            <hr />
                        </div>
                    )
                }
                else {
                    // console.log("date not in range");
                }
            }
        ));

}

export default FilterData;
