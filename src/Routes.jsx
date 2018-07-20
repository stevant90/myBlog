import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import PostsPage from './Components/Posts/PostsPage';
import SinglePostPage from './Components/Posts/SinglePostPage';
import AuthorsPage from './Components/Authors/AuthorsPage';
import SingleAuthorPage from './Components/Authors/SingleAuthorPage';
import NewPostPage from './Components/NewPost/NewPostPage';
import { About } from './Components/Shared/About';
import AppHeader from './Components/Shared/Header';

export default class Routes extends React.Component {
    render() {
        return (
            <HashRouter>
                <div style={{ width: "100%", height: "100%" }} className='MainPage h-paddingALL--md'>

                    <AppHeader />

                    <Switch>

                        <Route exact path="/" component={PostsPage} />
                        <Route path="/posts/:id" component={SinglePostPage} />
                        <Route exact path="/authors" component={AuthorsPage} />
                        <Route path="/authors/:userId" component={SingleAuthorPage} />
                        <Route path="/newPost" component={NewPostPage} />
                        <Route path="/about" component={About} />

                    </Switch>
                </div>
            </HashRouter>
        );
    }
}
