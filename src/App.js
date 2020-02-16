import React from 'react'
import Guitar from './components/Guitar'
import ChordSelect from './components/ChordSelect'

class App extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col s12">
            <h5 style={{ textAlign:"center" }}>GUITAR APP</h5>
        </div>
        <div className="col s3">
        <Guitar />
        </div>
        <div className="col s9">
        <ChordSelect />
        </div>
      </div>
    )
  }
}

export default App
