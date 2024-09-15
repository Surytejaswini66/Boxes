const Box = props => {
  let {name, className} = props
  return <p className={className}>{name}</p>
  //  Write your code here.
}

const element = (
  <div>
    <h1>Boxes</h1>
    <Box name='Small' className='smallBox' />
    <Box name='Medium' className='mediumBox' />
    <Box name='Large' className='largeBox' />
  </div>
  //  Write your code here.
)

ReactDOM.render(element, document.getElementById('root'))
