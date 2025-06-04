import Button from './Button';

function Banner(props) {
  return (
    <section className="banner flex flex-center">
      <div className="container">
        <div className='text-box'>
          <h2>{props.title}</h2>
          <p>{props.text}</p>
          <div className='flex gap-15'>
            <Button text={props.button1Text} className={props.Btn1StyleType}/>
            <Button text={props.button2Text} className={props.Btn2StyleType}/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;