import React, {Component} from "react";

class Series extends Component  {
    state = {
        series: []
      }
    
      componentDidMount() {
        // const series = ["Vikings", "Game of Thrones"];
        // setTimeout(() => {
        //   this.setState({ series });
        // }, 2000);
        fetch('http://api.tvmaze.com/search/shows?q=Vikings')
          // .then((response) => {console.log(response)})
          .then(response => response.json())
          .then(json => this.setState({ series: json}))
      }
    
    render()    {
        return  (
            <div>
                The length of series array - {this.state.series.length}
            </div>
        )
    }
}

export default Series