type Props = {
  buttonNumber: undefined | number;
};

function Thank({ buttonNumber }: Props) {
  return (
    <div className="main-flex">
      <img
        src="../public/images/illustration-thank-you.svg"
        alt="check print"
      />
      <span>You selected {buttonNumber} out of 5</span>
      <h3>Thank you!</h3>
      <p>
        We appreciate you takint the time to give a rating. If you ever need
        more support, don't hesitate to get in touch!
      </p>
    </div>
  );
}
export default Thank;
