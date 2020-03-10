import React, { Dispatch } from "react";
import ModalSpinner from "../misc/ModalSpinner";
import { connect } from "react-redux";
import { fetchPost } from "../../store/post/actions";
import { Post as PostObj, PostActionTypes, PostState } from "../../store/post/types";
import { RootState } from "../../store";

interface PostParams {
  match: {
    params: {
      id: string
    }
  },
  isFetching: boolean,
  posts: PostObj[]
}

interface DispatchProps {
  fetchPost: (id: number) => void
}

type Props = PostParams & DispatchProps & PostState;

class Post extends React.Component<Props> {

  getPost(id: number) {
    return this.props.posts.find(x => x.id === id);
  }

  componentDidMount() {
    const iId = parseInt(this.props.match.params.id);

    if (iId && !this.getPost(iId)) {
      this.props.fetchPost(iId);
    }
  }

  render() {
    const iId = parseInt(this.props.match.params.id);

    if (!iId) {
      return <>
        <h2>Post not found</h2>
        <p>The requested post was not found.</p>
      </>;
    }

    if (this.props.isFetching) {
      return <ModalSpinner />;
    }

    const post = this.getPost(iId);

    if (!post) {
      return <>
        <h2>Post not found</h2>
        <p>The requested post was not found.</p>
      </>;
    }

    return <>
      {post.title}
      {post.body}
    </>;
  }
}

const mapStateToProps = (state: RootState) => state.post;
const mapDispatchToProps = (dispatch: Dispatch<PostActionTypes>): DispatchProps => ({
  fetchPost: (id: number) => dispatch(fetchPost(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Post);