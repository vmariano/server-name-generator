import styles from '../styles/components/mealList.module.css'

const sample = (list) => {
    return list[Math.floor(Math.random() * list.length)];
}

export default function ServerName({list1, list2, list3}) {
    let pokemon = sample(list1)
    let got = sample(list2)
    let power_ranger = sample(list3)
    let serverName = `${pokemon}_${got}_${power_ranger}`

    return (
        <div className={styles.mealList}>
            <h1>{serverName}</h1>
        </div>
    );
}