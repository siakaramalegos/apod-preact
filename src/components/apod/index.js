import { h } from 'preact';
import style from './style';

const Apod = ({data}) => {
  const { date, explanation, hdurl, media_type, title, url } = data

  return (
    <div class={style.apod}>
      <p class={style.right}><em>{date}</em></p>
      <h1>{title}</h1>
      <img src={url} alt={title} />
      <p>{explanation}</p>
    </div>
  )
}

export default Apod;
