import React from "react"

interface Asset{
  name:string
  symbol:string
  value:number
  change:number
}

interface PortfolioSummaryProps{
  assets:Asset[]
}

function PortfolioSummary({assets}:PortfolioSummaryProps){
  let total=0
  let avg=0

  for(let a of assets){
    total+=a.value
    avg+=a.change
  }

  avg=assets.length?avg/assets.length:0

  return(
    <div>
      <h3>Total Value: {total}</h3>
      <h3>Average Change: {avg}%</h3>
    </div>
  )
}

interface AssetEditorProps{
  onUpdate:(asset:Asset)=>void
}

interface AssetEditorState{
  name:string
  symbol:string
  value:string
  change:string
}

class AssetEditor extends React.Component<AssetEditorProps,AssetEditorState>{

  state:AssetEditorState={
    name:"",
    symbol:"",
    value:"",
    change:""
  }

  handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
    this.setState({
      ...this.state,
      [e.target.name]:e.target.value
    })
  }

  handleSubmit=(e:React.FormEvent)=>{
    e.preventDefault()

    this.props.onUpdate({
      name:this.state.name,
      symbol:this.state.symbol,
      value:Number(this.state.value),
      change:Number(this.state.change)
    })

    this.setState({
      name:"",
      symbol:"",
      value:"",
      change:""
    })
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <input name="name" value={this.state.name} onChange={this.handleChange}/>
        <input name="symbol" value={this.state.symbol} onChange={this.handleChange}/>
        <input name="value" value={this.state.value} onChange={this.handleChange}/>
        <input name="change" value={this.state.change} onChange={this.handleChange}/>
        <button type="submit">Update</button>
      </form>
    )
  }
}
function App() {
  const assets = [
    { name: "Apple", symbol: "AAPL", value: 100, change: 5 },
    { name: "Tesla", symbol: "TSLA", value: 200, change: 10 }
  ]

  return <PortfolioSummary assets={assets} />
}

export default App