import React from 'react';

class ScrollableMenu extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showData: this.props.data[0],
        }
    }

    changeShow = (idx) => {
        this.setState({showData: this.props.data[idx]});
    }

    render() {
        return(
            <div className="dual-container">
                <div className="left">
                    {
                        <ul>
                            {

                                this.props.data.map(
                                    (item, idx) => {
                                        return <li 
                                                    className="undecorated-list button-list" 
                                                    key={idx}
                                                    onClick={() => this.changeShow(idx)}
                                                >
                                            {item.title}
                                        </li>
                                    }
                                )

                            }
                        </ul>
                    }

                </div>
                <div className="right">
                    <p>{this.state.showData.title}</p>
                    <p>{this.state.showData.position}</p>
                    <p>{this.state.showData.dates}</p>
                    <ul>
                        {
                            this.state.showData.responsabilities.map((resp, idx) => {
                                return <li key={idx}>
                                    {resp}
                                </li>
                            })
                        }
                    </ul>
                </div>
            </div>
        );
    }
}

export default ScrollableMenu;