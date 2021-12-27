import React from "react";

class AddFishForm extends React.Component {

  nameRef = React.createRef();
  priceRef = React.createRef();
  statusRef = React.createRef();
  descRef = React.createRef();
  imageRef = React.createRef();

  createFish = (event) => {
    event.preventDefault();
    const fist = {
      name: this.nameRef.current.value,
      price: parseFloat(this.priceRef.current.value),
      status: this.statusRef.current.value,
      desc: this.descRef.current.value,
      image: this.imageRef.current.value
    }
    this.props.addFish(fist)
    event.currentTarget.reset()

  }
  render() {
    return (
      <form onSubmit={this.createFish} className='fish-edit'>
        <input type='text' name='name' ref={this.nameRef} placeholder="name" />
        <input type='text' name='price' ref={this.priceRef} placeholder="price" />
        <select name='status' ref={this.statusRef}>
          <option value='available'>available</option>
          <option value='unavailable'>sold out</option>
        </select>
        <textarea name='desc' ref={this.descRef} placeholder="desc" />
        <input type='text' name='image' ref={this.imageRef} placeholder="image" />
        <button type='submit'>verstuur</button>
      </form>
    );
  }
}

export default AddFishForm;