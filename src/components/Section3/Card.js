import React, {Component} from 'react';
class Card extends Component {
    render() {
        return (
            <div>
                <div className={'img-thumbnail border'}>
                    <img src={this.props.image} style={{borderRadius:'8px 8px 0 0'}} alt=""/>
                        <div className={'caption text-center'}>
                        <h3>{this.props.title}</h3>
                        <p>{this.props.message}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;