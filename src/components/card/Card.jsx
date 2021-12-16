import styles from "./Card.module.scss";
import { Card as CardWrap, CardContent, Typography, Chip } from '@mui/material';
import classNames from "classnames";

export default function Card({ iconUrl, outlined = false, title, variant, autoPlay, onClick }) {
    return (
        <div className={classNames(styles['card'])} onClick={onClick}>
            
            <CardWrap className={classNames(styles['card-component'])} style={{ border: outlined ? "4px solid #7545EC" : null }}>
            <Chip className={classNames(styles['chip'])}>{variant === 'offline' ? "!" : ""}</Chip>
                <CardContent>
                    {iconUrl ? (iconUrl.includes("svg") ? <img src={iconUrl} alt="img" /> : <video src={iconUrl} autoPlay={autoPlay} alt="video" />) : null}
                    <Typography>{variant}</Typography>
                </CardContent>
                {title ? <Typography className={styles["card-title"]}>{title}</Typography> : null}
            </CardWrap>
        </div>
    )
}
