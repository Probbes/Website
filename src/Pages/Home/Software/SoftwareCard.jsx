import PropTypes from 'prop-types'

import styles from "./Software.module.css"

function SoftwareCard(props){

    return (
        <>
        <div className={styles.SoftCard}>
            <h3>{props.title}</h3>
            <ul>
                {props.names.map((name, index) => (
                    <li key={index}> <img src={props.images[index]}/> {name} </li>
                ))}
            </ul>
        </div>
        </>
    );
}

SoftwareCard.PropTypes = {
    names: PropTypes.array
}

export default SoftwareCard