import React from "react"
import styles from '../styles/Home.module.css'

type Props = {
  prefectures:
  | {
    prefCode: number;
    prefName: string;
  }[];
  onChange: (name: string, prefName: number, check: boolean) => void;
};

const CheckboxList: React.FC<Props> = ({prefectures, onChange}) => {
  return (
    <>
      <h3>総人口推移</h3>
        <ul className={styles.ul}>
          {prefectures.map((prefecture, index) => {
            return(
              <li className={styles.li} key={index}>
                <label htmlFor={`input_${prefecture.prefCode}`} className={styles.label} id={`label_${prefecture.prefCode}`}>
                <input
                  id={`input_${prefecture.prefCode}`}
                  type="checkbox"
                  onChange={
                    (event) => onChange(
                      prefecture.prefName,
                      prefecture.prefCode,
                      event.target.checked
                    )
                  }
                  value={prefecture.prefCode}
                  name={prefecture.prefName}
                />
                  {prefecture.prefName}
                </label>
              </li>
            )
          } ) }
        </ul>
    </>
  )
};
export default CheckboxList