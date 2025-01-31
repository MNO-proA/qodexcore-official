export const TitleLogo = ({ title, caption, className }) => {
  return (
    <h1 className={`${className}  title-logo`}>
      <span>{caption}</span>{title}
    </h1>
  )
}

export const TitleLogoWithoutCaption = ({ title, caption, className }) => {
  return (
    <h1 className='title-logo-icon'>
      <span>{caption}</span>
    </h1>
  )
}

export const TitleLogoForFooter = ({ title, caption, className }) => {
  return (
    <h1 className='title-logo-footer'>
      <span>{caption}</span>{title}
    </h1>
  )
}

export const TitleSm = ({ title }) => {
  return <h1 className='titleSm'>{title}</h1>
}
export const Title = ({ title, className }) => {
  return <h1 className={`${className} title`}>{title}</h1>
}
