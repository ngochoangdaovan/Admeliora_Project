import React from 'react';


class TodoItem extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      isEditing:false
    }

    this.renderForm = this.renderForm.bind(this);
    this.renderItem = this.renderItem.bind(this);
    this.toggleState = this.toggleState.bind(this);
    this.updateItem = this.updateItem.bind(this);
  }
  
  toggleState(){
    const { isEditing } = this.state;
    this.setState({
      isEditing:!isEditing
    })
  }

  updateItem(evt){
    evt.preventDefault();
    this.props.editTask(this.props.index, this.input.value);
    this.toggleState();
  }


  renderItem(){
    return (
      <div className = "frame_profile">

        <div className ="frame_content_profile">
      <li   onClick={ () => {
        this.props.clickHandler(this.props.index);
      }} className={this.props.details.completed ? 'completed' : 
    '' ,"infor_profile"}>
        {this.props.details.name}
        

      </li>
      </div>
      <div className ="frame_button_edit">
      <button className ="button_edit_profile" onClick={(evt) => {
          evt.stopPropagation();
          this.toggleState()
        }}><i class='bx bx-edit' style ={{fontSize:"30px"}}></i></button>

      
      </div>
     
      </div>
      
      
      
    )
  }
  renderForm(){
    return (
      <div className ="main_frame_input_update_profile">
     <form onSubmit={this.updateItem} >

       <div className ="form">

      <div>
        

      <input className = "frame_input_profile" type="text" ref={(value) => {
        this.input = value
      }}   />
      {/* defaultValue={this.props.details.name} */}
      </div>

      <div className ="frame_button_update_proflie">
      <button  className ="button_update_profile" type="submit"><i class='bx bx-check'  style ={{fontSize:"40px",paddingTop:"40px"}} ></i></button>
      </div>

      </div>
    </form>
    </div>
    )
  }
  render(){
    const { isEditing } = this.state;
  return (
    <section>
    {
      isEditing ? this.renderForm() :  this.renderItem()
    }
     
    </section> 
       )
    }
}

TodoItem.propTypes = {
  // clickHandler: React.PropTypes.func.isRequired,
//   index:React.PropTypes.number.isRequired,
//   deleteTask:React.PropTypes.func.isRequired,
//   editTask:React.PropTypes.func.isRequired,
//   details:React.PropTypes.object.isRequired
}


export default TodoItem;