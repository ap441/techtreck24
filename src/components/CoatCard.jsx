const CoatCard = ({imgURL, changeCoatImage, coatImg}) => {
    const handleClick = () => {
        if(coatImg !== imgURL.coat){
            changeCoatImage(imgURL.coat)
        }
    };
    return(
        <div className={`${coatImg === imgURL.coat ? 
            'border-primary' : 'border-transparent'
            }selection-container`} onClick={ handleClick }>
            <div className="selection-card">
                <img src={imgURL.thumbnail} alt="" />
            </div>
        </div>
    )
}

export default CoatCard