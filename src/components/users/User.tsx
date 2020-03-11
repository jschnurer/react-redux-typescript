import React, { useState, useEffect } from "react";
import InlineSpinner from "../misc/InlineSpinner";
import JsonApi from "../../apis/posts/JsonApi";
import { User as UserType } from "../../types/userTypes";
import FormattedDateString from "../misc/FormattedDateString";
import "./User.scoped.css";

interface UserProps {
  match: {
    params: {
      id: string
    }
  },
}

const User: React.FunctionComponent<UserProps> = ({ match: { params: { id } } }) => {
  const [user, setUser] = useState<UserType | null>(null);
  const [isFetching, setFetching] = useState<boolean>(false);
  const [fetchError, setFetchError] = useState<string | undefined>();

  useEffect(() => {
    if (!isFetching && !user && !fetchError) {
      // Set fetching.
      setFetching(true);

      // Get user from api backend.
      JsonApi.fetchUser(id)
        .then(usr => {
          if (usr?.id) {
            setUser(usr)
          } else {
            throw Error("User not found.");
          }
        })
        .catch(err => setFetchError(err.message))
        .finally(() => setFetching(false));
    }
  }, [id, user, isFetching, fetchError]);

  return (
    <>
      <h2>{id}</h2>
      {isFetching && <InlineSpinner isCenterBlock={true} />}
      {fetchError && <p>{fetchError}</p>}
      {user &&
        <>
          <div>
            <label>Join Date:</label><span><FormattedDateString date={user.joinDate} /></span>
          </div>
          <div>
            <label>About Me:</label>
            <span>
              {user.blurb.split('\n').map((line, ix) => <p key={ix}>{line}</p>)}
            </span>
          </div>
        </>
      }
    </>
  );
}

export default User;