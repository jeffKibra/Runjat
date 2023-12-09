import { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { CREATE_COMMENT } from "../store/actions/comments";
import { reset } from "../store/slices/commentsSlice";

import CommentForm from "../components/forms/CommentForm";

function CreateComment(props) {
  const {
    loading,
    action,
    isModified,
    resetCreateComment,
    create,
    blogId,
    articleId,
  } = props;
  //   console.log({ props });

  useEffect(() => {
    if (isModified) {
      resetCreateComment();
    }
  }, [isModified, resetCreateComment]);

  function handleFormSubmit(data) {
    create({
      ...data,
      blogId,
      articleId,
    });
  }

  return (
    <CommentForm
      handleFormSubmit={handleFormSubmit}
      loading={loading && action === CREATE_COMMENT}
      isSubmitted={isModified}
    />
  );
}

function mapStateToProps(state) {
  const { loading, action, isModified } = state.commentsReducer;

  return {
    loading,
    action,
    isModified,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    create: (data) => dispatch({ type: CREATE_COMMENT, data }),
    resetCreateComment: () => dispatch(reset()),
  };
}

CreateComment.propTypes = {
  blogId: PropTypes.string.isRequired,
  articleId: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateComment);
