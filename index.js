const Notification = (props) => {
  //  Write your code here.
  const { className, textContent, image } = props;

  return (
    <div className={`items-container ${className}`}>
      <img src={image} className="image-css" />
      <p>{textContent}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="notifications-bg-container">
    <h1 className="heading">Notifications</h1>
    <div>
      <Notification
        className="information"
        textContent="Information Message"
        image="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
      />
      <Notification
        className="success"
        textContent="Success Message"
        image="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
      />
      <Notification
        className="warning"
        textContent="Warning Message"
        image="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
      />
      <Notification
        className="error"
        textContent="Error Message"
        image="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
