import styles from "./Card.module.scss";
import { Card as CardWrap, CardContent, CardMedia, IconButton, Typography} from '@mui/material';
import classNames from "classnames";

export default function Card({ iconUrl, outlined = false, title}) {
    let index = `${iconUrl.length}`;
    let isSvgorVideo = +index - 4;
    const svgOrMp4 = `${iconUrl.substring(isSvgorVideo)}`;

    return (
        <CardWrap className={svgOrMp4 != ".svg" ? classNames(styles['video-card']) : classNames(styles['card'])} style={{ border: outlined ? "3px solid #7441F3" : "" }}>
            <CardContent className={svgOrMp4 != ".svg" ? classNames(styles['video-card-content']) : ""}>
                <IconButton>
                    {iconUrl && <CardMedia component={svgOrMp4 === ".svg" ? "img" : "video"} src={`${iconUrl}`} autoPlay />}
                </IconButton>
            </CardContent>
            {title ? <Typography className={styles["card-title"]}>{title}</Typography> : null}
        </CardWrap>
    )
}
