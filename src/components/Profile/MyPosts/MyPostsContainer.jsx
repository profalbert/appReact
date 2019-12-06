import MyPosts from './MyPosts';
import {addPostActionCreator} from '../../../redux/profile-reducer';
import {connect} from 'react-redux';


let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
}
let mapDispatchToProps = {
  addPost: addPostActionCreator
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);


export default MyPostsContainer;