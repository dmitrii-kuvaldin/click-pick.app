import classes from './Footer.module.css';
import { format } from 'date-fns';

export default function Footer() {
  return (
    <footer className={`${classes.footerContainer}`}>
      <div className={`${classes.footerWrapper}`}>
        <img src="/images/logo/hands.webp" alt="" className={classes.hands} />
        <div className={classes.contact}>
          <p>hello@clickpick.app</p>
          <div className={classes.info}>
            <p>ClickPick © 2022 - {format(new Date(), 'yyyy')} </p>
            <p>Все права защищены</p>
          </div>
        </div>

      </div>
    </footer>

  )
}
