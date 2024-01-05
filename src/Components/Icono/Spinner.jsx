

 import { PulseLoader } from "react-spinners"
import styles from './Spinner.module.css'
export const Spinner = () => {
  return (
    <div className={styles.spinner}> 
        <PulseLoader 
            color="#ffcb05"
            size={35}
        />
    </div>
  )
}
