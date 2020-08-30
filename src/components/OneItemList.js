import React, { Component } from 'react'
import Item from './Item';
import faker from 'faker';
export default class OneItemList extends Component {
  
    //votes needs to be stateful because incrementing changes the state
    //at the beginning there is no vote
     state = {
         likeVotes: '',
         dislikeVotes: ''
     }
     //when the component mounts the votes are taking the user.vote as the starting value
     componentDidMount() {
         this.setState( {
            likeVotes: this.user().likeVote,
            dislikeVotes: this.user().dislikeVote,
         })
     }
     //getting data from faker.js
    user = () => { return {
        name: faker.name.findName(),
        email: faker.internet.email(),
        address: faker.address.streetAddress(),
        bio: faker.lorem.sentence(),
        image: faker.image.avatar(),
        id:faker.random.number(),
        dislikeVote:0,
        likeVote:1
    }

    }
    handleLikeVote = (prevState)=> {
        this.setState(prevState=> {
            return {
             likeVotes: prevState.likeVotes + 1
            }
        })
     }
    handleDislikeVote = (prevState)=> {
       this.setState(prevState=> {
           return {
            dislikeVotes: prevState.dislikeVotes - 1,
          
           }
       })
    }
  
   


    render() {
        console.log("stateis:", this.state)
        return (
         
            <div>
                <h4 className="center">Rendering one item</h4>
                <Item 
                name={this.user().name}
                email={this.user().email}
                id={this.user().id} 
                address={this.user().address}
                bio={this.user().bio}
                image={this.user().image}
                dislikeVote={this.state.dislikeVotes}//getting the vote from the state and rendering in the Item
                ondislikeVote={this.handleDislikeVote}
                likeVote={this.state.likeVotes}//getting the vote from the state and rendering in the Item
                onlikeVote={this.handleLikeVote}
                />
            </div>
        )
    }
}
