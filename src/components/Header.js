 import PropTypes from 'prop-types'
 import Button from './Button'

 const Header = ({title}) => {
   const onClick = () => {
      console.log('clicked')
   }

     return (
         <header className = 'header'>
             <h2>{title}</h2> 
             <Button color='green' text='hello' onClick={onClick}/> 
         
         </header>
     )
 }

 Header.defaultProps = {
     title: 'Task Tracker',
 }

 Header.propTypes = {
     title: PropTypes.string.isRequired,
 }
 //css in js
//  const headingStyle = {
//       backgroundColor: 'lightgreen',
//       padding: 10,
//       width: 100
//  }
 export default Header
 