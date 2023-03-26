import Typography from '@mui/material/Typography';

const AboutContentJp = () => {
    return (
        <>
            <Typography
                variant="h4"
                align="center"
                color="text.primary"
            >
                当ウェブサイトに関して。
            </Typography>
            <Typography
                variant="body1"
                align="center"
                color="text.primary"
                marginTop={'2%'}
                sx={{ fontWeight: 'bold' }}
            >
                こんにちは。
                当ウェブサイトは日頃有名人の名言とその背景に関するお話が好きな一人の日本人
                によって開発されています。
            </Typography>
            <Typography
                variant="body1"
                align="center"
                color="text.primary"
                marginTop={'1%'}
                sx={{ fontWeight: 'bold' }}
            >
                また私の趣味は株式投資なのですが、昨今のマーケットに蔓延る不安から、誤った方向へ向かう投資家を救い、
                正しい方向に導いてくれるものが必要なのではないかと感じました。そうすれば社会・経済を不安な空気が覆っても、
                自身は冷静でいられるのではないかと思いました。
            </Typography>
            <Typography
                variant="body1"
                align="center"
                color="text.primary"
                marginTop={'1%'}
                sx={{ fontWeight: 'bold' }}
            >
                そのような理由から投資やそれ以外の何かで迷った時、このウェブサイトが自分に正しい方向を示してくれることを期待して、
                著名人の名言を集め、いつでも振り返れるような形でまとめることを決めました。
            </Typography>
            <Typography
                variant="body1"
                align="center"
                color="text.primary"
                marginTop={'1%'}
                sx={{ fontWeight: 'bold' }}
            >
                投資愛好家の皆さんがもしこのページを見た場合、下の動画をぜひチェックしてみてください。
                世界一の投資家ウェーレンバフェットのインタビュー動画です(相当前のものですが)。
                たった一つの動画で、合理的に考え、他者に流され自分の信念を忘れないことという強いメッセージを
                感じ取ることができると思います。
            </Typography>
            <Typography
                variant="body2"
                align="center"
                color="text.primary"
                marginTop={'1%'}
            >
                重要なお知らせ：このウェブサイトはまだ発展途上と思われる無料クラウドでホストされています。また完全な個人開発
                なので、プログラムは私以外にはテストされていません。そのためバグを見つけた場合、直せる時に直します。
            </Typography>
        </>
    )
}

export default AboutContentJp;