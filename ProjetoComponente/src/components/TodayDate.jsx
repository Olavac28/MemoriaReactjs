function TodayDate() {
    const today = new Date();
    const formatDate = today.toLocaleDateString('pt-br')
    return(
        <p>{formatDate}</p>
    )
}

export default TodayDate;