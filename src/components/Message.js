import React from 'react'

class Message extends React.Component {

  constructor(props){
    super(props)
  }


  render (){

    return (
      <div class="row message unread">
        <div class="col-xs-1">
          <div class="row">
            <div class="col-xs-2">
              <input type="checkbox" />
            </div>
            <div class="col-xs-2">
              <i class="star fa fa-star-o"></i>
            </div>
          </div>
        </div>
        <div class="col-xs-11">
          <a href="#">
            {this.props.message}
          </a>
        </div>
      </div>
    )
  }
}


export default Message