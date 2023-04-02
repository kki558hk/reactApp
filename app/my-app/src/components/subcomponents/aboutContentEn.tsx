import Typography from '@mui/material/Typography';
import { Container } from '@mui/system';

const AboutContentEn = () => {
    return (
        <>
            <Container sx={{ padding: '3%' }}>
                <Typography
                    variant="h3"
                    align="center"
                    color="text.primary"
                >
                    About this website
                </Typography>
                <Typography
                    variant="body1"
                    align="center"
                    color="text.primary"
                    marginTop={'2%'}
                    sx={{ fontWeight: 'bold', textAlign: 'justify' }}
                >
                    <Typography component="p" variant="h5">
                        Hi,there.This website is developed by me,a Japanese who loves
                        to read and get inspired by famous people's quote.
                    </Typography>
                    <Typography component="p" variant="h5">
                        I like stock investing,but since the recent market crash,
                        I kinda think I am in need of something that leads me to a right
                        path so that I don't panic whenever people get fearful of pessimistic social
                        sentiment.Whenever I feel get lost on investing or whatever it is, I believe this website is going to
                        help me to avoid the wrong path.So I decided to collect famous people's quote by the way I can
                        read them again and again whenever I need to do.
                    </Typography>
                    <Typography component="p" variant="h5">
                        For investing enthusiasts,you should check out the movie below.
                        One movie of warren buffett show us how important it is to have
                        solid reasoning and not to forget about it.
                    </Typography>
                    <Typography component="p" variant="h6" sx={{ marginTop: '5%' }}>
                        Important Notice:This website is hosted on the free cloud that seems to be still in developing and
                        program is not tested by anyone but me.So I am going to fix it
                        if the bugs in the program are found out.
                    </Typography>
                </Typography>
            </Container>

        </>
    )
}

export default AboutContentEn;