import React, {Component} from 'react'
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux'
import {Body as BodyContainer} from './Components'
import styled from 'styled-components';
import Pokemons from '../Pokemons'
import { getPokemons } from '../../../actions/AppAction';
const BodyMargin = styled.div`
  margin: 0px auto;
  width: 90%
`

class Home extends Component{

  render(){
    return (
      <BodyContainer>
        <BodyMargin>
          <Switch>
            <Route exact path="/" component={Pokemons}></Route>
            <Route path="/about" component={()=>(<div>About</div>)}></Route>
          </Switch>
        </BodyMargin>
      </BodyContainer>
    )
  }
}

export default Home;