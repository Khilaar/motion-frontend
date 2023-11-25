import { useSelector } from "react-redux";
import { useState } from "react";

import { useEffect } from "react";
import { api } from "../../API/api";

function Notification() {
  const [requests, setRequests] = useState([]);
  const [user, setUser] = useState();
  const token = useSelector((state) => state.user.accessToken);

  const config = { headers: { Authorization: `Bearer ${token}` } };

  useEffect(() => {
    api.get("social/friends/requests/", config).then((data) => {
      setRequests(data.data.results);
    });
    api.get("users/me", config).then((data) => {
      setUser(data.data);
    });
  }, [token]);

  console.log(requests);
  console.log(user);
  const handleAccept = async (e) => {
    const requestid = e.target.parentElement.getAttribute("data-key");
    try {
      await api.patch(
        `social/friends/requests/${requestid}/`,
        { status: "A" },
        config
      );
    } catch (error) {
      console.log(error);
    }
  };
  const handleReject = async (e) => {
    const requestid = e.target.parentElement.getAttribute("data-key");
    try {
      await api.patch(
        `social/friends/requests/${requestid}/`,
        { status: "R" },
        config
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="notification-containter">
        <div>
          <p>Received Requests</p>
          <ul className="receive">
            {requests
              .filter((obj) => obj.requester.id === user.id)
              .map((el) => (
                <li key={el.id}>
                  <p>{` ${el.id}  ----- ${el.requester.first_name} ${el.requester.last_name}`}</p>
                  <p>{el.requester.location}</p>

                  <div data-key={el.id}>
                    <button onClick={(e) => handleAccept(e)}>✔️</button>
                    <button onClick={(e) => handleReject(e)}>X</button>
                  </div>
                </li>
              ))}
          </ul>
        </div>
        <div>
          <p>Sent Requests</p>
          <ul className="send">
            {requests
              .filter((obj) => obj.requester.id !== user.id)
              .map((el) => (
                <li key={el.id}>
                  <p>{` ${el.id}  ----- ${el.requester.first_name} ${el.requester.last_name}`}</p>
                  <p>{el.requester.location}</p>

                  <div data-key={el.id}>
                    <button onClick={(e) => handleAccept(e)}>✔️</button>
                    <button onClick={(e) => handleReject(e)}>X</button>
                  </div>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Notification;
