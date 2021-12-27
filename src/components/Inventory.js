import React from 'react';
import firebase from "firebase";
import base, { firebaseApp } from "../base";
import AddFishForm from "./AddFishForm";
import EditFishForm from "./EditFishForm";
import Login from "./Login";
import PropTypes from 'prop-types'

class Inventory extends React.Component {

  static propTypes = {
    storeId: PropTypes.string.isRequired,
    fishes: PropTypes.object.isRequired,
    updateFish: PropTypes.func.isRequired,
    deleteFish: PropTypes.func.isRequired,
    loadSampleFishes: PropTypes.func.isRequired,
    addFish: PropTypes.func.isRequired,
  }

  state = {
    uid: null,
    owner: null
  }

  editFishRow = fish => {
    return (
      <EditFishForm
        updateFish={this.props.updateFish}
        deleteFish={this.props.deleteFish}
        key={fish} fishKey={fish} fishDetail={this.props.fishes[fish]} />
    );
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.authHandler({ user }).catch(error => {
          alert('auth handler error')
          console.error(error);
        })
      }
    })
  }

  authHandler = async (authData) => {
    const store = await base.fetch(this.props.storeId, {
      context: this,
    }).catch(error => {
      alert('store fetch error!')
      console.error(error);
    })
    if (!store.owner) {
      await base.post(`${this.props.storeId}/owner`, {
        data: authData.user.uid
      }).catch(error => {
        alert('owner post error!')
        console.error(error);
      })
    }
    this.setState({
      uid: authData.user.uid,
      owner: store.owner || authData.user.uid
    })
  }

  authenticate = (provider) => {
    const authProvider = new firebase.auth.GithubAuthProvider()
    firebaseApp
      .auth()
      .signInWithPopup(authProvider)
      .then(this.authHandler)
      .catch(error => {
        alert('aith error!')
        console.error(error);
      })
  }

  logout = async () => {
    firebase.auth().signOut();
    this.setState({ uid: null })
  }


  render() {

    if (!this.state.uid) {
      return <Login authenticate={this.authenticate} />
    }

    if (this.state.uid !== this.state.owner) {
      return <div>You're not the owner of this database.
        <button onClick={this.logout}>log out!</button>
      </div>
    }
    return (
      <div className='inventory'>
        <h2>inventory</h2>
        <AddFishForm addFish={this.props.addFish} />
        <button onClick={this.props.loadSampleFishes}>load samples</button>
        {Object.keys(this.props.fishes).map(this.editFishRow)}
      </div>
    )
  }
}

export default Inventory;