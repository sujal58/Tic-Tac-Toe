type boxprops = {
  value: string | null,
  onBoxClick: () => void,
}

function Box(props: boxprops) {

   
  return (
    <div className={`bg-slate-700 rounded-lg flex justify-center items-center w-4/12 cursor-pointer`} onClick={props.onBoxClick}>
        {<h1 className={`${props.value === "X" ? "text-cyan-500" : "text-yellow-300"} font-bold text-4xl md:text-5xl`}>{props.value}</h1>}
    </div>
  )
}

export default Box