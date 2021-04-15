const Biography = (props,state) => {
  
    return (
        <div>
          <h3 className={props.className}><span>Rosaire</span> <span>Kota</span></h3>
            <p>{state.items}</p>
        </div>
    )
}
export default Biography;