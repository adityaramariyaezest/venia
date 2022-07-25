const Title = ({ title, isSpecial }) => <h1 className={isSpecial ? 'heading__speciality' : ''}>{title}</h1>

export default Title;