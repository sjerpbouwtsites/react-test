import React from 'react';

class EditFishForm extends React.Component {

  handleChange = (event) => {
    //
    const updatedFish = {
      ...this.props.fishDetail,
      [event.currentTarget.name]: event.currentTarget.value
    }
    //console.log(updatedFish)
    this.props.updateFish(this.props.fishKey, updatedFish)
  }

  render() {

    return (
      <div className='fish-edit'>
        <input name='name' type='text' onChange={this.handleChange} className='fish-name' value={this.props.fishDetail.name}></input>
        <input name='price' type='text' className='fish-price' onChange={this.handleChange} value={this.props.fishDetail.price}></input>
        <textarea name='desc' className='fish-desc' onChange={this.handleChange} value={this.props.fishDetail.desc}></textarea>
        <select onChange={this.handleChange} name='status' value={this.props.fishDetail.status}>
          <option value='available' >available</option>
          <option value='unavailable'>sold out</option>
        </select>
        <button onClick={() => { this.props.deleteFish(this.props.fishKey) }}>Delete</button>
      </div>
    )
  }
}

export default EditFishForm;