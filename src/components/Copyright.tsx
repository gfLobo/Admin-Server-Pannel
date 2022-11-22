import { Typography } from "@mui/material";
import Link from '@mui/material/Link';

export default function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary" align="center">
            <Link color="inherit" href="https://github.com/gfLobo/Admin-Server-Pannel">
                <img src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white" width={100}  style={{borderRadius:"5%"}} />
            </Link>
        </Typography>
    );
}