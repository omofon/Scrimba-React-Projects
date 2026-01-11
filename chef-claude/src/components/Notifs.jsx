// Building on Conditional rendering

function clearNotifs(notifs) {
  return notifs.map((item) => (item.read = true));
}

function getNotification(notifs) {
  let messageText;

  if (!notifs) {
    return <h1>Loading...</h1>;
  } else if (notifs.length === 0) {
    messageText = <h1>All CLear</h1>;
  } else if (notifs.length === 1) {
    messageText = <h1>1 new message</h1>;
  } else {
    messageText = <h1>You have {notifs.length} messages</h1>;
  }

  return (
    <div>
      {messageText}
      {notifs.length > 0 && 
      <button onClick={()=>clearNotifs(notifs)}>
        {notifs.length === 1 ? "Mark as read" : "Clear all"}
      </button>
        }
    </div>
  );
}
