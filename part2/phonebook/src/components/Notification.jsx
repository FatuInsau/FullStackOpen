const Notification = ({ message, notificationTipe }) => {
  if (message === null) {
    return null
  }

  return (
    <div className={notificationTipe}>
      {message}
    </div>
  )
}

export default Notification