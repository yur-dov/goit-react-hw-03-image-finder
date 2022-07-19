import { BallTriangle  } from  'react-loader-spinner'
import css from './loader.module.css'

function Loader() {
  return (
      <div className={css.loader}>
        <BallTriangle color="#00BFFF" height={80} width={80} />
    </div>
  );
}

export default Loader;
