import React, {Component} from 'react';
import { withUrlParams } from '../../utils/urlParams';
import Loader from '../../components/Loader'

class SingleSeries extends Component   {

    state = {
        show: null
    }

    componentDidMount() {
        const {id} = this.props.params;

        fetch(`http://api.tvmaze.com/shows/${id}?embed-episodes`)
        .then(response => response.json())
        .then(json => this.setState({ show: json }));
    }

    constructor(props)  {
        super(props);
    }

    render()    {
        // const {id} = this.props.params;
        const { show } = this.state;
        console.log(show);

        return  (
            <div>
                { show === null && <Loader />   }
                {
                    show !== null
                    &&
                    <div>
                        //these are able to be named by looking at the console.log object
                        <p>{show.name}</p>
                        <p>Premiered - {show.premiered}</p>
                        <p>Rating - {show.rating.average}</p>
                        <p>
                            <img alt="Show" src={show.image.medium} />
                        </p>
                    </div>
                }
                {/* <p>Single Series - the show id will be {id} </p> */}
            </div>
        )
    }
}

export default withUrlParams(SingleSeries);
