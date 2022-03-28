/* function Components named Gif, have 2 props: title and url
 * use {} to declare props
 * just => for return 1 line of code
 */
const Gif = ({ title, url }) => {
    return (
        <>
            <p>{title}</p>
            <img src={url} alt={title} />
        </>
    )
}

export default Gif
