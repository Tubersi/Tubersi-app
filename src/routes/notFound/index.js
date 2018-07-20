import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import UserAuthorized from '../../components/user-authorised';

import './style.css';

export default class NotFound extends Component {
    constructor(props) {
        super(props);
        this.state = {
            popUpVisible: false,
        }
    }

    render() {
        return (
            <React.Fragment>
                <UserAuthorized/>
                    <div className="error">
                        <div className="error-title">
                            <div className="error-title-contain">
                                <p className="error-title-contain-text-404">
                                    <img className="error-title-contain-text-image"
                                     src={require('../../images/Error-404.gif')}
                                     alt="error-404"
                                />
                                ERROR 404
                                </p>
                                <p className="error-title-contain-text-alert">
                                    Strona której aktualnie szukasz, nie istnieje lub nie jest dostępna.
                                </p>
                            </div>
                        </div>
                        <div className="error-content-help col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                            <p className="error-content-help-suggestion col-xs-12 col-sm-2">
                                Kontakt
                            </p>
                            <span className="error-content-help-suggestion-space col-xs-12 col-sm-3">
                                ---------------
                            </span>
                            <p className="error-content-help-suggestion col-xs-12 col-sm-2">
                                Status
                            </p>
                            <span className="error-content-help-suggestion-space col-xs-12 col-sm-3">
                                ---------------
                            </span>
                            <p className="error-content-help-suggestion col-xs-12 col-sm-2"
                               onClick={this.setVisiblePopUp} 
                            >
                                @tubersi
                            </p>
                        </div>
                        <div className="error-icon">
                            <div className="error-icon-contain">
                                <Link to='/'> 
                                    <img className="error-contain-icon-image"
                                         src={require('../../images/Youtube-icon-64-64.png')}
                                         alt="error-icon"
                                    />
                                    <p className="error-icon-contain-text">
                                        Strona Główna
                                    </p>
                                </Link>
                            </div>
                        </div>
                    </div>
            </React.Fragment>
        )
    }
}


 
