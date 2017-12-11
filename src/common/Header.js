import React, { Component } from 'react';

import profilePicture from '../assets/images/superKalo.jpg';


class Header extends Component {
    state = {
        authentication: false
    }

    render () {

    let registerBkg = (
        <div className="background-img">
            <h2 className="register__title mx-auto font-weight-bold mt-4">Discover your next conference you wanna go!</h2>
            <p className="register__text mx-auto font-weight-normal mt-3">Conf List surfaces the best international conferences, worldwide. {"It's a place for conference-loving enthusiasts to collect conferences and to subscribe for upcoming events related to the #tags they care about."}</p>
            <button type="button" className="btn btn-primary font-weight-bold mx-auto mt-3">Register</button>
        </div>
    );

        return (
            <div className={ !this.state.authentication ? 'register' : null }>

                <nav className={"navbar navbar-expand-lg py-4 px-5 " + (!this.state.authentication ? 'navbar-dark' : 'navbar-light bg-white ')}>
                    <a className="navbar-brand mx-auto">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="113" height="27" viewBox="0 0 113 27">
                            <defs>
                                <path id="a" d="M106.13 47.94c-1.13 0-2.05.5-2.76 1.48a6.78 6.78 0 0 0-1.06 4c0 2.32.52 4.14 1.57 5.43a5.06 5.06 0 0 0 4.16 1.95c.76 0 1.41-.12 1.92-.36.52-.24.97-.48 1.35-.72l.25-.17c.1-.06.2-.09.29-.09.12 0 .25.09.4.26.14.16.24.3.29.39a6.26 6.26 0 0 1-2.2 1.68c-.5.25-1.1.45-1.78.61-.69.15-1.46.23-2.32.23-.99 0-1.92-.16-2.79-.48a6.49 6.49 0 0 1-3.87-3.89 9.1 9.1 0 0 1-.58-3.4c0-1.23.23-2.35.7-3.37a8.46 8.46 0 0 1 4.25-4.3c.9-.41 1.78-.61 2.65-.61.88 0 1.69.09 2.41.28.72.2 1.33.45 1.83.76.51.31.9.68 1.17 1.1.28.42.42.86.42 1.31 0 .15-.12.27-.36.36a6.97 6.97 0 0 1-2.16.4c-.31 0-.56-.15-.74-.45l-.59-.97a3.86 3.86 0 0 0-.89-.98c-.37-.3-.89-.45-1.56-.45zm8.13 6.66a7.92 7.92 0 0 1 2.34-5.68 8.12 8.12 0 0 1 5.69-2.34 8.5 8.5 0 0 1 3.24.59 7.23 7.23 0 0 1 4.2 4.18 8.82 8.82 0 0 1-.04 6.4 8 8 0 0 1-7.4 4.88c-1.17 0-2.25-.2-3.24-.59a7.4 7.4 0 0 1-4.19-4.16c-.4-.98-.6-2.08-.6-3.28zm3.39-1.18c0 .88.09 1.8.29 2.73.19.94.48 1.78.88 2.54.39.76.9 1.38 1.53 1.87.62.49 1.38.74 2.27.74 1.36 0 2.43-.48 3.18-1.44a5.8 5.8 0 0 0 1.14-3.71c0-.89-.09-1.82-.27-2.79-.18-.97-.47-1.86-.87-2.66a5.85 5.85 0 0 0-1.55-2 3.53 3.53 0 0 0-2.35-.79c-1.28 0-2.3.44-3.08 1.31-.78.88-1.17 2.28-1.17 4.2zm30.99 6.73c0 .36.22.63.65.81.43.18.91.32 1.44.41.22.05.33.19.33.43 0 .15-.03.34-.08.58l-1.83-.13a38.91 38.91 0 0 0-5.76.13 2.9 2.9 0 0 1-.07-.58c0-.24.1-.38.32-.43.5-.09.96-.23 1.37-.41.41-.18.61-.45.61-.81v-7.06c0-.6-.04-1.15-.11-1.65a3.86 3.86 0 0 0-.41-1.32 2.22 2.22 0 0 0-.83-.86 2.6 2.6 0 0 0-1.35-.31 5.06 5.06 0 0 0-3.29 1.21c-.45.39-.8.88-1.07 1.46a4.73 4.73 0 0 0-.39 1.98v6.55c0 .36.21.63.63.81.42.18.87.32 1.35.41.21.05.32.19.32.43 0 .15-.02.34-.07.58l-1.84-.13a37.8 37.8 0 0 0-5.72.13 2.9 2.9 0 0 1-.07-.58c0-.24.11-.38.32-.43a6.57 6.57 0 0 0 1.44-.41c.43-.18.65-.46.65-.85v-9.79c0-.72-.13-1.24-.38-1.55-.25-.31-.8-.5-1.64-.57-.31-.05-.46-.22-.46-.51 0-.12.02-.27.07-.47a21.74 21.74 0 0 0 2.7-.18c.55-.09 1.04-.19 1.47-.3.44-.11.75-.16.94-.16.34 0 .5.18.5.54 0 .33-.03.73-.1 1.2-.08.47-.11 1.09-.11 1.86a15.58 15.58 0 0 1 2.97-2.67 5.56 5.56 0 0 1 3.11-.93c1.47 0 2.56.42 3.3 1.27a5.3 5.3 0 0 1 1.09 3.55zm6.77-11.63h-2.16v-.65c0-.26.12-.42.34-.48.23-.06.48-.11.74-.15.27-.03.51-.12.74-.25.23-.13.34-.41.34-.85v-1.65c0-1.32.19-2.45.56-3.39.37-.93.85-1.71 1.42-2.32a5.55 5.55 0 0 1 4-1.78c.79 0 1.5.08 2.14.23.44.11.84.24 1.19.4l-.56.02a.5.5 0 0 0-.07.29v.28c0 .32.15.51.47.58.84.07 1.39.29 1.65.67.11.15.2.34.26.55a3.32 3.32 0 0 1-.85.47 4.41 4.41 0 0 1-1.24.29.82.82 0 0 1-.76-.43c-.26-.53-.58-1-.95-1.41-.38-.4-.93-.61-1.68-.61-.86 0-1.5.36-1.92 1.06a6.06 6.06 0 0 0-.63 3.05v4.57h4.24c0 .48-.03.85-.1 1.11-.08.27-.28.4-.62.4h-3.52v11.02c0 .62.27 1.05.82 1.27.56.23 1.46.41 2.7.53.27.04.4.2.4.46 0 .08-.01.18-.04.33a3.3 3.3 0 0 0-.03.25l-.63-.04-1.24-.07-1.55-.05-1.55-.02-1.24.02-1.21.05-.99.07a5.7 5.7 0 0 1-.52.04l-.04-.25a2.63 2.63 0 0 1-.03-.33c0-.24.11-.38.32-.43.53-.09.96-.23 1.3-.41a.9.9 0 0 0 .5-.85zm9.3-10.89h.08l.88-.04.94-.05.86-.07c.6-.07 1.18-.17 1.73-.29.55-.12.92-.18 1.12-.18.38 0 .57.18.57.54 0 .26-.03.61-.11 1.03-.07.42-.1 1.01-.1 1.78v19.62c0 .36.14.62.43.79.29.17.81.32 1.58.47.27.05.4.2.4.47 0 .33-.03.56-.07.68a73.9 73.9 0 0 0-4.4-.18 57.39 57.39 0 0 0-4.35.18c-.03-.1-.04-.2-.06-.31l-.01-.37c0-.17.04-.29.12-.35a.8.8 0 0 1 .27-.12c.77-.15 1.3-.3 1.59-.47a.86.86 0 0 0 .43-.79V41.1c0-.42-.04-.78-.14-1.08.1-.1.14-.19.14-.28 0-.34-.13-.67-.38-.99a3.68 3.68 0 0 0-1.51-1.12zm14.75 24.57a54.04 54.04 0 0 0-4.36.18 4.24 4.24 0 0 1-.07-.68c0-.17.04-.29.13-.35.08-.06.17-.1.27-.12.77-.15 1.29-.3 1.58-.47.29-.17.43-.43.43-.79v-9.51a3.1 3.1 0 0 0-.36-1.65c-.24-.39-.8-.61-1.69-.69-.31-.04-.47-.24-.47-.57v-.27c0-.11.03-.21.08-.31.14 0 .35 0 .63-.02l.88-.03.93-.06a18.14 18.14 0 0 0 2.6-.36c.55-.12.92-.18 1.11-.18.39 0 .58.18.58.54 0 .27-.04.62-.11 1.05-.07.43-.11 1.03-.11 1.8v10.26c0 .36.16.62.47.79.31.17.83.32 1.55.47.26.05.39.2.39.47v.36c0 .12-.02.22-.07.32a57.07 57.07 0 0 0-4.39-.18zm-2.63-21.13a2.52 2.52 0 0 1 2.59-2.63c.77 0 1.4.25 1.88.74s.72 1.12.72 1.89c0 .77-.24 1.4-.72 1.89s-1.11.74-1.88.74a2.52 2.52 0 0 1-2.59-2.63zm19.3 10.08c-.34-.03-.53-.16-.58-.4a3.3 3.3 0 0 0-1.15-2.16 3.69 3.69 0 0 0-2.27-.68c-.81 0-1.44.2-1.87.61-.43.41-.65.89-.65 1.44 0 .26.04.5.11.72.07.22.22.42.45.61s.55.38.95.56c.41.18.96.38 1.66.59.82.24 1.54.5 2.16.78.62.27 1.15.6 1.58.99.44.38.77.84.99 1.38a5.65 5.65 0 0 1 0 3.91 4.15 4.15 0 0 1-1.09 1.64c-.51.47-1.14.83-1.91 1.1-.77.26-1.69.39-2.77.39-.77 0-1.65-.08-2.65-.25-1-.17-1.9-.47-2.72-.9a52.72 52.72 0 0 1-.18-4.1h.47c.26 0 .49.04.68.12.2.09.3.22.33.42.09 1 .49 1.78 1.19 2.32.69.54 1.65.81 2.88.81.84 0 1.52-.19 2.05-.58.53-.38.79-.89.79-1.51 0-.58-.23-1.07-.7-1.48-.47-.4-1.35-.8-2.65-1.18-1.75-.51-2.98-1.17-3.69-2a4.41 4.41 0 0 1-1.06-2.97c0-1.51.51-2.73 1.53-3.64a5.76 5.76 0 0 1 3.98-1.37c.93 0 1.84.12 2.72.35.87.22 1.57.47 2.1.73.03.2.05.45.07.78l.08 1.04.05 1.08.02.88zm13.5 8.71c.24-.14.44-.22.61-.22.24 0 .49.26.76.76a9.1 9.1 0 0 1-2.65 1.8 6.62 6.62 0 0 1-3.78.25 2.98 2.98 0 0 1-1.21-.65 3.24 3.24 0 0 1-.86-1.27 5.56 5.56 0 0 1-.32-2.07v-9.9h-2.16v-.9c0-.1.02-.22.07-.36.05-.15.19-.22.43-.22.65 0 1.25-.19 1.8-.56.55-.37 1-.93 1.33-1.67.27-.55.56-1 .88-1.33.33-.34.65-.51.96-.51h.75v3.75h4.22c0 .76-.06 1.26-.17 1.47-.1.22-.3.33-.59.33h-3.46v8.89c0 .72.03 1.29.08 1.71.04.42.12.74.23.95.11.22.25.36.43.42a2 2 0 0 0 .63.09c.27 0 .58-.07.94-.2s.72-.32 1.08-.56z"/>
                            </defs>
                            <g transform="translate(-99 -36)">
                                <use fill={!this.state.authentication? "#fff" : "#0d215f" } xlinkHref="#a"/>
                            </g>
                        </svg>
                    </a>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse justify-content-end ml-md-4 text-left" id="navbarTogglerDemo02">

                        <form className="form-inline mt-xs-2 mr-xl-5">
                            <input className="form-control mx-lg-3" type="text" placeholder="Search by location or technology..." />
                        </form>

                        <ul className="nav navbar-nav justify-content-end">
                            <li className="nav-item">
                                <a className="nav-link active" href="#">Home</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#">Suggest a conference</a>
                            </li>
                            {!this.state. authentication ?
                              <div className="d-flex">
                              <li className="nav-item">
                                <a className="nav-link" href="#">Login</a>
                            </li>

                            <button type="button" className="btn btn-primary align-self-start font-weight-bold ">Register</button>
                              </div>
                              : <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle active" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <img className="mr-1" src={profilePicture} width="28" height="28" alt="profile picture" />Kaloyan
                                </a>

                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="#">Profile Settings</a>
                                    <a className="dropdown-item" href="#">My Subscriptions</a>
                                    <a className="dropdown-item" href="#">Wanna go list</a>
                                    <a className="dropdown-item" href="#">Log out</a>
                                </div>
                            </li> }

                        </ul>
                    </div>
                    </nav>

            { !this.state.authentication ? registerBkg : null }

            </div>
        );
    }
};

export default Header;