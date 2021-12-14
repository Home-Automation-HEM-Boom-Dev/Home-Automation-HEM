import styles from "./Card.module.scss";
import { Card as CardWrap, CardContent, CardMedia, IconButton, Typography } from '@mui/material';
import classNames from "classnames";

export default function Card({ iconUrl, outlined = false, title, variant, onClick }) {
    return (
        <div className={classNames(styles['card'])} onClick={onClick}>
            <CardWrap className={classNames(styles['card-component'])} style={{ border: outlined ? "4px solid #7545EC" : null }}>
                <CardContent>
                    <IconButton>
                        {iconUrl ? <CardMedia component={iconUrl.includes("svg") ? "img" : "video"} src={`${iconUrl}`} autoPlay /> : null}
                    </IconButton>
                </CardContent>
                {title ? <Typography className={styles["card-title"]}>{title}</Typography> : null}
            </CardWrap>
        </div>
    )
}
