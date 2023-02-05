import { Post } from "@/atoms/postsAtom";
import { User } from "firebase/auth";
import { useEffect } from "react";

type CommentsProps = {
  user: User;
  selectedPost: Post;
  communityId: string;
};

const Comments: React.FC<CommentsProps> = ({
  user,
  selectedPost,
  communityId,
}) => {
  const onCreateComment = async () => {};

  const onDeleteComment = async () => {};

  const getPostComments = async () => {};

  useEffect(() => {
    getPostComments();
  }, []);

  return <div>Comments</div>;
};

export default Comments;
