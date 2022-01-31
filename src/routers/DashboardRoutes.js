import React from 'react';
import { Navbar } from '../components/ui/Navbar';
import { Switch, Route, Redirect } from 'react-router-dom';

import { HeroScreen } from '../components/heroes/HeroScreen';
import { CoinsScreen } from '../components/coins/CoinsScreen';
import { SearchScreen } from '../components/search/SearchScreen';
import { MarketScreen } from '../components/markets/MarketScreen';

export const DashboardRoutes = () => {
    return (
        <>
            <Navbar />

            <div className="container mt-2">
                <Switch>
                    <Route exact path="/market" component={ MarketScreen } />
                    <Route exact path="/coin/:coinId" component={ HeroScreen } />
                    <Route exact path="/coins" component={ CoinsScreen } />
                    <Route exact path="/search" component={ SearchScreen } />

                    <Redirect to="/coins" />
                </Switch>
            </div>


        </>
    )
}
