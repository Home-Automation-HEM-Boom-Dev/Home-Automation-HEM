import styles from "./Card.module.scss";
import { Card as CardWrap, CardContent, Typography, Chip } from '@mui/material';
import classNames from "classnames";

export default function Card({ iconUrl, outlined = false, title, variant, autoPlay, onClick, selected = false, id }) {
    return (
        <div className={classNames(styles['card'])} onClick={onClick}>
            <CardWrap
                id={id}
                className={classNames(styles['card-component'],
                variant?.toLowerCase() === "offline" && styles['offline'],
                selected && styles['selected'])}
                style={{ border: outlined ? "4px solid #7545EC" : null }}>

                {variant?.toLowerCase() === "offline" ? <Chip className={classNames(styles['chip'])} label={"!"} /> : null}
                <CardContent id={id}>
                    {iconUrl ? (iconUrl.includes("svg") ? <img id={id} src={iconUrl} alt="img" /> : <video src={iconUrl} autoPlay={autoPlay} alt="video" />) : null}
                </CardContent>
                {title ? <Typography id={id} className={styles["card-title"]}>{title}</Typography> : null}
            </CardWrap>
        </div>
    )
}
