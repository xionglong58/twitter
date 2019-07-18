import React, { PureComponent } from 'react';
import { HomepageWrapper, HomepageHeader, TrendItem, SearchBar } from './style';
class HomePage extends PureComponent {
    state = {}
    render() {
        return (
            <HomepageWrapper>
                <HomepageHeader>
                    Home
                </HomepageHeader>
                <SearchBar>
                    <input placeholder="Search Twitter" className="SearchTwitter"/>
                </SearchBar >
            </HomepageWrapper>
                );
            }
        }
        
export default HomePage;